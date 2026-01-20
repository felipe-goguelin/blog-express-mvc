# 🚀 Blog-express-MVC

O **Blog-express-MVC** é uma plataforma de gerenciamento de conteúdos desenvolvida em **Node.js**, utilizando a arquitetura **MVC** para garantir uma separação rigorosa entre lógica de negócio e interface. A aplicação processa postagens dinamicamente através de rotas inteligentes e renderização via **EJS**, permitindo desde a listagem de artigos recentes na página inicial até o gerenciamento completo via painel administrativo.

---

## 📋 Sobre o Projeto

Este ecossistema foi estruturado para ser uma base sólida e escalável para aplicações backend, utilizando as melhores práticas de organização de pastas e lógica de negócio desacoplada da interface. 

* **Models**: Gerenciamento da estrutura de dados e regras de negócio.
* **Views**: Interface do usuário renderizada dinamicamente com EJS, incluindo sistemas de templates parciais para reuso de código.
* **Controllers**: Controle do fluxo da aplicação, mediando as requisições entre os dados e a visualização.
---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework para rotas e middleware.
* **EJS**: Engine de visualização para HTML dinâmico.
* **Nodemon**: Reinicialização automática em desenvolvimento.

---

## 📂 Estrutura de Arquivos

```text
09-mvc-project/
├── public/                # Arquivos estáticos (CSS, JS, Imagens)
│   └── assets/
│       ├── script.js
│       └── style.css
├── src/
│   ├── controllers/      # Lógica de controle das rotas
│   ├── models/           # Definição dos dados (Ex: postModels.js)
│   ├── routes/           # Definição das rotas (Ex: routes.js)
│   ├── views/            # Templates EJS
│   │   ├── partials/     # Componentes reutilizáveis (Header/Footer)
│   │   ├── admin.ejs     # Painel administrativo
│   │   ├── index.ejs     # Página principal
│   │   └── post.ejs      # Visualização de post único
│   └── server.js         # Ponto de entrada da aplicação
├── package.json          # Gerenciamento de dependências
└── README.md
```


## 🚀 Como Executar o Projeto

### Pré-requisitos
* **Node.js** instalado (versão 16 ou superior).
* **NPM** (geralmente instalado com o Node).

### Instalação

Siga os passos abaixo para rodar a aplicação em sua máquina local:
1. **Instale as dependências:**
 ```bash
 npm install
```
2. **Inicie o servidor em modo de desenvolvimento:**
```bash
npm run dev
```

> **Nota:** O projeto estará disponível em `http://localhost:3000` por padrão.

---

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.