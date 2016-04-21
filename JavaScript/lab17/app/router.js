define(function() {
	var routes = {};
	
	function locationChange() {
		var url = location.hash.split('/');
		var currentPage = url[1] || 'main';
		
		if(routes[currentPage] && routes[currentPage].controller) {
			routes[currentPage].controller();
		}
	}
	
	window.addEventListener('hashchange', locationChange);
	window.addEventListener('load', localStorage);
	return {
		addRoute: function(route) {
			routes[route.name] = route;
		}	
	}
});