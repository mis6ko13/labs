angular.module('testApp')
	.service('phoneService', function($q, $http) {
	var phones = [];	
	return {
			get: function() {
				var def = $q.defer();
				
				$http.get("/App/phones.json").success(function(phones) {
						def.resolve(phones);
				});
				return def.promise; 
			}
		};
	
});