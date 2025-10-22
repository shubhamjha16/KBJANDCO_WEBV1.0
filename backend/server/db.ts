import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Test connection
pool.on('connect', () => {
    console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err: Error) => {
    console.error('❌ Unexpected database error:', err);
});

export const query = (text: string, params?: any[]): Promise<QueryResult> => {
    return pool.query(text, params);
};

export default pool;
