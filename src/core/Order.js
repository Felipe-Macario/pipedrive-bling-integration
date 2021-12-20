class Order{
    constructor(id, date, clientName, itemDescription, value){
        this.id = id;
        this.date = date;
        this.clientName = clientName;
        this.itemDescription = itemDescription;
        this.value = value;
    }
}

module.exports = Order;