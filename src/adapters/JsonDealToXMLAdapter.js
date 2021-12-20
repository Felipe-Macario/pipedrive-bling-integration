const builder = require('xmlbuilder');

class JsonDealToXMLAdapter{
    static create(deals){
        const ordersXML = [];

        deals.forEach(element => {
            const order = {
                pedido: {
                    cliente: {
                        id: element.id,
                        nome: element.personName
                    },
                    itens: {
                        item: {
                            codigo: element.id,
                            descricao: element.title,
                            qtde: 1,
                            vlr_unit: element.value
                        }
                    }
                }
            };

            const orderXML = builder.create(order, { encoding: 'utf-8' }).end();

            ordersXML.push(orderXML);
        });

        return ordersXML;
    }
}

module.exports = JsonDealToXMLAdapter;