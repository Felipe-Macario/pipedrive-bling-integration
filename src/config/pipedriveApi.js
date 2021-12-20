const axios = require('axios');

const pipedriveApi = axios.create({
    baseURL: 'https://kolmeia.pipedrive.com/api/v1/',
    params: {
        api_token: process.env.PIPEDRIVE_API_KEY
    }
});

module.exports = pipedriveApi;