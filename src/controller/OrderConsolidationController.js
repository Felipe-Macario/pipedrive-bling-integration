const OrderConsolidationRepository = require('../infra/mongoose/repositories/OrderConsolidationRepository');
const OrderRepositoryBling = require('../infra/OrderRepositoryBling');
const GetOrderConsolidation = require('../useCases/GetOrderConsolidation');
const CreateOrderConsolidation = require('../useCases/CreateOrderConsolidation');
const GetOrder = require('../useCases/GetOrder');
const GetDealConsolidationAdapter = require('../adapters/GetDealConsolidationAdapter');

class OrderConsolidationController {
    async getOrderConsolidation() {
        const orderConsolidationRepository = new OrderConsolidationRepository();
        const getOrderConsolidation = new GetOrderConsolidation(orderConsolidationRepository);
        const orderConsolidations = await getOrderConsolidation.getOrderConsolidation();

        const response = GetDealConsolidationAdapter.create(orderConsolidations);

        return response;
    }

    async createOrderConsolidation() {
        const orderConsolidationRepository = new OrderConsolidationRepository();
        const orderRepositoryBling = new OrderRepositoryBling();

        const createOrderConsolidation = new CreateOrderConsolidation(orderConsolidationRepository);
        const getOrder = new GetOrder(orderRepositoryBling);
        const orders = await getOrder.getOrder();

        const orderConsolidations = await createOrderConsolidation.createOrderConsolidation(orders);
        return orderConsolidations;
    }
}

module.exports = OrderConsolidationController;