const Deal = require("../core/Deal");

class DealAdapter{
    static create(deals){
        const result = [];

        deals.forEach(element => {
            result.push(new Deal(element.id, element.person_name, element.status, element.title, element.value, element.won_time));
        });

        return result;
    }
}

module.exports = DealAdapter;