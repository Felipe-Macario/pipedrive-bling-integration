const OrderRepositoryBling = require('../infra/OrderRepositoryBling');
const DealRepositoryPipedrive = require('../infra/DealRepositoryPipedrive');

const CreateOrderIntegration = require('../useCases/CreateOrderIntegration');
const GetOrder = require('../useCases/GetOrder');

class OrderController {
    async GetOrder() {
        const orderRepositoryBling = new OrderRepositoryBling();
        const getOrder = new GetOrder(orderRepositoryBling);
        const orders = getOrder.getOrder();

        return orders;
    }

    async CreateOrderIntegration() {
        const dealRepositoryPipedrive = new DealRepositoryPipedrive();
        const orderRepositoryBling = new OrderRepositoryBling();
        const createOrderIntegration = new CreateOrderIntegration(dealRepositoryPipedrive, orderRepositoryBling);

        const response = await createOrderIntegration.createOrderIntegration();

        return response;
    }
}

module.exports = OrderController;