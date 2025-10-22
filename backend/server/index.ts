import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, '../public/pdfs')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));

// Import routes
import authRoutes from './routes/auth.js';
import judgementsRoutes from './routes/judgements.js';
import newsRoutes from './routes/news.js';
import publicInfoRoutes from './routes/publicInfo.js';
import courtsRoutes from './routes/courts.js';

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/judgements', judgementsRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/public-info', publicInfoRoutes);
app.use('/api/courts', courtsRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Database: ${process.env.DATABASE_URL ? 'Connected' : 'Not configured'}`);
});
