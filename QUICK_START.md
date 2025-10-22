# Quick Start Guide - KBJ & CO Website

## ✅ Project Successfully Reorganized!

The project has been restructured into separate **frontend** and **backend** folders following industry best practices.

## 📁 Current Structure

```
my-website/
├── frontend/              # React + TypeScript Frontend
│   ├── src/              # Source code
│   ├── public/           # Static files
│   ├── package.json      # Frontend dependencies
│   └── webpack.config.cjs
│
├── backend/              # Node.js + Express Backend
│   ├── server/           # API routes & logic
│   ├── database/         # PostgreSQL schema
│   ├── .env             # Environment variables
│   └── package.json      # Backend dependencies
│
└── README.md            # Main documentation
```

## 🚀 Both Servers Are Running!

### Frontend (React)
- **URL**: http://localhost:3000
- **Status**: ✅ Running
- **Location**: `frontend/`

### Backend (API)
- **URL**: http://localhost:5000
- **Status**: ✅ Running
- **Location**: `backend/`

## 📝 How to Work With This Structure

### Starting the Servers

**Backend:**
```bash
cd backend
npm run dev
```
- Runs on port 5000
- Auto-reloads on code changes
- Serves API endpoints

**Frontend:**
```bash
cd frontend
npm run dev
```
- Runs on port 3000
- Auto-reloads on code changes
- Opens browser automatically

### Making Changes

**Frontend Changes:**
1. Navigate to `frontend/src/components/`
2. Edit React components (.tsx files)
3. Changes auto-reload in browser

**Backend Changes:**
1. Navigate to `backend/server/routes/`
2. Edit API routes (.ts files)
3. Server auto-restarts

### Adding New Features

**New Frontend Component:**
```bash
cd frontend/src/components
# Create YourComponent.tsx
```

**New Backend Route:**
```bash
cd backend/server/routes
# Create yourRoute.ts
# Import in backend/server/index.ts
```

## 📦 Dependencies

Each folder has its own `package.json` and `node_modules`:

- **Frontend**: React, TypeScript, Webpack, Babel
- **Backend**: Express, PostgreSQL, JWT, Multer

To install new packages:
```bash
# Frontend
cd frontend
npm install package-name

# Backend
cd backend
npm install package-name
```

## 🗄️ Database Setup (Next Step)

The backend is configured but PostgreSQL needs to be set up:

1. Install PostgreSQL
2. Create database: `kbjandco`
3. Run schema: `backend/database/schema.sql`
4. Update: `backend/.env` with your password

See `backend/DATABASE_SETUP.md` for detailed instructions.

## 📚 Documentation

- **Main README**: `README.md`
- **Frontend Guide**: `frontend/README.md`
- **Backend API**: `backend/README.md`
- **API Reference**: `backend/API_DOCUMENTATION.md`
- **Database Setup**: `backend/DATABASE_SETUP.md`

## 🎯 What's Working

✅ Frontend server running on port 3000  
✅ Backend server running on port 5000  
✅ All TypeScript code compiling  
✅ Hot reload enabled for both  
✅ Proper folder separation  
✅ Independent package management  

## ⚠️ What's Needed

⏳ Install PostgreSQL  
⏳ Run database schema  
⏳ Create admin user  
⏳ Connect frontend to backend API  

## 🔗 Useful Commands

```bash
# View frontend in browser
start http://localhost:3000

# Test backend API
curl http://localhost:5000/api/courts

# Stop all Node processes
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force

# Rebuild everything
cd frontend && npm run build
cd ../backend && npm run build
```

## 🎨 Next Steps

1. **Setup PostgreSQL** - Follow `backend/DATABASE_SETUP.md`
2. **Create Admin User** - Run setup-admin endpoint
3. **Upload Content** - Add PDFs and images via API
4. **Customize Design** - Edit `frontend/src/components/`
5. **Add Team Photos** - Place in `frontend/public/images/team/`

## 💡 Tips

- Keep both terminals open while developing
- Frontend changes reflect instantly
- Backend changes trigger auto-restart
- Check browser console for frontend errors
- Check terminal for backend errors

---

**Need help?** Check the README files in each folder for detailed documentation.
