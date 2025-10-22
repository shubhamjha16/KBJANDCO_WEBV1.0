# KBJ & CO Website Deployment Guide

## Overview
This guide explains how to deploy your website and connect your GoDaddy domain.

---

## Method 1: Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd my-website
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No**
- Project name? **kbjandco-website**
- Directory? **./frontend**
- Override settings? **No**

### Step 4: Production Deployment
```bash
vercel --prod
```

You'll get a URL like: `https://kbjandco-website.vercel.app`

---

## Method 2: Connect Your GoDaddy Domain to Vercel

### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `www.kbjandco.com`)
3. Vercel will show you DNS records to add

### In GoDaddy Dashboard:

1. Login to GoDaddy.com
2. Go to **My Products** → **Domains**
3. Click on your domain → **DNS Management**
4. Add these records (Vercel will provide exact values):

**For Root Domain (kbjandco.com):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds
```

**For WWW Subdomain (www.kbjandco.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 seconds
```

5. Click **Save**
6. Wait 24-48 hours for DNS propagation (usually faster - 1-2 hours)

### Verify Domain:
- Go back to Vercel dashboard
- Your domain should show as "Valid Configuration" ✅
- HTTPS certificate will be automatically issued

---

## Method 3: Deploy to Netlify

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Initialize
```bash
cd my-website/frontend
netlify init
```

### Step 4: Deploy
```bash
npm run build
netlify deploy --prod
```

### Connect GoDaddy Domain to Netlify:

**In Netlify:**
1. Go to **Domain Settings**
2. Add custom domain
3. Note the DNS records

**In GoDaddy:**
1. DNS Management
2. Add Netlify's nameservers or A/CNAME records
3. Save

---

## Method 4: Traditional Hosting (GoDaddy Hosting)

If you bought hosting from GoDaddy:

### Step 1: Build Your Project
```bash
cd frontend
npm run build
```

This creates a `dist` folder with all static files.

### Step 2: Upload via FTP

1. Get FTP credentials from GoDaddy cPanel
2. Use FileZilla or similar FTP client
3. Upload all files from `frontend/dist/` to `public_html/`

### Step 3: Setup Backend (Requires Node.js hosting)

**Note:** Standard GoDaddy shared hosting doesn't support Node.js backend.
You'll need:
- VPS hosting from GoDaddy, OR
- Deploy backend separately to Heroku/Render/Railway

---

## Post-Deployment: Making Changes

### ✅ You CAN change the website after deployment!

**If using Vercel/Netlify:**
1. Make changes in your local code
2. Commit to GitHub:
   ```bash
   git add .
   git commit -m "Updated practice areas"
   git push origin main
   ```
3. Vercel/Netlify automatically rebuilds and deploys!

**If using traditional hosting:**
1. Make changes locally
2. Run `npm run build`
3. Re-upload files via FTP

---

## Environment Variables

For production, create `.env.production` files:

**Backend (.env):**
```env
DATABASE_URL=your_production_database_url
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
PORT=5000
```

**Frontend (.env.production):**
```env
REACT_APP_API_URL=https://your-backend-url.vercel.app
```

---

## Database Setup for Production

### Option 1: Use PostgreSQL Cloud Service

**Recommended providers:**
- **Supabase** (Free tier, easy setup)
- **ElephantSQL** (Free tier)
- **Neon** (Free tier)
- **AWS RDS** (Paid)

**Steps:**
1. Create account on chosen provider
2. Create new PostgreSQL database
3. Get connection string (looks like: `postgresql://user:password@host:5432/dbname`)
4. Add to environment variables
5. Run your schema.sql to create tables

### Option 2: GoDaddy VPS with PostgreSQL
- Requires VPS or dedicated server plan
- Install PostgreSQL manually
- More complex but full control

---

## SSL Certificate (HTTPS)

### Vercel/Netlify:
✅ Automatic! Free SSL certificate issued when you connect domain

### GoDaddy Hosting:
- Some plans include free SSL
- Go to cPanel → SSL/TLS Status
- Install Let's Encrypt certificate (free)

---

## DNS Propagation Checker

After updating DNS records, check propagation:
- https://dnschecker.org
- Enter your domain
- Check if new records are visible worldwide

---

## Recommended Setup for Your Project:

### ✅ Best Approach:
1. **Frontend → Vercel** (Free, automatic deployments)
2. **Backend → Railway.app or Render.com** (Free tier available)
3. **Database → Supabase** (Free PostgreSQL hosting)
4. **Domain → GoDaddy** (Point to Vercel with DNS records)

### Cost: $0/month on free tiers! 🎉

---

## Quick Start Commands:

```bash
# Build frontend
cd frontend
npm run build

# Build backend
cd backend
npm run build

# Test production build locally
cd frontend/dist
npx serve

# Deploy to Vercel
vercel --prod

# Check for errors
npm run build 2>&1 | tee build.log
```

---

## Support:

If you face issues:
1. Check Vercel/Netlify deployment logs
2. Verify DNS records on GoDaddy
3. Test API endpoints
4. Check browser console for errors

---

## Summary:

✅ You own the domain on GoDaddy
✅ Deploy website to Vercel/Netlify (free)
✅ Point GoDaddy DNS to Vercel/Netlify
✅ Changes: Just push to GitHub → Auto-deploys!
✅ Your domain will show your website: `https://www.yourdomain.com`

Let me know if you need help with any specific step!
