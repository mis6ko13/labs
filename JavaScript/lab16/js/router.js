(function(){
	'use strict';
	
	var $templateCache = {}
	
	
	function router() {
  var url = location.hash.split('/');
  var currentPage = url[1] || 'main';
  var contentNode = document.querySelector('[data-id="content"]');

  var pages = {
    main: {
      title: 'Main page',
      view: '<h1>Welcome</h1>'
    },
		
    about: {
      authorization: true,
      title: 'About page',
      view: '<h1>About</h1>', // 'views/about.html'
      controller: function() {
        this.querySelector('h1')
            .addEventListener('click', function() {
              console.log('about controller');
            });
      }
    },
		
		'404': {
			title: 'Not found',
      view: '<h1>404 - Not found</h1>'
		},
		
		login: {
			title: 'Log in',
			viewUrl: '/templates/login.html',
			controller: 'Login'
		}
  };

  var page = pages[currentPage] || pages['404'];	
		
	if (page.authorization) {
		var user = JSON.parse(localStorage.getItem('user'));
		
		if(!user) {
		location.hash = '#/login';
		return;	
		}
	}		
	
		if (page.view || $templateCache[page.viewUrl]) {
			
  		contentNode.innerHTML = page.view || $templateCache[page.viewUrl];
			
		} else if (page.viewUrl) {
			$ajax({
				
				url: page.viewUrl,
				
				success: function(template) {
					contentNode.innerHTML = template;
					$templateCache[page.viewUrl] = template;
				},
				
				error: function() {
					location.hash = '#/404';
				}
			});
		}

  if (typeof page.controller === 'function') {
		
    page.controller.call(contentNode);
		
  } else if (typeof page.controller === 'string') {
		
		if(window[page.controller]) {

			window[page.controller].call(contentNode);
			
		} else {
		
		var scriptNode = document.createElement('script');
		scriptNode.type = 'text/javascript';
		scriptNode.async = 'async';
		scriptNode.src = '/js/Controllers/' + page.controller + '.js';
			
		scriptNode.onload = function() {
			
			window[page.controller].call(contentNode);
			
		}
		
		document.head.appendChild(scriptNode);
	}

  if (page.title) {
    document.title = page.title;
	}
	}
}
	
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
	
}());