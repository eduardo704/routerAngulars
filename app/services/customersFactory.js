(function() {
    var customersFactory = function($http) {
          var factory = {};
        var url="https://routerangulars-eduardo704.c9users.io:8081/customers"
        
        factory.getCustomers = function() {
          return  $http.get(url)
        };
        
        factory.getCustomer = function(customerId) {
             return  $http.get(url+"/"+customerId)
        };
        return factory;

    };
    customersFactory.$inject = ['$http'];
    angular.module('customersApp').factory('customersFactory', customersFactory);
                                           
}());