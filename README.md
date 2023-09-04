# 🚀 Encurtador de URLs com Contagem de Cliques

Bem-vindo ao Encurtador de URLs com Contagem de Cliques! Esta é uma API simples para encurtar URLs longas e rastrear o número de cliques em links encurtados.

## 📋 Funcionalidades Principais

- ✂️ **Encurtamento de URLs:** Encurte URLs longas em URLs curtas para compartilhamento fácil.
- 📈 **Rastreamento de Cliques:** Saiba quantas vezes um link encurtado foi acessado.
- 🔍 **Busca por Links:** Recupere informações detalhadas sobre um link encurtado, incluindo a contagem de cliques.
- 💾 **Armazenamento em Banco de Dados:** Todos os dados dos links são armazenados em um banco de dados PostgreSQL.

## 🛠️ Configuração e Uso

1. Clone este repositório.
2. Configure o banco de dados PostgreSQL e atualize as informações de conexão em `config.js`.
3. Instale as dependências com `npm install`.
4. Inicie a aplicação com `npm start`.
5. Acesse a API em `http://localhost:8080`.

## 📦 Dependências Principais

- [Node.js](https://nodejs.org/) - Plataforma de tempo de execução JavaScript.
- [Express.js](https://expressjs.com/) - Framework web para criação de APIs RESTful.
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional.

## 🚦 Rotas da API

- `GET /links`: Busca todos os links encurtados.
- `GET /links/:code`: Busca informações sobre um link específico.
- `POST /links`: Encurta uma URL longa e retorna o link encurtado.

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ por [Elany Peixoto](https://github.com/develany) 🙌
