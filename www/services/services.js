var services = angular.module('app.services', []);

services.factory('dishes', ['$http', function ($http) {

	var dishes = {};
	
    dishes.getData = function() {
    	var service = "services/quentes.json";
        
        return $http.get(service).then(function (results) {
        	var data = results.data[0].quentes;

            return data;
        });
    };

   return dishes;
     
}]);  