# KBJ & CO Website - Backend API Documentation

## Architecture

```
Frontend (React) ←→ Backend API (Express) ←→ PostgreSQL Database
     Port 3000              Port 5000
```

## Setup Instructions

### 1. Install PostgreSQL
- Download from postgresql.org
- Create database: `kbjandco`
- Run schema: `database/schema.sql`

### 2. Configure Environment
Edit `.env` file:
```
DATABASE_URL=postgresql://postgres:yourpassword@localhost:5432/kbjandco
JWT_SECRET=your-secret-key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

### 3. Start Servers

**Backend Server:**
```bash
npm run server
```
Runs on: http://localhost:5000

**Frontend Dev Server:**
```bash
npm run dev
```
Runs on: http://localhost:3000

### 4. Create Admin User

```bash
curl -X POST http://localhost:5000/api/auth/setup-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123","email":"admin@kbjandco.com"}'
```

## API Endpoints

### Authentication

**POST** `/api/auth/login`
```json
{
  "username": "admin",
  "password": "admin123"
}
```
Returns JWT token for authenticated requests.

**POST** `/api/auth/setup-admin`
Create first admin user (one-time setup).

---

### Judgements

**GET** `/api/judgements`
Get all judgements (public)

**GET** `/api/judgements/by-court/:courtId`
Get judgements by specific court

**POST** `/api/judgements` (Protected)
Upload new judgement
- Headers: `Authorization: Bearer <token>`
- Body: multipart/form-data
  - `pdf`: PDF file
  - `court_id`: Court ID (1-6)
  - `title`: Case title
  - `date`: Date (YYYY-MM-DD)
  - `description`: Description

**DELETE** `/api/judgements/:id` (Protected)
Delete judgement by ID

---

### News Reports

**GET** `/api/news`
Get all news reports (public)

**POST** `/api/news` (Protected)
Upload new news report
- Headers: `Authorization: Bearer <token>`
- Body: multipart/form-data
  - `image`: Image file (JPG/PNG)
  - `title`: News title
  - `source`: News source
  - `date`: Date (YYYY-MM-DD)
  - `description`: Description

**DELETE** `/api/news/:id` (Protected)
Delete news report by ID

---

### Public Info

**GET** `/api/public-info`
Get all public info documents (public)

**POST** `/api/public-info` (Protected)
Upload new document
- Headers: `Authorization: Bearer <token>`
- Body: multipart/form-data
  - `pdf`: PDF file
  - `title`: Document title
  - `date`: Date (YYYY-MM-DD)
  - `description`: Description

**DELETE** `/api/public-info/:id` (Protected)
Delete document by ID

---

### Courts

**GET** `/api/courts`
Get all courts (public)

---

## File Upload Limits

- PDFs: 10MB max
- Images: 5MB max

## Database Schema

### Tables:
- `courts` - Court names (6 courts)
- `judgements` - PDF documents for each court
- `news_reports` - News article images
- `public_info` - Public information PDFs
- `admin_users` - Admin login credentials

## Security

- JWT authentication for protected routes
- Bcrypt password hashing
- File type validation
- File size limits
- CORS enabled for frontend

## Next Steps

1. Install PostgreSQL
2. Create database and run schema
3. Configure .env file
4. Start backend server
5. Create admin user
6. Build admin panel UI (coming next)
