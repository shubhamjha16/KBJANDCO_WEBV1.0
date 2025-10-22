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

// Configure multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../../public/images/news');
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
        const allowedTypes = /jpeg|jpg|png|gif|webp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Get all news reports (public)
router.get('/', async (req, res: Response): Promise<void> => {
    try {
        const result = await query('SELECT * FROM news_reports ORDER BY date DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching news reports:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Add new news report (protected)
router.post('/', authMiddleware, upload.single('image'), async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { title, source, date, description } = req.body;
        const file = req.file;

        if (!file) {
            res.status(400).json({ error: 'Image file is required' });
            return;
        }

        const result = await query(
            'INSERT INTO news_reports (title, image_name, image_path, source, date, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [title, file.filename, `/images/news/${file.filename}`, source, date, description]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error adding news report:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete news report (protected)
router.delete('/:id', authMiddleware, async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const result = await query('SELECT image_name FROM news_reports WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'News report not found' });
            return;
        }

        const imageName = result.rows[0].image_name;
        const imagePath = path.join(__dirname, '../../public/images/news', imageName);

        await query('DELETE FROM news_reports WHERE id = $1', [id]);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        res.json({ message: 'News report deleted successfully' });
    } catch (error) {
        console.error('Error deleting news report:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
