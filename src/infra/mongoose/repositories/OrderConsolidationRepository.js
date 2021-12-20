const OrderConsolidation = require('../schemas/OrderConsolidationSchema');

class OrderConsolidationRepository {
    async getAll() {
        const consolidations = await OrderConsolidation.find();
        return consolidations;
    }
        
    async addConsolidation(data) {
        try {
            const consolidation = await OrderConsolidation.insertMany(data);
            return consolidation;    
        }catch(e){
            throw new Error("Not new consolidations to create");
        }
    }
}

module.exports = OrderConsolidationRepository;