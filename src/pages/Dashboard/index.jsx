import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import { 
  Container, 
  Header, 
  Logo, 
  LogoutButton, 
  Title,
  AppsContainer,
  AppCard,
  AppIcon,
  AppTitle,
  AppStatus
} from './styles';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const apps = [
    { 
      id: 'AplicFinan', 
      name: 'AplicFinan', 
      icon: '💰',
      available: user?.permissions?.includes('AplicFinan')
    },
    { 
      id: 'AplicOrcamento', 
      name: 'AplicOrçamento', 
      icon: '📊',
      available: user?.permissions?.includes('AplicOrcamento')
    },
    { 
      id: 'AplicRH', 
      name: 'AplicRH', 
      icon: '👥',
      available: user?.permissions?.includes('AplicRH')
    },
    { 
      id: 'AplicPortfolio', 
      name: 'AplicPortfólio', 
      icon: '📁',
      available: user?.permissions?.includes('AplicPortfolio')
    }
  ];

  const handleAppClick = (app) => {
    if (app.available) {
      alert('Em breve!');
    } else {
      alert('Você ainda não tem acesso a este aplicativo, solicite acesso à área.');
    }
  };

  return (
    <Container>
      <Header>
        <Logo src="./img/logo.jpg" alt="AplicSolution Logo" />
        <Title>AplicSolution</Title>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </Header>

      <h2>Bem-vindo, {user?.name}</h2>
      <p>Selecione um aplicativo para começar:</p>

      <AppsContainer>
        {apps.map((app) => (
          <AppCard 
            key={app.id}
            available={app.available}
            onClick={() => handleAppClick(app)}
          >
            <AppIcon>{app.icon}</AppIcon>
            <AppTitle>{app.name}</AppTitle>
            <AppStatus available={app.available}>
              {app.available ? 'Disponível' : 'Indisponível'}
            </AppStatus>
          </AppCard>
        ))}
      </AppsContainer>
    </Container>
  );
};

export default Dashboard;