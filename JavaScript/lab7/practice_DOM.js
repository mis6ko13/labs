window.addEventListener('load', function() {
var mainForm = window.mainForm;
	
	mainForm.a.addEventListener('keypress', function(e){
	var input = parseInt(String.fromCharCode(e.keyCode));	
	if (typeof input !== 'number' || isNaN(input)) {
		e.preventDefault();
		return false;
		}
		console.log();
	})
	
mainForm.addEventListener('submit', function(e) {
	var a = +mainForm.a.value,
		b = +mainForm.b.value,
		operation = mainForm.operation.value,
		result;
	
	switch(operation) {
			
		case 'plus':
			result = a + b;
			break;
		case 'minus':
			result = a - b;
			break;
		case 'multiply':
			result = a * b;
			break;
		case 'divide':
			result = a / b;
			break;	
	}
	
	document.querySelector('[data-id = "result"]').innerHTML = result;
	
	e.preventDefault();
	return false;
});
	
	
	
	
	
	
	
	
	
	
//var main = document.getElementById('main');
//var menuSelect = document.querySelectorAll('#main .header .menu');
//var button = document.getElementById('button');
//
//button.addEventListener('click', function(){
//	var input = document.getElementById('input');
//	var inputContent = input.value;
//	console.log(inputContent);
//	event.stopPropagation();
//	event.preventDefault();
//	return false;
//});
//
//var form = document.getElementById('form');
//
//form.addEventListener('click', function(event) {
//	console.log(event.target, event.currentTarget);
//	});
});

