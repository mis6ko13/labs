define(['app/router', 'app/users/users'], function(router, users) {
	
	router.addRoute({
		name: 'users',
		title: 'Users Page',
		url: '/users', 
		controller: users
	});
	router.addRoute({
		name: 'main',
		title: 'Main Page',
		url: '/main',
		controller: function() {
			console.log('main page');
		}
	});
	
	return {
		run: function() {
			console.log('App running');
		}
	}
});	