import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export interface User {
  name: string;
  email: string;
  clientId?: string;
  lawyerId?: string;
  role: 'client' | 'lawyer';
  specialization?: string;
  profilePicture?: string;
  sub?: string; // Auth0 user ID
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: 'client' | 'lawyer') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { 
    user: auth0User, 
    isAuthenticated: auth0IsAuthenticated, 
    isLoading: auth0IsLoading,
    loginWithRedirect,
    logout: auth0Logout
  } = useAuth0();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Convert Auth0 user to our User interface
  useEffect(() => {
    if (auth0IsAuthenticated && auth0User) {
      // Get role from localStorage or default to client
      const savedRole = localStorage.getItem('kbj_user_role') as 'client' | 'lawyer' || 'client';
      
      const convertedUser: User = {
        name: auth0User.name || auth0User.email || 'Unknown User',
        email: auth0User.email || '',
        role: savedRole,
        profilePicture: auth0User.picture,
        sub: auth0User.sub,
        // Generate IDs based on role
        ...(savedRole === 'lawyer' ? {
          lawyerId: `LAW-${auth0User.sub?.slice(-6)}`,
          specialization: 'General Practice'
        } : {
          clientId: `CLT-${auth0User.sub?.slice(-6)}`
        })
      };

      setUser(convertedUser);
      localStorage.setItem('kbj_auth_user', JSON.stringify(convertedUser));
    } else {
      setUser(null);
      localStorage.removeItem('kbj_auth_user');
      localStorage.removeItem('kbj_user_role');
    }
    
    setIsLoading(auth0IsLoading);
  }, [auth0User, auth0IsAuthenticated, auth0IsLoading]);

  // Login with role selection
  const login = async (role: 'client' | 'lawyer') => {
    // Save role for after authentication
    localStorage.setItem('kbj_user_role', role);
    
    await loginWithRedirect({
      appState: { 
        role,
        returnTo: window.location.origin 
      }
    });
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('kbj_auth_user');
    localStorage.removeItem('kbj_user_role');
    auth0Logout({ 
      logoutParams: {
        returnTo: window.location.origin 
      }
    });
  };

  // Check for existing session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('kbj_auth_user');
    if (savedUser && !auth0IsAuthenticated) {
      // Clear stale local storage if Auth0 session is gone
      localStorage.removeItem('kbj_auth_user');
      localStorage.removeItem('kbj_user_role');
    }
  }, [auth0IsAuthenticated]);

  const value: AuthContextType = {
    user,
    isAuthenticated: auth0IsAuthenticated,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}