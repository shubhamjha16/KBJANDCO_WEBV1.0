import express, { Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { query } from '../db.js';
import authMiddleware, { AuthRequest } from '../middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../../public/pdfs/judgements');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'));
        }
    },
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Get all judgements (public)
router.get('/', async (req, res: Response): Promise<void> => {
    try {
        const result = await query(`
            SELECT j.*, c.name as court_name 
            FROM judgements j 
            JOIN courts c ON j.court_id = c.id 
            ORDER BY j.date DESC
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching judgements:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get judgements by court (public)
router.get('/by-court/:courtId', async (req, res: Response): Promise<void> => {
    try {
        const { courtId } = req.params;
        const result = await query(
            'SELECT * FROM judgements WHERE court_id = $1 ORDER BY date DESC',
            [courtId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching judgements by court:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Add new judgement (protected)
router.post('/', authMiddleware, upload.single('pdf'), async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { court_id, title, date, description } = req.body;
        const file = req.file;

        if (!file) {
            res.status(400).json({ error: 'PDF file is required' });
            return;
        }

        const result = await query(
            'INSERT INTO judgements (court_id, title, file_name, file_path, date, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [court_id, title, file.filename, `/pdfs/judgements/${file.filename}`, date, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding judgement:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete judgement (protected)
router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        // Get file path before deleting
        const result = await query('SELECT file_name FROM judgements WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Judgement not found' });
            return;
        }

        const fileName = result.rows[0].file_name;
        const filePath = path.join(__dirname, '../../public/pdfs/judgements', fileName);

        // Delete from database
        await query('DELETE FROM judgements WHERE id = $1', [id]);

        // Delete file
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        res.json({ message: 'Judgement deleted successfully' });
    } catch (error) {
        console.error('Error deleting judgement:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
