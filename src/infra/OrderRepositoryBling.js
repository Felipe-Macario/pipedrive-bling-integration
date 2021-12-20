const { blingGetApi, blingPostApi } = require('../config/blingApi');

class OrderRepositoryBling {
    async getOrder(){
        const response = await blingGetApi.get();
        const orders = response.data;

        return orders;
    }

    async createOrderIntegration(orderXML){
        const response = await blingPostApi.post({ params: { xml: orderXML }});
        console.log(response);
    }
}

module.exports = OrderRepositoryBling;