class Deal{
    constructor(id, personName, dealStatus, title, value, wonDate){
        this.id = id;
        this.personName = personName;
        this.dealStatus = dealStatus;
        this.title = title;
        this.value = value;
        this.wonDate = wonDate;
    }
}

module.exports = Deal;