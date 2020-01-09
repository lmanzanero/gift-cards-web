const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  to: {
    type: String,
    require: true
  },
  from: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true
  }, 
  region: {
    type: String,
    require: true
  }, 
  serviceFee: {
    type: Number,
    require: true
  },
  total: {
    type: Number,
    require: true
  }
});

module.exports = Order = mongoose.model('order', OrderSchema);