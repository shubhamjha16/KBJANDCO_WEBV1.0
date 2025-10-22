# KBJ & CO - Backend API

Node.js + Express + TypeScript backend API with PostgreSQL database.

## Structure

```
backend/
├── server/
│   ├── routes/           # API routes
│   │   ├── auth.ts       # Authentication endpoints
│   │   ├── courts.ts     # Courts endpoints
│   │   ├── judgements.ts # Judgements CRUD
│   │   ├── news.ts       # News reports CRUD
│   │   └── publicInfo.ts # Public info CRUD
│   ├── middleware/
│   │   └── auth.ts       # JWT authentication middleware
│   ├── db.ts            # PostgreSQL connection
│   └── index.ts         # Express server
├── database/
│   └── schema.sql       # Database schema
├── .env                 # Environment variables
└── package.json
```

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure PostgreSQL

**Install PostgreSQL:**
- Windows: Download from postgresql.org
- Mac: `brew install postgresql`
- Linux: `sudo apt-get install postgresql`

**Create Database:**
```bash
psql -U postgres
CREATE DATABASE kbjandco;
\q
```

**Run Schema:**
```bash
psql -U postgres -d kbjandco -f database/schema.sql
```

### 3. Configure Environment

Edit `.env` file:
```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/kbjandco
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

### 4. Create Admin User

```bash
curl -X POST http://localhost:5000/api/auth/setup-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123","email":"admin@kbjandco.com"}'
```

## Running

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

### Build TypeScript
```bash
npm run build
```

Server runs on `http://localhost:5000`

## API Endpoints

### Authentication

**Setup Admin User** (First time only)
```http
POST /api/auth/setup-admin
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123",
  "email": "admin@kbjandco.com"
}
```

**Login**
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}

Response: { "token": "jwt_token_here" }
```

### Judgements

**Get All Judgements**
```http
GET /api/judgements
```

**Get Judgements by Court**
```http
GET /api/judgements/by-court/:court_id
```

**Upload Judgement** (Requires Auth)
```http
POST /api/judgements
Authorization: Bearer {token}
Content-Type: multipart/form-data

FormData:
- pdf: File
- court_id: number
- title: string
- date: string (YYYY-MM-DD)
- description: string
```

**Delete Judgement** (Requires Auth)
```http
DELETE /api/judgements/:id
Authorization: Bearer {token}
```

### News Reports

**Get All News**
```http
GET /api/news
```

**Upload News** (Requires Auth)
```http
POST /api/news
Authorization: Bearer {token}
Content-Type: multipart/form-data

FormData:
- image: File
- title: string
- source: string
- date: string
- description: string
```

**Delete News** (Requires Auth)
```http
DELETE /api/news/:id
Authorization: Bearer {token}
```

### Public Information

**Get All Public Info**
```http
GET /api/public-info
```

**Upload Public Info** (Requires Auth)
```http
POST /api/public-info
Authorization: Bearer {token}
Content-Type: multipart/form-data

FormData:
- pdf: File
- title: string
- date: string
- description: string
```

**Delete Public Info** (Requires Auth)
```http
DELETE /api/public-info/:id
Authorization: Bearer {token}
```

### Courts

**Get All Courts**
```http
GET /api/courts
```

Returns list of 6 courts:
1. Supreme Court of India
2. High Court of Delhi
3. Central Administrative Tribunal (CAT)
4. Delhi School Tribunal
5. Labour Courts
6. District Courts

## Database Schema

### Tables

**courts**
- id, name

**judgements**
- id, court_id (FK), title, file_name, file_path, date, description, created_at

**news_reports**
- id, title, image_name, image_path, source, date, description, created_at

**public_info**
- id, title, file_name, file_path, date, description, created_at

**admin_users**
- id, username (unique), password_hash, email (unique), created_at

## File Upload Limits

- PDFs: Max 10MB
- Images: Max 5MB

Accepted formats:
- PDFs: `.pdf`
- Images: `.jpg`, `.jpeg`, `.png`

## Security

- JWT token expires in 24 hours
- Passwords hashed with bcryptjs (10 rounds)
- CORS enabled for `http://localhost:3000`
- File type validation on uploads
- Authentication required for all write operations

## Error Handling

All endpoints return JSON:

**Success:**
```json
{
  "id": 1,
  "title": "Document Title",
  ...
}
```

**Error:**
```json
{
  "error": "Error message here"
}
```

HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Development

Uses `tsx` for running TypeScript with ES modules support.

### Watch Mode
```bash
npm run dev
```
Auto-reloads on file changes.

## License

MIT - KBJ & CO
