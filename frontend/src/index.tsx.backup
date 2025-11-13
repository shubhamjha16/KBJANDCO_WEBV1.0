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
import { ClientDashboard } from './components/ClientDashboard';
import { LawyerDashboard } from './components/LawyerDashboard';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function MainApp() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);

  React.useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        // Check if href is valid and not just '#'
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

  const handleLogin = async (role: 'client' | 'lawyer') => {
    await login(role);
    setIsLoginOpen(false);
  };

  // If user is authenticated, show simple dashboard
  if (isAuthenticated && user) {
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
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>
            You are logged in as: <strong>{user.role}</strong>
          </p>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ color: '#333', marginBottom: '15px' }}>Your Dashboard</h2>
            <p>Welcome to your professional legal portal. All features are being loaded.</p>
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
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // Otherwise show main website
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

function App() {
  React.useEffect(() => {
    console.log('KBJ App is starting...');
  }, []);

  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
