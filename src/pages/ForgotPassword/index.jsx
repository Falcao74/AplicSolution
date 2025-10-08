import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, FormContainer, Logo, Form, Input, Button, ErrorMessage, SuccessMessage, BackLink } from './styles';
import logoImg from '../../assets/logo.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
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
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (validateForm()) {
      // Em uma aplicação real, aqui seria feita a chamada à API para enviar o email de recuperação
      setSuccess(true);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Logo src={logoImg} alt="AplicSolution Logo" />
        <h1>Recuperar Senha</h1>
        
        <Form onSubmit={handleSubmit}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && (
            <SuccessMessage>
              Um link de recuperação foi enviado para o seu email.
            </SuccessMessage>
          )}
          
          <p>Informe seu email para receber um link de recuperação de senha.</p>
          
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Button type="submit">Enviar Link</Button>
          
          <BackLink onClick={() => navigate('/login')}>
            Voltar para o login
          </BackLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default ForgotPassword;