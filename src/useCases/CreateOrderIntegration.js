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

        const orders = JsonDealToXMLAdapter.create(deals);

        let createdOrders = 0;

        orders.forEach(element => {
            await orderRepository.createOrderIntegration(element);
            console.log(element);
            // returning positive outcome, createdOrders++
        }); 

        return createdOrders;
    }
}

module.exports = CreateOrderIntegration;