const Order = require("../core/Order");

class OrderAdapter{
    static create(orders){
        const result = [];

        orders.forEach(element => {
            result.push(new Order(element.pedido.cliente.id, element.pedido.data, element.pedido.cliente.nome, element.pedido.itens[0].item.descricao, element.pedido.itens[0].item.valorunidade));
        });

        return result;
    }
}

module.exports = OrderAdapter;