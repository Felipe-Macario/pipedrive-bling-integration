const DealRepository = require('../infra/DealRepositoryPipedrive');
const GetDeal = require('../useCases/GetDeal');

class DealController {
    async getDeal(params) {
        const dealRepository = new DealRepository();
        const getDeal = new GetDeal(dealRepository);
        const deals = await getDeal.getDeal(params);
        return deals;
    }
}

module.exports = DealController;