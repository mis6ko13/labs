'use strict';

angular.module('usersList', ['ngRoute'])
	.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'MainController',
		templateUrl: '/views/main.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});