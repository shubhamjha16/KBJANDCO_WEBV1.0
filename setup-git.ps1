# Git Setup Script for KBJ & CO Website
# Run this script in PowerShell after restarting VS Code

# Navigate to project directory
Set-Location "c:\Users\Hewlett Packard\OneDrive\Desktop\KBJANDCO_WEB_V1.0\my-website"

# Initialize Git
Write-Host "Step 1: Initializing Git..." -ForegroundColor Green
git init

# Configure Git (replace with your details)
Write-Host "Step 2: Configuring Git..." -ForegroundColor Green
git config user.name "shubhamjha16"
git config user.email "your.email@example.com"

# Add all files
Write-Host "Step 3: Adding all files..." -ForegroundColor Green
git add .

# Create initial commit
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit: KBJ & CO law firm website with React + TypeScript frontend and Express backend"

# Add remote repository
Write-Host "Step 5: Adding remote repository..." -ForegroundColor Green
git remote add origin https://github.com/shubhamjha16/KBJANDCO_WEBV1.0.git

# Set branch to main
Write-Host "Step 6: Setting branch to main..." -ForegroundColor Green
git branch -M main

# Push to GitHub
Write-Host "Step 7: Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "`nDone! Your project is now on GitHub!" -ForegroundColor Cyan
Write-Host "Visit: https://github.com/shubhamjha16/KBJANDCO_WEBV1.0" -ForegroundColor Cyan
