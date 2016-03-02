var mongoose = require('mongoose');

module.exports = function(){

  var schema = new mongoose.Schema({
    mesa: {
      type: Number,
      required: true
    },
    pedido: {
      type: String,
      required: true
    },
    hora: {
      type: String,
      required: true
    },
    data: {
      type: String,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  });


  return mongoose.model('Pedidos', schema);

};
