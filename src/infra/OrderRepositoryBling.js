const { blingGetApi, blingPostApi } = require('../config/blingApi');

class OrderRepositoryBling {
    async getOrder(){
        const response = await blingGetApi.get();
        const orders = response.data;

        return orders;
    }

    async createOrderIntegration(orderXML){
        try {
            await new Promise((resolve)=>setTimeout(() => {
                resolve();
            }, 350));

            const response = await blingPostApi.post('https://bling.com.br/Api/v2/pedido/json/', null, { params: {
                xml: orderXML
            }});

            return response.data.retorno;
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = OrderRepositoryBling;