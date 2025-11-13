import React, { useState } from 'react';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'client' | 'lawyer') => void;
}

export function Login({ isOpen, onClose, onLogin }: LoginProps) {
  const [loginType, setLoginType] = useState<'client' | 'lawyer'>('client');

  if (!isOpen) return null;

  const handleLogin = () => {
    onLogin(loginType);
    onClose();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <div className="login-header">
          <h2>Access Client Portal</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="login-type-selector">
          <button 
            className={`type-btn ${loginType === 'client' ? 'active' : ''}`}
            onClick={() => setLoginType('client')}
          >
            Client Login
          </button>
          <button 
            className={`type-btn ${loginType === 'lawyer' ? 'active' : ''}`}
            onClick={() => setLoginType('lawyer')}
          >
            Lawyer Login
          </button>
        </div>

        <div className="login-content">
          <div className="login-description">
            {loginType === 'client' ? (
              <div>
                <h3>Client Portal Access</h3>
                <p>Access your case status, documents, payment history, and communicate with your legal team.</p>
                <ul>
                  <li>View case progress and updates</li>
                  <li>Access legal documents</li>
                  <li>Make secure payments</li>
                  <li>Schedule consultations</li>
                </ul>
              </div>
            ) : (
              <div>
                <h3>Lawyer Portal Access</h3>
                <p>Manage cases, clients, documents, and legal operations.</p>
                <ul>
                  <li>Manage client cases and files</li>
                  <li>Access legal documents</li>
                  <li>Client communication</li>
                  <li>Schedule and calendar</li>
                </ul>
              </div>
            )}
          </div>

          <div className="login-providers">
            <h4>Sign in with:</h4>
            
            <button 
              className="auth-btn google-btn"
              onClick={handleLogin}
            >
              <div className="auth-icon">🔵</div>
              Continue with Google
            </button>

            <button 
              className="auth-btn apple-btn"
              onClick={handleLogin}
            >
              <div className="auth-icon">🍎</div>
              Continue with Apple
            </button>

            <button 
              className="auth-btn microsoft-btn"
              onClick={handleLogin}
            >
              <div className="auth-icon">🟦</div>
              Continue with Microsoft
            </button>

            <div className="or-divider">
              <span>OR</span>
            </div>

            <button 
              className="auth-btn email-btn"
              onClick={handleLogin}
            >
              <div className="auth-icon">📧</div>
              Continue with Email
            </button>
          </div>
        </div>

        <div className="login-footer">
          <p>
            By continuing, you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}