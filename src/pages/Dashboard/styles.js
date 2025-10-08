import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  h2 {
    margin: 30px 0 10px;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 30px;
    color: #666;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 15px;
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-size: 24px;
  flex-grow: 1;
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

export const AppsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const AppCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  opacity: ${props => props.available ? 1 : 0.7};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const AppIcon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;

export const AppTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-color);
`;

export const AppStatus = styled.span`
  font-size: 14px;
  color: ${props => props.available ? 'var(--success-color)' : 'var(--disabled-color)'};
  font-weight: 500;
`;