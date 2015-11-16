(function() {
    
    var CustomersController = function ($scope , customersFactory, appSettings) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers=[];
          $scope.appSettings = appSettings;
        function init(){
              $scope.customers=customersFactory.getCustomers().then(function(json){
                 $scope.customers=json.data;
              })
        }
       init();
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        
    }
      
    
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());