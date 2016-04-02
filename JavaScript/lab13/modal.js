window.addEventListener('load', function(){
  var modalBtns = document.querySelectorAll('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0];
	
	var showModal = function(modalNode){
		modalNode.setAttribute('data-open', 'true');
		modalsOverlayNode.style.display = 'block';
		modalNode.style.display = 'block';
	};
  
  var onModalBtnClick = function(e){
    var modalId = e.target.getAttribute('data-modal');
    var modalNode = modalsOverlayNode.querySelector('[data-modal-id = "' + modalId + '"]'); 		
    if (modalId) {
      if (modalNode) {
				showModal(modalNode);
				} else {
			var modalUrl = e.target.getAttribute('data-url');
			if (modalUrl) {
				var req = new XMLHttpRequest();
				req.open('GET', modalUrl, true);
				
				req.onreadystatechange = function(aEvt){
				if (req.readyState === 4){
					if (req.status === 200) {
					modalsOverlayNode.innerHTML += req.responseText;
					var modalNode = modalsOverlayNode.querySelector('[data-modal-id = "' + modalId + '"]'); 
					showModal(modalNode);	
					
					var subModalBtns	= modalsOverlayNode.querySelectorAll('[data-modal]');
						
					Array.prototype.forEach.call(subModalBtns, function(subModalBtns){
    subModalBtns.addEventListener('click', onModalBtnClick);
  });
					} else {
						console.error(req, aEvt);
					}
				}
			}; 

				req.send(null);
			}
		}
   }
  };
  
  Array.prototype.forEach.call(modalBtns, function(modBtn){
    modBtn.addEventListener('click', onModalBtnClick);
  });
  
  modalsOverlayNode.addEventListener('click', function(e){
    var action = e.target.getAttribute('data-action'),
    		openedNode = modalsOverlayNode.querySelector('[data-open="true"]'),
				closeOverlay = openedNode.getAttribute('data-close-overlay');
    
    if (action && action === 'close' || (e.target == e.currentTarget && closeOverlay !== 'false')) {
      openedNode.style.display = '';
      modalsOverlayNode.style.display = '';
      openedNode.removeAttribute('data-open');
    }    
  }) 
});









