angular.module('testApp').controller('phoneController', function($scope, phoneService) {
	$scope.name = 'Test app';
	$scope.query = '';	
	$scope.maxPrice = 100;
	$scope.reverseSort = true;
	$scope.sort = function() {
		$scope.reverseSort = !$scope.reverseSort;	
	};
	
	$scope.phones = [];
	phoneService.get().then(function(phones){
		$scope.phones = phones;
	});
	
	$scope.order = function(orderProp) {
		$scope.orderProp = orderProp;
	};
});