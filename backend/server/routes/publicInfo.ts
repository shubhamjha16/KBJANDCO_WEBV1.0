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

// Configure multer for PDF uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../../public/pdfs/public-info');
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

// Get all public info documents (public)
router.get('/', async (req, res: Response): Promise<void> => {
    try {
        const result = await query('SELECT * FROM public_info ORDER BY date DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching public info:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Add new public info document (protected)
router.post('/', authMiddleware, upload.single('pdf'), async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { title, date, description } = req.body;
        const file = req.file;

        if (!file) {
            res.status(400).json({ error: 'PDF file is required' });
            return;
        }

        const result = await query(
            'INSERT INTO public_info (title, file_name, file_path, date, description) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [title, file.filename, `/pdfs/public-info/${file.filename}`, date, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding public info:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete public info document (protected)
router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const result = await query('SELECT file_name FROM public_info WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Document not found' });
            return;
        }

        const fileName = result.rows[0].file_name;
        const filePath = path.join(__dirname, '../../public/pdfs/public-info', fileName);

        await query('DELETE FROM public_info WHERE id = $1', [id]);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        res.json({ message: 'Document deleted successfully' });
    } catch (error) {
        console.error('Error deleting public info:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
