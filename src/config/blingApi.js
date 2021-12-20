const axios = require('axios');

const blingGetApi = axios.create({
    baseURL: 'https://bling.com.br/Api/v2/pedidos/json/',
    params: {
        apikey: process.env.BLING_API_KEY
    }
});

const blingPostApi = axios.create({
    baseURL: 'https://bling.com.br/Api/v2/pedido/json/',
    params: {
        apikey: process.env.BLING_API_KEY
    }
});

module.exports = { blingGetApi, blingPostApi };