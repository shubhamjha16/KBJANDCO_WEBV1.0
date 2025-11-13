#!/bin/bash

# 🚀 Quick Setup Script for Real Authentication
# This script helps you set up real authentication for KBJ & CO website

echo "🔐 KBJ & CO Real Authentication Setup"
echo "======================================"

echo ""
echo "Step 1: Install required packages"
echo "npm install @auth0/auth0-react"
echo "# OR for Firebase:"
echo "# npm install firebase"

echo ""
echo "Step 2: Create environment file"
cat > .env.example << EOF
# Auth0 Configuration
REACT_APP_AUTH0_DOMAIN=your-tenant.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id-from-auth0
REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000/callback

# OR Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id

# Production URLs
REACT_APP_PRODUCTION_URL=https://kbjandco.com
EOF

echo ""
echo "Step 3: Setup Authentication Provider Accounts"
echo ""
echo "🔵 Google OAuth Setup:"
echo "1. Go to: https://console.cloud.google.com/"
echo "2. Create new project or select existing"
echo "3. Enable Google+ API"
echo "4. Create OAuth 2.0 credentials"
echo "5. Add authorized domains: localhost:3000, yourdomain.com"

echo ""
echo "🟦 Microsoft OAuth Setup:"
echo "1. Go to: https://portal.azure.com/"
echo "2. Register new application"
echo "3. Configure redirect URIs"
echo "4. Generate client secret"

echo ""
echo "🍎 Apple Sign-In Setup:"
echo "1. Apple Developer Account required ($99/year)"
echo "2. Go to: https://developer.apple.com/"
echo "3. Create Sign in with Apple service"
echo "4. Configure domains and redirect URLs"

echo ""
echo "Step 4: Choose Your Authentication Service"
echo ""
echo "Option A: Auth0 (Recommended for beginners)"
echo "- Handles all OAuth providers"
echo "- Free tier: 7,000 active users/month"
echo "- Easy setup and maintenance"
echo "- Signup: https://auth0.com/"

echo ""
echo "Option B: Firebase Authentication"
echo "- Google's solution"
echo "- Generous free tier"
echo "- Good integration with other Google services"
echo "- Signup: https://firebase.google.com/"

echo ""
echo "Option C: Direct OAuth Implementation"
echo "- More control but more work"
echo "- Free (except Apple Developer account)"
echo "- Requires more security expertise"

echo ""
echo "Step 5: Implementation"
echo "1. Copy .env.example to .env"
echo "2. Fill in your actual credentials"
echo "3. Replace mock AuthContext with real implementation"
echo "4. Test authentication flow"
echo "5. Deploy to production with HTTPS"

echo ""
echo "🔒 Security Checklist:"
echo "- Use HTTPS in production"
echo "- Never commit .env files"
echo "- Implement proper session management"
echo "- Add rate limiting"
echo "- Test logout functionality"
echo "- Validate tokens on backend"

echo ""
echo "📞 Need Help?"
echo "- Auth0 Documentation: https://auth0.com/docs"
echo "- Firebase Auth Docs: https://firebase.google.com/docs/auth"
echo "- Google OAuth Guide: https://developers.google.com/identity/protocols/oauth2"

echo ""
echo "Current Status: The website is using MOCK authentication"
echo "Follow this guide to implement real authentication!"