const JsonDealToXMLAdapter = require("../adapters/JsonDealToXMLAdapter");

class CreateOrderIntegration {
    constructor(dealRepository, orderRepository) {
        if (!dealRepository || !orderRepository)
            throw new Error('Expected to have a Deal and an Order Repository');

		this.dealRepository = dealRepository;
        this.orderRepository = orderRepository;
	}

    async createOrderIntegration(){
        const deals = await this.dealRepository.getWonDeal();

        const ordersXML = JsonDealToXMLAdapter.create(deals);

        let createdOrders = 0;

        for(const order of ordersXML){
            const response = await this.orderRepository.createOrderIntegration(order);

            if (typeof response.pedidos !== "undefined")
                createdOrders++;
        }

        return createdOrders;
    }
}

module.exports = CreateOrderIntegration;