import express, { Request, Response } from 'express';
import { query } from '../db.js';

const router = express.Router();

// Get all courts (public)
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await query('SELECT * FROM courts ORDER BY id');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching courts:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
