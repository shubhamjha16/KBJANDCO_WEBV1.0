import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { PracticeAreas } from './components/PracticeAreas';
import { Judgements } from './components/Judgements';
import { NewsReports } from './components/NewsReports';
import { PublicInfo } from './components/PublicInfo';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { DisclaimerPopup } from './components/DisclaimerPopup';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        padding: '40px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #1c4e80',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 20px'
        }}></div>
        <p style={{ color: '#666', fontSize: '16px' }}>Loading KBJ & CO...</p>
      </div>
    </div>
  );
}

function UserDashboard() {
  const { user, logout } = useAuth();
  
  if (!user) return null;

  return (
    <div style={{
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#1c4e80', marginBottom: '20px' }}>
          Welcome to KBJ & CO Portal, {user.name}!
        </h1>
        <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px',
          marginBottom: '30px'
        }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
            <strong>Role:</strong> {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </p>
          <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
            <strong>Email:</strong> {user.email}
          </p>
          {user.specialization && (
            <p style={{ margin: '0', fontSize: '16px' }}>
              <strong>Specialization:</strong> {user.specialization}
            </p>
          )}
        </div>
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#333', marginBottom: '15px' }}>
            {user.role === 'lawyer' ? 'Lawyer Dashboard' : 'Client Portal'}
          </h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Welcome to your professional legal portal. Your dashboard is loading with all available features and case management tools.
          </p>
        </div>
        <button
          onClick={logout}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#1c4e80',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#153a6b'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1c4e80'}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function MainWebsite() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [showDisclaimer, setShowDisclaimer] = React.useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = React.useState(false);
  const { login } = useAuth();

  React.useEffect(() => {
    // Always show disclaimer on every page load
    setShowDisclaimer(true);

    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href && href.length > 1) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Listen for login modal open event
    const handleOpenLogin = () => {
      setIsLoginOpen(true);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('openLogin', handleOpenLogin);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('openLogin', handleOpenLogin);
    };
  }, []);

  const handleDisclaimerAgree = () => {
    // Don't store in localStorage, just allow access for this session
    setDisclaimerAccepted(true);
    setShowDisclaimer(false);
  };

  const handleDisclaimerDisagree = () => {
    // Redirect to a blank page or show a message
    window.location.href = 'about:blank';
  };

  const handleLogin = async (role: 'client' | 'lawyer') => {
    try {
      await login(role);
      setIsLoginOpen(false);
    } catch (error) {
      console.error('Login failed:', error);
      // Could show error message to user here
    }
  };

  // Don't render the website content until disclaimer is accepted
  if (!disclaimerAccepted) {
    return showDisclaimer ? (
      <DisclaimerPopup 
        onAgree={handleDisclaimerAgree}
        onDisagree={handleDisclaimerDisagree}
      />
    ) : null;
  }

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <PracticeAreas />
      <Judgements />
      <NewsReports />
      <PublicInfo />
      <Clients />
      <Contact />
      <Footer />
      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}

function MainApp() {
  const { isAuthenticated, isLoading } = useAuth();
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    // Ensure app is fully loaded before rendering
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isAppReady || isLoading) {
    return <LoadingSpinner />;
  }

  if (isAuthenticated) {
    return <UserDashboard />;
  }

  return <MainWebsite />;
}

function App() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    console.log(' KBJ & CO App starting...');
    setMounted(true);
  }, []);

  // Prevent hydration mismatches by not rendering until mounted
  if (!mounted) {
    return <LoadingSpinner />;
  }

  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

// Production-safe render
function renderApp() {
  try {
    const rootElement = document.getElementById('app');
    if (!rootElement) {
      console.error('Root element with id "app" not found');
      return;
    }

    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
    
    console.log(' KBJ & CO App rendered successfully');
  } catch (error) {
    console.error(' Failed to render app:', error);
  }
}

// Ensure DOM is ready before rendering
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

// Add CSS animation for spinner
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
