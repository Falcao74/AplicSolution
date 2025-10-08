import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  FormContainer, 
  Logo, 
  Form, 
  Input, 
  Button, 
  ErrorMessage, 
  LinkText,
  BackLink
} from './styles';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) {
      setError('Por favor, informe seu nome');
      return false;
    }
    
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
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (validateForm()) {
      // Em uma aplicação real, aqui seria feita a chamada à API para registrar o usuário
      alert('Conta criada com sucesso! Em uma aplicação real, você seria registrado.');
      navigate('/login');
    }
  };

  return (
    <Container>
      <FormContainer>
        <Logo src="./img/logo.jpg" alt="AplicSolution Logo" />
        <h1>Criar Conta</h1>
        
        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <Input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
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
          
          <Input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
          <Button type="submit">Criar Conta</Button>
          
          <BackLink onClick={() => navigate('/login')}>
            Voltar para o login
          </BackLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Register;