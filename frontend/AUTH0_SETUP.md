# Auth0 Setup for KBJ & CO Law Firm

## Production OAuth Configuration

Your website is now ready for production with real OAuth authentication! Follow these steps to configure Auth0 with Google, Apple, and Microsoft login providers.

## Step 1: Create Auth0 Account & Application

1. Go to https://auth0.com and create a free account
2. Create a new Application:
   - Name: "KBJ & CO Law Firm"
   - Type: "Single Page Application"
   - Technology: "React"

## Step 2: Configure Application Settings

In your Auth0 Application settings:

### Allowed Callback URLs
```
http://localhost:3000, https://your-domain.com
```

### Allowed Logout URLs
```
http://localhost:3000, https://your-domain.com
```

### Allowed Web Origins
```
http://localhost:3000, https://your-domain.com
```

### Allowed Origins (CORS)
```
http://localhost:3000, https://your-domain.com
```

## Step 3: Update Environment Variables

Update your `.env` file with real Auth0 credentials:

```env
REACT_APP_AUTH0_DOMAIN=your-domain.us.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-actual-client-id
```

You'll find these values in your Auth0 Application settings:
- Domain: Found in "Basic Information" section
- Client ID: Found in "Basic Information" section

## Step 4: Configure Social Connections

### Google OAuth Setup:
1. Go to Auth0 Dashboard → Authentication → Social
2. Click "Google" and enable it
3. Enter your Google OAuth credentials:
   - Get these from Google Cloud Console
   - Create OAuth 2.0 Client ID for web application
   - Add your domain to authorized origins

### Microsoft OAuth Setup:
1. Go to Auth0 Dashboard → Authentication → Social
2. Click "Microsoft Account" and enable it
3. Enter your Microsoft Azure AD credentials:
   - Get these from Azure Portal
   - Register new application
   - Configure redirect URIs

### Apple OAuth Setup:
1. Go to Auth0 Dashboard → Authentication → Social
2. Click "Apple" and enable it
3. Enter your Apple Developer credentials:
   - Get these from Apple Developer Console
   - Create Sign In with Apple service
   - Configure return URLs

## Step 5: Configure User Roles

In Auth0 Dashboard:

1. Go to User Management → Roles
2. Create two roles:
   - **client**: For law firm clients
   - **lawyer**: For law firm staff

3. Go to Actions → Flows → Login
4. Create a custom action to assign default role:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  const namespace = 'https://kbjandco.com/';
  
  // Default new users to 'client' role
  if (!event.user.app_metadata || !event.user.app_metadata.role) {
    api.user.setAppMetadata('role', 'client');
    api.idToken.setCustomClaim(`${namespace}role`, 'client');
  } else {
    api.idToken.setCustomClaim(`${namespace}role`, event.user.app_metadata.role);
  }
};
```

## Step 6: Deploy and Test

1. Build your application:
```bash
npm run build
```

2. Deploy to your hosting platform (Netlify, Vercel, etc.)

3. Test all OAuth providers:
   - Google Sign In
   - Microsoft Sign In  
   - Apple Sign In

## Step 7: User Management

To promote users to 'lawyer' role:

1. Go to Auth0 Dashboard → User Management → Users
2. Find the user
3. Edit user metadata
4. Add: `"role": "lawyer"` to app_metadata

## Production Security Checklist

- ✅ Real Auth0 credentials configured
- ✅ Social providers connected
- ✅ Domain whitelist configured
- ✅ HTTPS enabled on production domain
- ✅ User roles configured
- ✅ Environment variables secured

## Support

- Auth0 Documentation: https://auth0.com/docs
- KBJ & CO Technical Support: Contact your development team

Your law firm portal is now production-ready with enterprise-grade authentication! 🎉