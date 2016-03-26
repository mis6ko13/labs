'use strict';

window.addEventListener('load', function(){
	
var jsonForm = document.querySelector("[data-id='json-form']"),
		jsonTextarea = document.querySelector("[data-id='json-textarea']");

jsonForm.addEventListener('submit', function(e){
	var jsontext = jsonTextarea.value,
			json;
	
	try{
		json = JSON.parse(jsontext);
	} catch(e){
	console.error(e);	
	}
	console.log(json);
	
	if(json) {
		var html = '';
		json.forEach(function(item){
//		html += '<input value=/>'
		html += ['<input',
						 ' type="', item.type, '""', 
						 ' name="', item.name, '""', 
						 ' placeholder="', item.placeholder, '""', 
						 ' />'].join('');	
		});
	}
	
	document.querySelector("[data-id='formPreview']").innerHTML = html;
	
	e.preventDefault();
	e.stopPropagation();
	return false;
})		
	
})