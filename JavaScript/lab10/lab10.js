var functions = {
  show: show,
  hide: hide,
  setColor: setColor,
  slideUp: slideUp,
  slideDown : slideDown	
  
}

window.addEventListener('load', function() {
  var actionsNode = document.querySelector('[data-id="actions"]'),
      selectorInput = document.querySelector('input[name="selector"]'),
	  colorInput = document.querySelector('input[name="color"]');

   actionsNode.addEventListener('click', function(e) {
     if (e.target !== e.currentTarget) {
       var action = e.target.getAttribute('action'),
           el = document.querySelector(selectorInput.value);
	 if (action == 'setColor') {
		 functions[action](el, colorInput.value);
	 } 

     else  functions[action](el);
     }

     e.stopPropagation();
     return false;
   });
});

function show(el) {
  el.style.display = '';
}

function hide(el) {
  el.style.display = 'none';
}

function setColor(el, color) {
	el.style.color = color;
}

function slideUp(el){
	el.style.overflow = 'hidden';
	var interval = setInterval(function(){
	if (el.offsetHeight <= 0) {
		clearInterval(interval);
	}	else {
		el.style.height = (el.offsetHeight - 2) + 'px';
	}
}, 1);
}

function slideDown(el){
	var interval = setInterval(function(){
	if (el.offsetHeight > 162) {
		clearInterval(interval);
	}	else {
		el.style.height = (el.offsetHeight + 2) + 'px';
	}
}, 1);	
}	
