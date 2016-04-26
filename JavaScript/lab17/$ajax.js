function $ajax(obj) {
	/*
	obj: {
		method: 'GET'|'POST'|'PUT'|'DELETE'
			|default: 'GET'
		url: String
		asunc: true|false
			|default:  true
		success: function() {}
		error: function() {}
			|default: function() {console.error(responseText)}
		data: {}
			|default: null
		responseType: String 
			| 'text'
	}
	*/
	if (!obj) {
		obj = {};
	}
	var method = obj.method || 'GET',
			url = obj.url,
			asynchronous = obj.async || true,
			success = obj.success,
			error = obj.error || function(req, aEvt) {
				console.error(req, aEvt);
			},
			responseType = obj.responseType || 'text',
			data = obj.data;
			
	var req = new (XMLHttpRequest || ActiveXObject)();

      req.open(method, url, asynchronous);
			req.setRequestHeader('X-Request-With', 'XMLHttpRequst');

      req.onreadystatechange = function(aEvt) {
      	if (req.readyState === 4) {
        	if (req.status === 200) {
						if (responseType === 'json'){
						var respJson;	
							try {
								respJson =JSON.parse(req.responseText);
							} catch (e) {
								console.error(e);
							}
						}			
					success && success(respJson || req.responseText, req);

        } else {
								
            error(req, aEvt);
              
					}
      }
	};

          req.send(data);
	
}