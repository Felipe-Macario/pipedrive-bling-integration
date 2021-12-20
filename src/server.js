const express = require('express');

const dotenv = require('dotenv')
dotenv.config()

// import './database/connection'

const routes = require('./routes');
const httpErrorHandler = require('./errors/HttpErrorHandler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);
// app.use(httpErrorHandler);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})