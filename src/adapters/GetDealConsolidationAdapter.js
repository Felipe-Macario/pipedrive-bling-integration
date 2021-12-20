const GetDealConsolidationPresentation = require("../presentations/GetDealConsolidationPresentation");

class GetDealConsolidationAdapter{
    static create(consolidations){
        const result = [];

        consolidations.forEach(element => {
            result.push(new GetDealConsolidationPresentation(element.date, element.value));
        });

        return result;
    }
}

module.exports = GetDealConsolidationAdapter;