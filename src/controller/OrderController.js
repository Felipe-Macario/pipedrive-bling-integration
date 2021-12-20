const OrderRepositoryBling = require('../infra/OrderRepositoryBling');
const DealRepositoryPipedrive = require('../infra/DealRepositoryPipedrive');

const CreateOrderIntegration = require('../useCases/CreateOrderIntegration');
const GetOrder = require('../useCases/GetOrder');

class OrderController {
    async GetOrder() {
        const orderRepository = new OrderRepositoryBling();
        const getOrder = new GetOrder(orderRepository);
        const orders = getOrder.getOrder();

        return orders;
    }

    async CreateOrderIntegration() {
        const dealRepositoryPipedrive = new DealRepositoryPipedrive();
        const createOrderIntegration = new CreateOrderIntegration(dealRepositoryPipedrive);

        const response = await createOrderIntegration.createOrderIntegration();

        return response;
    }
}

module.exports = OrderController;