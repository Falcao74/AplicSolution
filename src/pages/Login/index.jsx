import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { 
  Container, 
  LoginContainer, 
  Logo, 
  Form, 
  Input, 
  Button, 
  ErrorMessage, 
  LinkText,
  LinksContainer
} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim()) {
      setError('Por favor, informe seu email');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, informe um email válido');
      return false;
    }
    
    if (!password.trim()) {
      setError('Por favor, informe sua senha');
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (validateForm()) {
      const success = login(email, password);
      
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Email ou senha inválidos');
      }
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Logo src="./img/logo.jpg" alt="AplicSolution Logo" />
        <h1>AplicSolution</h1>
        
        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <Button type="submit">Entrar</Button>
          
          <LinksContainer>
            <LinkText onClick={() => navigate('/register')}>Criar conta</LinkText>
            <LinkText onClick={() => navigate('/forgot-password')}>Esqueci minha senha</LinkText>
          </LinksContainer>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default Login;