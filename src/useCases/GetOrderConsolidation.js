class GetOrderConsolidation {
    constructor(repository) {
        if (!repository)
            throw new Error('Expected to have a repository');

		this.repository = repository;
	}

    async getOrderConsolidation(){
        const orderConsolidations = await this.repository.getAll();

        return orderConsolidations;
    }
}

module.exports = GetOrderConsolidation;