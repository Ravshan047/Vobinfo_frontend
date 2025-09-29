import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Sahifa yuklanganda user va tokenni tiklash
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const token = localStorage.getItem('access_token');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  // Login funksiyasi
  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post('https://lutsifer.pythonanywhere.com/api/users/login/', {
        username,
        password,
      });

      const access = response.data.access;
      const refresh = response.data.refresh;
      const userData = response.data.user || {};

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  // Ro'yxatdan o'tish funksiyasi
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post('https://lutsifer.pythonanywhere.com/api/users/register/', {
        username: name,
        email,
        password,
      });

      const access = response.data.access;
      const refresh = response.data.refresh;
      const userData = response.data.user || {};

      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh); 
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  // Logout funksiyasi
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
