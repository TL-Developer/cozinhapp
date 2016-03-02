angular.module('cozinhapp').controller('PedidosController', ['$scope','$http', function($scope, $http){

  $scope.pedidos = [];

  function listaPedidos(){
    $http.get('/pedidos').then(function(pedidos){
      $scope.pedidos = pedidos.data;
    }, function(erro){
      console.log(erro);
    });
  }
  listaPedidos();

  // REMOVE PEDIDO
  $scope.removePedido = function(pedido){

    $http.delete('/pedidos/' + pedido._id)
      .then(
         function(response){
          listaPedidos();
         },
         function(response){
           console.log('Não foi possível remover o pedido');
         }
      );
  };

  var socket = io();
  socket.on('novoPedido', function(pedido){
    listaPedidos();
  });

}]);
