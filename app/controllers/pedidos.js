module.exports = function(app){

  var controller = {}
    , Pedidos = app.models.pedidos;

  // CREATE
  controller.newPedido = function(req, res){

    var pedido = req.body;

    Pedidos.create(pedido).then(function(pedido){
      res.status(201).json(pedido);
      app.get('io').emit('novoPedido', pedido);
    },
    function(erro){
      console.log(erro);
      console.log('Não foi possível enviar o pedido.');
      res.status(500).json(erro);
    });
  };

  // RETRIEVE
  controller.listPedidos = function(req, res){

    Pedidos.find().exec().then(function(pedidos){
      res.status(200).json(pedidos);
    },
    function(erro){
      console.error(erro);
      res.status(500).json(erro);
    });

  };

  // DELETE
  controller.deletePedidos = function(req, res){
    var _id = req.params.id;

    Pedidos.remove({"_id": _id}).exec().then(function(){
      res.end();
    },
    function(erro){
      return console.error(erro);
    });
  };


  return controller;

};
