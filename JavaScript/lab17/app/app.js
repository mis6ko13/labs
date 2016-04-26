define(['app/router', 'app/users/users'], function(router, users) {
	
	var mainNode = document.querySelector('[app="amdApp"]');
	
	router.addRoute({
		name: 'users',
		title: 'Users Page',
		url: '/users', 
		controller: users,
		templateUrl: '/app/users/users.html'
	});
	
	router.addRoute({
		name: 'main',
		title: 'Main Page',
		url: '/main',
		controller: function(){
			console.log('Main page')
		},
		template: ''
	});
	
	router.config({
		appNode: mainNode
	})
	
	return {
		run: function() {
			console.log('App is running');
			router.run();
		}
	}
});	