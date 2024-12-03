# Spotcry 🎶

Este projeto é uma aplicação web que permite gerenciar músicas e playlists, desenvolvida utilizando React.js com integração a uma API externa. O objetivo é proporcionar uma experiência fluida para os usuários, com funcionalidades como autenticação, gerenciamento de músicas e playlists, além de reprodução integrada com o YouTube.

## 📋 Funcionalidades

- **Autenticação:**
  - Login com proteção de rotas para usuários autenticados.
  - Validação de token JWT e controle de sessões.

- **Gerenciamento de Músicas:**
  - Listagem de todas as músicas disponíveis.
  - Adição de novas músicas com informações como título, artista e URL do YouTube.
  - Edição e exclusão de músicas criadas pelo usuário.

- **Gerenciamento de Playlists:**
  - Criação de playlists personalizadas.
  - Adição e remoção de músicas em playlists.
  - Visualização e exclusão de playlists criadas.

- **Reprodução de Músicas:**
  - Player integrado para músicas com suporte ao YouTube.
  - Opção de selecionar músicas recomendadas ou adicionadas recentemente.

- **Busca e Filtragem:**
  - Barra de pesquisa para encontrar músicas e playlists.
  - Ordenação de resultados por nome, popularidade ou data de criação.

## 🚀 Tecnologias Utilizadas

- **Frontend:**
  - React.js com React Router.
  - CSS Modules para estilização.
  - Componentização com foco em reutilização e organização do código.

- **Backend:**
  - API RESTful para gerenciamento de músicas e playlists.
  - JWT para autenticação segura.

- **Bibliotecas e Ferramentas:**
  - `axios` para chamadas HTTP.
  - `react-player` para reprodução de vídeos/músicas.
  - `jwt-decode` para manipulação de tokens JWT.

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes `npm` ou `yarn`.

### Passo a Passo

1. **Clone o repositório:**
```
git clone https://github.com/leticiasegurasse/Trabalho-Spotcry.git
cd spotcry
```

2. **Instale as dependências:**
```
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```
npm start
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 📑Funcionalidades Detalhadas
- __Detalhes de Personagens:__ Ao clicar em um personagem, uma nova página mostra detalhes como status (vivo, morto, desconhecido), espécie e gênero.
- __Pesquisa Dinâmica:__ A barra de pesquisa permite encontrar personagens rapidamente conforme o usuário digita.
- __Componentização:__ O código é organizado em componentes reutilizáveis, com lógica clara e separada para facilitar a manutenção e expansão da aplicação.

- ## 📂Estrutura de Arquivos
```
src/
├── components/
│   ├── Feedback.js        # Exibe mensagens de erro ou sucesso.
│   ├── MusicCard.js       # Cartão individual de música.
│   ├── NavBar.js          # Barra de navegação.
│   ├── PlaylistCard.js    # Cartão individual de playlist.
│   ├── PlaylistTable.js   # Tabela para exibição de playlists.
│   ├── PrivateRoute.js    # Proteção de rotas privadas.
│   └── SearchBar.js       # Barra de pesquisa e ordenação.
├── pages/
│   ├── AddMusic.js        # Página para adicionar músicas.
│   ├── AddPlaylist.js     # Página para criar playlists.
│   ├── Home.js            # Página inicial com músicas e playlists.
│   ├── Login.js           # Página de login.
│   ├── MinhasMusicas.js   # Página de músicas do usuário.
│   ├── MinhasPlaylists.js # Página de playlists do usuário.
│   └── PlaylistDetails.js # Detalhes de uma playlist específica.
├── services/
│   ├── authService.js     # Serviços relacionados à autenticação.
│   ├── musicService.js    # Serviços para gerenciamento de músicas.
│   └── playlistService.js # Serviços para gerenciamento de playlists.
└── App.js                 # Configuração principal do React Router.
```

## 📝Feito por
- __Leticia Segurasse__
- __Miguel Dutra__
- __Thiago Roncete__ 
#

