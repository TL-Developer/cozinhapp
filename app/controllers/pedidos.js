module.exports = function(app){

  var controller = {};

  controller.novoPedido = function(req, res){
    var pedido = req.body;

    console.log(pedido);
  };

  return controller;

};
