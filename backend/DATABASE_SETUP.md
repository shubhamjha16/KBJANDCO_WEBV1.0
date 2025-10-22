# PostgreSQL Database Setup Guide

## Step 1: Install PostgreSQL

1. Download PostgreSQL from: https://www.postgresql.org/download/windows/
2. Install with default settings
3. Remember the password you set for the `postgres` user

## Step 2: Create Database

Open pgAdmin or use psql command line:

```sql
CREATE DATABASE kbjandco;
```

## Step 3: Run Schema

1. Connect to the `kbjandco` database
2. Run the SQL script from `database/schema.sql`

Or use command line:
```bash
psql -U postgres -d kbjandco -f database/schema.sql
```

## Step 4: Configure Environment

Edit the `.env` file with your PostgreSQL credentials:

```
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/kbjandco
```

Replace `YOUR_PASSWORD` with your actual PostgreSQL password.

## Step 5: Create Admin User

Start the backend server:
```bash
npm run server
```

Then make a POST request to create admin:
```bash
curl -X POST http://localhost:5000/api/auth/setup-admin \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123","email":"admin@kbjandco.com"}'
```

Or use Postman/Thunder Client to send this request.

## Step 6: Test Connection

Navigate to: http://localhost:5000/api/health

You should see: `{"status":"OK","message":"Server is running"}`

## Troubleshooting

### Connection Error
- Check if PostgreSQL service is running
- Verify DATABASE_URL in .env file
- Ensure database `kbjandco` exists

### Port Already in Use
- Change PORT in .env file
- Kill process using port 5000

### Permission Denied
- Check PostgreSQL user permissions
- Ensure user has CREATE/INSERT/UPDATE/DELETE rights
