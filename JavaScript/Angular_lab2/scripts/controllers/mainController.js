'use strict';

angular.module('usersList').controller('MainController', function($scope, usersService) {
	usersService.getUsers().then(function(users) {
		$scope.users = users;
	});
	
	$scope.refresh = function() {
		usersService.getUsers({forceRefresh: true}).then(function(users) {
			$scope.users = users;
		});	
	};
	
	$scope.query = '';
	$scope.searchFunc = function(user) {
		var query = $scope.query.toLowerCase();
		
		if(user.name.last.toLowerCase().indexOf(query) !== -1 ||
			user.name.first.toLowerCase().indexOf(query) !== -1) {
			return true;
		}
		return false;
	};
	
	$scope.orderProp = 'name.last';
	$scope.reverse = false;
	
	$scope.sort = function(sortProp) {
		if($scope.orderProp === sortProp) {
			$scope.reverse = !$scope.reverse;
			return;
		}
		
		$scope.orderProp = sortProp;
		$scope.reverse = false;
	}
	
});