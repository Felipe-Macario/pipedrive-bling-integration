class GetOrder {
    constructor(repository) {
        if (!repository)
            throw new Error('Expected to have a repository');

		this.repository = repository;
	}

    async getOrder(){
        const orders = await this.repository.getOrder();

        return orders;
    }
}

module.exports = GetOrder;