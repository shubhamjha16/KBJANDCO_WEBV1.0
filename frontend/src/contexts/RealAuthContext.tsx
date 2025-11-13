import React, { createContext, useContext, useState, useEffect } from 'react';
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
  login: (provider: string, role?: 'client' | 'lawyer') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  // Add real authentication methods
  loginWithGoogle: (role: 'client' | 'lawyer') => Promise<void>;
  loginWithMicrosoft: (role: 'client' | 'lawyer') => Promise<void>;
  loginWithApple: (role: 'client' | 'lawyer') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock authentication (current system)
  const login = async (provider: string, role: 'client' | 'lawyer' = 'client') => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on provider and role
    let mockUser: User;
    
    if (role === 'lawyer') {
      mockUser = {
        name: provider === 'google' ? 'Khagesh B. Jha' : 'Shikha Sharma',
        email: `${provider === 'google' ? 'khagesh' : 'shikha'}@kbj.com`,
        lawyerId: provider === 'google' ? 'LAW-001' : 'LAW-002',
        role: 'lawyer',
        provider: provider,
        specialization: provider === 'google' ? 'Corporate Law & Property Disputes' : 'Family Law & Employment',
        profilePicture: undefined
      };
    } else {
      switch (provider) {
        case 'google':
          mockUser = {
            name: 'Rajesh Kumar',
            email: 'rajesh.kumar@gmail.com',
            clientId: 'KBJ-CLT-001',
            role: 'client',
            provider: 'google',
            profilePicture: undefined
          };
          break;
        case 'apple':
          mockUser = {
            name: 'Priya Sharma',
            email: 'priya.sharma@icloud.com',
            clientId: 'KBJ-CLT-002',
            role: 'client',
            provider: 'apple'
          };
          break;
        case 'microsoft':
          mockUser = {
            name: 'Amit Patel',
            email: 'amit.patel@outlook.com',
            clientId: 'KBJ-CLT-003',
            role: 'client',
            provider: 'microsoft'
          };
          break;
        default:
          mockUser = {
            name: 'Demo User',
            email: 'demo@example.com',
            clientId: 'KBJ-CLT-000',
            role: 'client',
            provider: 'email'
          };
      }
    }
    
    setUser(mockUser);
    setIsLoading(false);
    
    // Store in localStorage for persistence
    localStorage.setItem('kbj_auth_user', JSON.stringify(mockUser));
  };

  // Real Google Authentication (to be implemented)
  const loginWithGoogle = async (role: 'client' | 'lawyer') => {
    setIsLoading(true);
    
    try {
      // TODO: Implement real Google OAuth
      // const result = await signInWithPopup(auth, googleProvider);
      // const user = result.user;
      
      console.log('🔐 Real Google Login would happen here');
      console.log('Role:', role);
      
      // For now, fall back to mock
      await login('google', role);
      
    } catch (error) {
      console.error('Google login error:', error);
      setIsLoading(false);
    }
  };

  // Real Microsoft Authentication (to be implemented)
  const loginWithMicrosoft = async (role: 'client' | 'lawyer') => {
    setIsLoading(true);
    
    try {
      // TODO: Implement real Microsoft OAuth
      console.log('🔐 Real Microsoft Login would happen here');
      console.log('Role:', role);
      
      // For now, fall back to mock
      await login('microsoft', role);
      
    } catch (error) {
      console.error('Microsoft login error:', error);
      setIsLoading(false);
    }
  };

  // Real Apple Authentication (to be implemented)
  const loginWithApple = async (role: 'client' | 'lawyer') => {
    setIsLoading(true);
    
    try {
      // TODO: Implement real Apple Sign-In
      console.log('🔐 Real Apple Login would happen here');
      console.log('Role:', role);
      
      // For now, fall back to mock
      await login('apple', role);
      
    } catch (error) {
      console.error('Apple login error:', error);
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kbj_auth_user');
  };

  // Check for existing auth on load
  React.useEffect(() => {
    const storedUser = localStorage.getItem('kbj_auth_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('kbj_auth_user');
      }
    }
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading,
    loginWithGoogle,
    loginWithMicrosoft,
    loginWithApple
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}