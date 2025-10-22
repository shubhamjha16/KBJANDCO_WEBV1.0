import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from '../db.js';

const router = express.Router();

// Login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;

        // Query user from database
        const result = await query(
            'SELECT * FROM admin_users WHERE username = $1',
            [username]
        );

        if (result.rows.length === 0) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const user = result.rows[0];

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password_hash);

        if (!isValidPassword) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET!,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create first admin user (run once)
router.post('/setup-admin', async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password, email } = req.body;

        // Check if admin already exists
        const existing = await query('SELECT * FROM admin_users WHERE username = $1', [username]);
        
        if (existing.rows.length > 0) {
            res.status(400).json({ error: 'Admin user already exists' });
            return;
        }

        // Hash password
        const passwordHash = await bcrypt.hash(password, 10);

        // Insert admin user
        const result = await query(
            'INSERT INTO admin_users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING id, username, email',
            [username, passwordHash, email]
        );

        res.json({
            message: 'Admin user created successfully',
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Setup admin error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
