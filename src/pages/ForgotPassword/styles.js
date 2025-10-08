import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  
  h1 {
    color: var(--primary-color);
    margin: 15px 0 20px;
    font-size: 24px;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: var(--primary-color);
  }
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const ErrorMessage = styled.div`
  color: var(--error-color);
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SuccessMessage = styled.div`
  color: var(--success-color);
  font-size: 14px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 4px;
`;

export const BackLink = styled.div`
  color: var(--primary-color);
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;