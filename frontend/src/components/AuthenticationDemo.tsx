import React, { useState } from 'react';

export function AuthenticationDemo() {
  const [authMode, setAuthMode] = useState<'demo' | 'real'>('demo');

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      border: '2px solid #c8a882',
      borderRadius: '8px',
      padding: '15px',
      zIndex: 1000,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      maxWidth: '300px'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#1c4e80' }}>
        🔐 Authentication Mode
      </h4>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <input 
            type="radio" 
            checked={authMode === 'demo'} 
            onChange={() => setAuthMode('demo')}
            style={{ marginRight: '8px' }}
          />
          <span>🎭 Demo/Mock (Current)</span>
        </label>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            type="radio" 
            checked={authMode === 'real'} 
            onChange={() => setAuthMode('real')}
            style={{ marginRight: '8px' }}
          />
          <span>🔐 Real OAuth (Production)</span>
        </label>
      </div>

      {authMode === 'demo' ? (
        <div style={{ 
          background: '#fff3cd', 
          padding: '10px', 
          borderRadius: '4px',
          border: '1px solid #856404'
        }}>
          <h5 style={{ margin: '0 0 8px 0', color: '#856404' }}>Demo Mode Active</h5>
          <p style={{ margin: '0', fontSize: '12px', color: '#856404' }}>
            ✅ Click any login button<br/>
            ✅ No real authentication required<br/>
            ✅ Perfect for development/testing<br/>
            ❌ Not suitable for production
          </p>
        </div>
      ) : (
        <div style={{ 
          background: '#d4edda', 
          padding: '10px', 
          borderRadius: '4px',
          border: '1px solid #155724'
        }}>
          <h5 style={{ margin: '0 0 8px 0', color: '#155724' }}>Real Authentication</h5>
          <p style={{ margin: '0', fontSize: '12px', color: '#155724' }}>
            🔐 Connects to real OAuth providers<br/>
            🔒 Secure user authentication<br/>
            ✅ Production ready<br/>
            ⚙️ Requires setup (see guide)
          </p>
        </div>
      )}

      <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        <strong>To implement real auth:</strong><br/>
        1. Choose Auth0 or Firebase<br/>
        2. Setup OAuth providers<br/>
        3. Replace mock authentication<br/>
        4. Test & deploy
      </div>
    </div>
  );
}