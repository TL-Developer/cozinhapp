angular.module('cozinhapp').controller('PedidosController', ['$scope','$http', function($scope, $http){

  $scope.pedidos = [];

  $http.get('/pedidos').then(function(pedidos){
    $scope.pedidos = pedidos.data;
  }, function(erro){
    console.log(erro);
  });

  // REMOVE PEDIDO
  $scope.removePedido = function(pedido){

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

  var socket = io();
  socket.on('novoPedido', function(data){
    alert('Novo pedido cadastrado');
  });

}]);
