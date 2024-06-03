import React, { createContext, useState, useContext, ReactNode } from 'react';

// Tipos para o contexto de autenticação
interface AuthContextType {
  user: { email: string } | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Inicializando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ email: string } | null>(null);

  const login = (email: string, password: string) => {
    // Lógica de autenticação fictícia
    setUser({ email });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
