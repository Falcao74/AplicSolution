# AplicSolution

AplicSolution é uma plataforma web que oferece acesso a diferentes aplicativos empresariais através de um sistema de login centralizado.

## Funcionalidades

- **Sistema de Login**: Autenticação segura com validação de campos
- **Dashboard de Aplicativos**: Interface para acessar os diferentes módulos
- **Controle de Acesso**: Permissões personalizadas por usuário
- **Recuperação de Senha**: Sistema para recuperação de senhas
- **Cadastro de Usuários**: Formulário para criação de novas contas

## Aplicativos Disponíveis

- **AplicFinan**: Módulo financeiro
- **AplicOrçamento**: Módulo de orçamentos
- **AplicRH**: Módulo de recursos humanos
- **AplicPortfólio**: Módulo de portfólio de projetos

## Tecnologias Utilizadas

- React.js
- Vite
- React Router
- Styled Components
- LocalStorage para persistência de dados

## Como Executar

1. Clone o repositório:
```
git clone https://github.com/seu-usuario/AplicSolution.git
cd AplicSolution
```

2. Instale as dependências:
```
npm install
```

3. Execute o projeto:
```
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## Credenciais de Teste

- **Email**: teste@teste.com
- **Senha**: teste

Este usuário tem acesso aos módulos AplicFinan e AplicRH.

## Deploy

O projeto está configurado para deploy na Vercel. Basta conectar o repositório à sua conta Vercel para fazer o deploy automaticamente.

## Estrutura do Projeto

```
AplicSolution/
├── public/           # Arquivos estáticos
├── src/              # Código fonte
│   ├── contexts/     # Contextos React
│   ├── pages/        # Componentes de página
│   └── services/     # Serviços e APIs
└── ...
```

## Próximos Passos

- Implementação de backend real
- Integração com API de autenticação
- Desenvolvimento dos módulos funcionais
- Testes automatizados