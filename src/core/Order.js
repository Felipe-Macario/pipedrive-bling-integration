class Order{
    constructor(clientId, clientName, itemDescription, itemQuantity, itemValue){
        this.clientId = clientId;
        this.clientName = clientName;
        this.itemDescription = itemDescription;
        this.itemQuantity = itemQuantity;
        this.itemValue = itemValue;
    }
}

module.exports = Order;