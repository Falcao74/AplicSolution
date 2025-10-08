// Serviço de autenticação para gerenciar login e sessão

// Chave para armazenar dados no localStorage
const AUTH_STORAGE_KEY = '@AplicSolution:auth';

// Usuário de teste
const TEST_USER = {
  email: 'teste@teste.com',
  password: 'teste',
  name: 'Usuário Teste',
  permissions: ['AplicFinan', 'AplicRH']
};

// Salvar dados de autenticação no localStorage
export const saveAuthData = (data) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data));
};

// Recuperar dados de autenticação do localStorage
export const getAuthData = () => {
  const data = localStorage.getItem(AUTH_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};

// Remover dados de autenticação do localStorage
export const removeAuthData = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

// Verificar credenciais de login
export const checkCredentials = (email, password) => {
  if (email === TEST_USER.email && password === TEST_USER.password) {
    const userData = {
      email: TEST_USER.email,
      name: TEST_USER.name,
      permissions: TEST_USER.permissions
    };
    
    saveAuthData(userData);
    return { success: true, user: userData };
  }
  
  return { success: false, error: 'Credenciais inválidas' };
};

// Verificar se o usuário está autenticado
export const isAuthenticated = () => {
  return !!getAuthData();
};

// Fazer logout
export const logout = () => {
  removeAuthData();
};