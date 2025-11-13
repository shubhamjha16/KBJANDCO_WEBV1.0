import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  clientId?: string;
  lawyerId?: string;
  profilePicture?: string;
  role: 'client' | 'lawyer';
  provider?: string;
  specialization?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (provider: string, role?: 'client' | 'lawyer') => Promise<void>;
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

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (provider: string, role: 'client' | 'lawyer' = 'client') => {
    setIsLoading(true);
    
    // 🚨 CURRENT: Mock Authentication (Demo Mode)
    // TODO: Replace with real authentication for production
    
    console.log(`🔐 DEMO: Logging in with ${provider} as ${role}`);
    console.log('📝 NOTE: This is mock authentication. See AUTHENTICATION_SETUP.md for real implementation.');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on provider and role
    let mockUser: User;
    
    if (role === 'lawyer') {
      switch (provider) {
        case 'google':
          mockUser = {
            name: 'Khagesh B. Jha',
            email: 'khagesh@kbj.com',
            lawyerId: 'KBJ-LAW-001',
            role: 'lawyer',
            provider: 'google',
            specialization: 'Corporate Law & Property Disputes',
            profilePicture: 'https://via.placeholder.com/150/1c4e80/ffffff?text=KJ'
          };
          break;
        case 'microsoft':
          mockUser = {
            name: 'Shikha Sharma',
            email: 'shikha@kbj.com',
            lawyerId: 'KBJ-LAW-002',
            role: 'lawyer',
            provider: 'microsoft',
            specialization: 'Family Law & Employment Disputes'
          };
          break;
        case 'email':
          mockUser = {
            name: 'Pawan Kumar Poddar',
            email: 'pawan@kbj.com',
            lawyerId: 'KBJ-LAW-003',
            role: 'lawyer',
            provider: 'email',
            specialization: 'Criminal Law & Civil Litigation'
          };
          break;
        default:
          mockUser = {
            name: 'Kamlesh B. Jha',
            email: 'kamlesh@kbj.com',
            lawyerId: 'KBJ-LAW-000',
            role: 'lawyer',
            provider: provider,
            specialization: 'Constitutional Law & Appeals'
          };
      }
    } else {
      // Client login
      switch (provider) {
        case 'google':
          mockUser = {
            name: 'Rajesh Kumar',
            email: 'rajesh.kumar@gmail.com',
            clientId: 'KBJ-CLT-001',
            role: 'client',
            provider: 'google',
            profilePicture: 'https://via.placeholder.com/150/0071e3/ffffff?text=RK'
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
            name: 'Guest User',
            email: 'guest@example.com',
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
    
    // 🚨 Demo Mode Warning
    console.warn('⚠️  DEMO AUTHENTICATION ACTIVE');
    console.warn('🔧 For production, implement real OAuth with Auth0, Firebase, or direct OAuth');
    console.warn('📖 See AUTHENTICATION_SETUP.md for implementation guide');
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
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}