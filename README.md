# Blog Pessoal

Um espaço para compartilhar suas ideias, pensamentos e opiniões com o mundo. Este projeto é uma plataforma de blog moderna e responsiva, construída com tecnologias web de ponta.

## ✨ Funcionalidades

O Blog Pessoal oferece uma gama completa de funcionalidades para uma experiência de blogging rica e interativa:

*   👤 **Autenticação de Usuários:**
    *   Cadastro seguro de novos usuários.
    *   Login para acesso à plataforma.
*   📝 **Gerenciamento de Postagens:**
    *   Criação de novas postagens com um editor intuitivo.
    *   Visualização de todas as postagens publicadas.
    *   Edição de postagens existentes.
    *   Exclusão de postagens.
*   🏷️ **Gerenciamento de Temas:**
    *   Criação de temas para categorizar as postagens.
    *   Associação de temas às postagens.
    *   Edição e exclusão de temas.
*   🖼️ **Perfis de Usuário:**
    *   Visualização e gerenciamento do perfil do usuário.
*   🔔 **Notificações:**
    *   Feedback visual para ações do usuário através de toasts.
*   📱 **Responsividade:**
    *   Interface adaptável para diferentes tamanhos de tela (desktop, tablets, smartphones).

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando um conjunto moderno de tecnologias para desenvolvimento web:

*   **Frontend:**
    *   [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
    *   [Vite](https://vitejs.dev/) - Ferramenta de build rápida para desenvolvimento web moderno.
    *   [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática.
    *   [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first para design rápido e responsivo.
*   **Roteamento:**
    *   [React Router DOM](https://reactrouter.com/) - Para navegação declarativa dentro da aplicação.
*   **Requisições HTTP:**
    *   [Axios](https://axios-http.com/) - Cliente HTTP baseado em Promises para o navegador e Node.js.
*   **Ícones:**
    *   [Phosphor Icons](https://phosphoricons.com/) - Uma família de ícones flexível para interfaces digitais.
*   **Notificações:**
    *   [React Toastify](https://fkhadra.github.io/react-toastify/) - Para adicionar notificações toast à sua aplicação.
*   **Outras Ferramentas:**
    *   ESLint - Para linting de código JavaScript/TypeScript.

## 🚀 Começando

Siga estas instruções para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
O Yarn é recomendado como gerenciador de pacotes, mas você também pode usar o npm (que vem com o Node.js).

*   Node.js (versão 18.x ou superior recomendada)
*   Yarn (opcional, mas recomendado) ou npm

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/blogpessoal.git
    cd blogpessoal
    ```
    *Substitua `https://github.com/seu-usuario/blogpessoal.git` pela URL real do seu repositório, se diferente.*

2.  **Instale as dependências:**
    Se estiver usando Yarn:
    ```bash
    yarn install
    ```
    Ou, se estiver usando npm:
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    Com Yarn:
    ```bash
    yarn dev
    ```
    Ou, com npm:
    ```bash
    npm run dev
    ```
    Isso iniciará a aplicação em modo de desenvolvimento. Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para visualizá-la no navegador.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

*   `yarn dev` ou `npm run dev`
    *   Inicia a aplicação em modo de desenvolvimento com HMR (Hot Module Replacement).

*   `yarn build` ou `npm run build`
    *   Compila a aplicação para produção na pasta `dist/`.

*   `yarn lint` ou `npm run lint`
    *   Executa o ESLint para analisar o código e identificar problemas de formatação e estilo.

*   `yarn preview` ou `npm run preview`
    *   Inicia um servidor local para visualizar o build de produção.


## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você tem alguma ideia para melhorar este projeto, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

1.  Faça um *fork* do projeto.
2.  Crie uma nova *branch* (`git checkout -b feature/sua-feature`).
3.  Faça o *commit* das suas alterações (`git commit -m 'Adiciona sua-feature'`).
4.  Faça o *push* para a *branch* (`git push origin feature/sua-feature`).
5.  Abra um *Pull Request*.

*Por favor, mantenha um bom histórico de commits e siga as convenções de código do projeto.*

