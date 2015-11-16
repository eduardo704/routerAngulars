(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
          $scope.orders=null;
        function init() {
                $scope.customers=customersFactory.getCustomer(customerId).then(function(json){
                $scope.customer=json.data;
                   $scope.orders=json.data.orders;
              })
        }
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());