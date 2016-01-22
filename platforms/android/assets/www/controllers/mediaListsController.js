app.controller('mediaListsController', ['$scope','dishes', function ($scope, dishes) {

    // $scope.exploreNearby = "New York";
    
    dishes.getData().then(function(data) {
    	console.log('results->', data);

        $scope.dishes = [];
    	
    	for (i=0; i <= data.length ; i++) {
    		if(data[i] != null){
    		  $scope.dishes.push(data[i]);
            }
        }
    });

}]);