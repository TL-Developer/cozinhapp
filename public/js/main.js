angular.module('cozinhapp', ['ngRoute']).config(function($routeProvider){

  $routeProvider.when('/', {
    templateUrl: 'partials/pedidos.html',
    controller: 'PedidosController'
  })

  .otherwise({redirectTo: '/'});
});
