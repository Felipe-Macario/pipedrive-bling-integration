const Deal = require("../core/Deal");

class DealAdapter{
    static create(deals){
        const result = [];

        deals.forEach(element => {
            const formatedDate = element.won_time !== null ? new Date(element.won_time + "Z").toLocaleDateString("pt-BR") : element.won_time;
            result.push(new Deal(element.id, element.person_name, element.status, element.title, element.value, formatedDate));
        });

        return result;
    }
}

module.exports = DealAdapter;