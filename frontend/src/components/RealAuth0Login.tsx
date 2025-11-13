import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface RealLoginProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole: 'client' | 'lawyer';
}

export function RealAuth0Login({ isOpen, onClose, selectedRole }: RealLoginProps) {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    loginWithRedirect({
      connection: 'google-oauth2',
      appState: { role: selectedRole }
    });
  };

  const handleMicrosoftLogin = () => {
    loginWithRedirect({
      connection: 'windowslive',
      appState: { role: selectedRole }
    });
  };

  const handleAppleLogin = () => {
    loginWithRedirect({
      connection: 'apple',
      appState: { role: selectedRole }
    });
  };

  const handleEmailLogin = () => {
    loginWithRedirect({
      connection: 'Username-Password-Authentication',
      appState: { role: selectedRole }
    });
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h2>KBJ & CO - Real Authentication</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="login-content">
          <div className="auth-status">
            <h3>Selected Role: {selectedRole}</h3>
            {isAuthenticated ? (
              <div className="user-info">
                <p>Welcome, {user?.name}!</p>
                <p>Email: {user?.email}</p>
                <button onClick={() => logout()}>Logout</button>
              </div>
            ) : (
              <div className="login-providers">
                <h4>Sign in with:</h4>
                
                <button 
                  className="auth-btn google-btn"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                >
                  <div className="auth-icon">🔵</div>
                  {isLoading ? 'Connecting...' : 'Continue with Google'}
                </button>

                <button 
                  className="auth-btn microsoft-btn"
                  onClick={handleMicrosoftLogin}
                  disabled={isLoading}
                >
                  <div className="auth-icon">🟦</div>
                  {isLoading ? 'Connecting...' : 'Continue with Microsoft'}
                </button>

                <button 
                  className="auth-btn apple-btn"
                  onClick={handleAppleLogin}
                  disabled={isLoading}
                >
                  <div className="auth-icon">🍎</div>
                  {isLoading ? 'Connecting...' : 'Continue with Apple'}
                </button>

                <div className="or-divider">
                  <span>OR</span>
                </div>

                <button 
                  className="auth-btn email-btn"
                  onClick={handleEmailLogin}
                  disabled={isLoading}
                >
                  <div className="auth-icon">📧</div>
                  {isLoading ? 'Connecting...' : 'Continue with Email'}
                </button>
              </div>
            )}
          </div>

          <div className="auth-info">
            <h4>Real Authentication Setup Required</h4>
            <div className="setup-steps">
              <h5>To enable real authentication:</h5>
              <ol>
                <li>Create Auth0 account at auth0.com</li>
                <li>Configure social connections (Google, Apple, Microsoft)</li>
                <li>Add your Auth0 domain and client ID to environment variables</li>
                <li>Wrap your app with Auth0Provider</li>
                <li>Replace mock authentication with real Auth0 calls</li>
              </ol>
            </div>

            <div className="demo-notice">
              <p><strong>Current Status:</strong> Demo/Mock Authentication</p>
              <p>The buttons above will redirect to real authentication providers once configured.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App wrapper with Auth0Provider (to be added to index.tsx)
export function Auth0Wrapper({ children }: { children: React.ReactNode }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'your-domain.auth0.com';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'your-client-id';

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={`https://${domain}/api/v2/`}
      scope="read:current_user update:current_user_metadata"
    >
      {children}
    </Auth0Provider>
  );
}