(function() {
    var customersFactory = function($http) {
        var url = "https://routerangulars-eduardo704.c9users.io:8081"
        var factory = {};

        factory.getCustomers = function() {
            return $http.get(url + '/customers');
        };

        factory.getCustomer = function(customerId) {
            return $http.get(url + '/customers/' + customerId);
        };

        factory.getOrders = function() {
            return $http.get(url + '/orders');
        }

        factory.deleteCustomer = function(customerId) {
            return $http.delete(url + '/customers/' + customerId);
        }

        return factory;
    };

    customersFactory.$inject = ['$http'];

    angular.module('customersApp').factory('customersFactory',
        customersFactory);

}());