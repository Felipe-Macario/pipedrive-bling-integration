class GetDeal {
    constructor(repository) {
        if (!repository)
            throw new Error('Expected to have a repository');

		this.repository = repository;
	}

    async getDeal(params){
        const deals = await this.repository.getDeal(params);

        return deals;
    }
}

module.exports = GetDeal;