'use strict';

angular.module('usersList')
	.service('usersService', function($http, $q) {
	return {
		getUsers: function(options) {
			var def = $q.defer();
			
			var localUsers = (options && options.forceRefresh)
			? null : localStorage.getItem('users');
			
			if(localUsers) {
				def.resolve(JSON.parse(localUsers));
			} else {
				$http.get('http://api.randomuser.me/?results=15')
			.success(function(users) {
				localStorage.setItem('users', JSON.stringify(users.results));
				def.resolve(users.results);
			});
		}
					
			return def.promise;
		}
	}
});