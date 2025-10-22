-- Create Database Schema for KBJ & Co Website

-- Courts Table
CREATE TABLE IF NOT EXISTS courts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Judgements Table
CREATE TABLE IF NOT EXISTS judgements (
    id SERIAL PRIMARY KEY,
    court_id INTEGER REFERENCES courts(id) ON DELETE CASCADE,
    title VARCHAR(500) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News Reports Table
CREATE TABLE IF NOT EXISTS news_reports (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    image_name VARCHAR(255) NOT NULL,
    image_path VARCHAR(500) NOT NULL,
    source VARCHAR(255),
    date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Public Info Table
CREATE TABLE IF NOT EXISTS public_info (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default courts
INSERT INTO courts (name) VALUES 
    ('Supreme Court'),
    ('Delhi High Court'),
    ('Central Administrative Tribunal'),
    ('Delhi School Tribunal'),
    ('Labour Courts'),
    ('District Courts')
ON CONFLICT (name) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_judgements_court_id ON judgements(court_id);
CREATE INDEX IF NOT EXISTS idx_judgements_date ON judgements(date DESC);
CREATE INDEX IF NOT EXISTS idx_news_reports_date ON news_reports(date DESC);
CREATE INDEX IF NOT EXISTS idx_public_info_date ON public_info(date DESC);
