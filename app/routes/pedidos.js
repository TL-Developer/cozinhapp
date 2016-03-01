module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/novo-pedido')
    .post(controller.novoPedido);

};
