class CreateOrderConsolidation {
    constructor(repository) {
        if (!repository)
            throw new Error('Expected to have a repository');

		this.repository = repository;
	}

    async createOrderConsolidation(orders){
        if (!orders)
            throw new Error("There is no orders do consolidate");

        const unique = [...new Set(orders.map(item => item.date))];

        let ordersFormatedData = [];

        unique.forEach(element => {
            let value = 0;

            orders.forEach(order => {
                if (order.date === element){
                    value += parseFloat(order.value);
                }

            });

            const ordersData = { date: element, value: value};
            ordersFormatedData.push(ordersData);
        });

        const orderConsolidation = await this.repository.addConsolidation(ordersFormatedData);

        return orderConsolidation;
    }
}

module.exports = CreateOrderConsolidation;