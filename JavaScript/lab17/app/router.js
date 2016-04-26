define(function() {
	var routes = {},
			$templateCashe = {},
			appNode;	
	
	function locationChange() {
		var url = location.hash.split('/');
		var currentPage = url[1] || 'main';
		var page = routes[currentPage];
		var	controllerData;
		
		
		if(routes[currentPage] && routes[currentPage].controller) {
			controllerData = routes[currentPage].controller();
		}
		
		if(routes[currentPage] && routes[currentPage].title) {
			document.title = routes[currentPage].title;
		}
		
		var templateCompile = function(template){
			var templateHandlebars = Handlebars.compile(template);
			appNode.innerHTML = templateHandlebars({
				name: 'Test',
				routes: routes,
				data: controllerData
			})
		};	
		
		if(page.template || $templateCashe[page.templateUrl]) {
			templateCompile(page.template || $templateCashe[page.templateUrl]);
		} else if (page.templateUrl) {
			$ajax({
				url: page.templateUrl,
				success: function(template) {
					templateCompile(template);
					$templateCashe[page.templateUrl] = template;
				},
				error: function() {
					location.hash = '#/404';
				}
			});
		}
	}
	
	window.addEventListener('hashchange', locationChange);
//	window.addEventListener('load', localStorage);
	
	return {
		
		addRoute: function(route) {
			routes[route.name] = route;
		},
		config: function(config) {
			appNode = config.appNode;
		},
		run: function() {
		locationChange();
		}	
	}
});