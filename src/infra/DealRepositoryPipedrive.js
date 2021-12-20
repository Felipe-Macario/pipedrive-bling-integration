const pipedriveApi = require('../config/pipedriveApi');
const DealAdapter = require('../adapters/DealAdapter');

class DealRepositoryPipedrive {
    async getDeal(params){
        let response;

        if (Object.keys(params).length === 0){
            response = await pipedriveApi.get('deals:(id,person_name,status,title,value,won_time)')
        } else {
            response = await pipedriveApi.get('deals:(id,person_name,status,title,value,won_time)', { params: params });
        }

        const data = response.data.data;

        if (!data)
            throw new Error("Unable to find a registered deal");

        const deals = DealAdapter.create(data);
        return deals;
    }

    async getWonDeal(){
        const response = await pipedriveApi.get('deals:(id,person_name,status,title,value,won_time)', { params: { status: 'won' } });
        const data = response.data.data;

        if (!data)
            throw new Error("Unable to find a registered deal");

        const deals = DealAdapter.create(data);
        return deals;
    }
}

module.exports = DealRepositoryPipedrive;