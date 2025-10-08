import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './pages/Dashboard';
import AuthContext from './contexts/AuthContext';
import { checkCredentials, getAuthData, logout as logoutService, isAuthenticated as checkAuth } from './services/auth';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkAuth());
  const [user, setUser] = useState(getAuthData());

  useEffect(() => {
    // Verificar autenticação ao iniciar a aplicação
    const authData = getAuthData();
    if (authData) {
      setIsAuthenticated(true);
      setUser(authData);
    }
  }, []);

  const login = (email, password) => {
    const result = checkCredentials(email, password);
    
    if (result.success) {
      setIsAuthenticated(true);
      setUser(result.user);
      return true;
    }
    return false;
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      <Router>
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/forgot-password" element={!isAuthenticated ? <ForgotPassword /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;