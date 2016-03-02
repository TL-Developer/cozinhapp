angular.module('cozinhapp').controller('PedidosController', ['$scope','$http', function($scope, $http){

  $scope.pedidos = [];

  $http.get('/pedidos').then(function(pedidos){
    $scope.pedidos = pedidos.data;
  }, function(erro){
    console.log(erro);
  });


  // REMOVE PEDIDO
  $scope.removePedido = function(pedido){

    var socket = io.connect('http://localhost:3000');
    socket.on('removePedido', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });

    $http.delete('/pedidos/' + pedido._id)
      .then(
         function(response){
           console.log('Pedido removido com sucesso');
         },
         function(response){
           console.log('Não foi possível remover o pedido');
         }
      );

  };

}]);
