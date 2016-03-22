"use strict";

var regForm = document.querySelector('[data-id="regForm"]'),
	capcha = document.querySelector('[data-id="capcha"]');

var getRandom = function() {
	return Math.random().toString(36).substr(2, 4);
}

var capchaContent = getRandom();
capcha.innerHTML = capchaContent;

var reloadCapcha = function() {
	capchaContent = getRandom();
	capcha.innerHTML = capchaContent;
};

var reload = document.querySelector('[data-id="reload"]');
reload.addEventListener('click', reloadCapcha);

regForm.addEventListener('submit', function(e) {
var requiredInputs = regForm.querySelectorAll('[required]'),
requiredInputsLength = requiredInputs.length;
	
for(var i = 0; i < requiredInputsLength; i++){
	var node = requiredInputs[i];
	if (!node.value){
		console.log('field '+node.name+' is required');
	}
}	
e.preventDefault();
	return false;	
});

						 
//regForm.addEventListener('submit', function(e) {
//	if(!regForm.login.value){
//		alert('Field name is required');
//	}
//	if(!regForm.email.value){
//		alert('Field email is required');
//	} else if (!/\S+@\S+\.\S+/.test(regForm.email.value)){
//		alert('Field email is not correct format');
//	}
//	if(!regForm.pass.value){
//		alert('Field password is required');
//	} else if (regForm.pass.value !== regForm.passConfirm.value) {
//		alert('Password do not match');
//	}
//	if(!regForm.capchaCheck.value){
//		alert('Field capch is required');
//	} else if (regForm.capchaCheck.value !== capchaContent){
//		alert('Capcha is not correct! Are you a robot?');
//	}
//});

