<h1 align="center">🍻 Integração entre Pipedrive e Bling</h1>
<p align="center">☕ Projeto criado para integrar a plataforma do Pipedrive ao Bling e fazer consolidações com os pedidos gerados no Bling</p>

# 🛠 Tecnologias usadas

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/cloud)
- [Express](https://expressjs.com/)

# Criando o projeto

### Requisitos

- Node.js

### ⚙️ Como rodar a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/Felipe-Macario/pipedrive-bling-integration.git

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

O servidor iniciará na porta 3000, para acessar a aplicação utilize a url [`https://localhost:3000`](https://localhost:3000)

## Endpoints:
### GET ```/deals```
Retorna os negócios registrados no Pipedrive

### Queries:
```
{
  status: string, "open" || "won" || "lost"
  limit: number,
  start: number
} 
```

### GET ```/orders```
Retorna os negócios ganhos registrados no Pipedrive como pedidos no Bling

### POST ```/orders/integration```
Registra os negócios ganhos registrados no Pipedrive como pedidos no Bling retornando o número de pedidos criados

### GET ```/orders/consolidation```
Retorna os dados consolidados registrados no MongoDB, agrupados por data

### POST ```/orders/consolidation```
Registra os dados consolidados dos pedidos registrados no Bling no MongoDB, agrupados por data