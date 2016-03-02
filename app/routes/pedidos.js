module.exports = function(app){

  var controller = app.controllers.pedidos;

  app.route('/pedidos')
    .get(controller.listPedidos)
    .post(controller.newPedido);

  app.route('/pedidos/:id')
    .delete(controller.deletePedidos);

};
