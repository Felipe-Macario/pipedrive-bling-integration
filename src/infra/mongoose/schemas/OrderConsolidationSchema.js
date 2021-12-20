const { model, Schema } = require('mongoose');

const schema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true
  },
  value: {
    type: Number,
    required: true,
  },
});

const OrderConsolidation = model('OrderConsolidation', schema);

module.exports = OrderConsolidation;