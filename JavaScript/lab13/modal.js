window.addEventListener('load', function() {
  var modalBtns = document.querySelectorAll('[data-modal]'),
      modalsOverlayNode = document.getElementsByClassName('modals-overlay')[0],
      zIndex = 1000,
			modalTemplate;

  var showModal = function(modalNode) {
    modalNode.setAttribute('data-opened', 'true');

    modalsOverlayNode.style.display = 'block';
    modalNode.style.display = 'block';
    modalNode.style.zIndex = zIndex++;
  }

  var onModalBtnClick = function(event) {
    var btnNode = event.target,
        modalId = btnNode.getAttribute('data-modal');

    if (modalId) {
      var modalNode = modalsOverlayNode.querySelector('[data-modal-id="' + modalId + '"]');

	 var addAndShowModal = function(modalHtml) {
		 
		 modalsOverlayNode.innerHTML += modalHtml;

     modalNode = modalsOverlayNode.querySelector('[data-modal-id="' + modalId + '"]');

     showModal(modalNode);

     var subModalBtns = modalsOverlayNode.querySelectorAll('[data-modal]');

     Array.prototype.forEach.call(subModalBtns, function(subModalBtn) {subModalBtn.addEventListener('click', onModalBtnClick);																											})
	 };
		 
      if (modalNode) {
        showModal(modalNode);
      } else {
        var modalUrl = btnNode.getAttribute('data-modal-url');

        if (modalUrl) {
					$ajax({
						url: modalUrl,
						success: function(result) {
							addAndShowModal(result);
						}
					});
/*												Request                     */
        }
				else {
					var url = btnNode.getAttribute('data-url');
					if(url) {
						$ajax({
							url: url,
							responseType: 'json',
							
							success: function(result){
								
								var onTemplateLoaded = function() {
									
									var modalHandlebars = Handlebars.compile(modalTemplate);
									
									result.modalId = modalId;
									var modalHtml = modalHandlebars(result);
									addAndShowModal(modalHtml);
								
								};
								
								if(modalTemplate){
									onTemplateLoaded();
									
								} else {
									
									$ajax({
										url: '/templates/modal.html',
										success: function(result) {
											modalTemplate = result;
											onTemplateLoaded();
										}
									})	
								}
							}
						})
					}
				}
      }
    }
  };

  Array.prototype.forEach.call(modalBtns, function(modalBtn) {
    modalBtn.addEventListener('click', onModalBtnClick);
  })

  modalsOverlayNode.addEventListener('click', function(e) {
    var target = e.target,
        action = target.getAttribute('data-action'),
        openedModalNodes = modalsOverlayNode.querySelectorAll('[data-opened="true"]');//,
        //closeOverlay = openedModalNode.getAttribute('data-modal-close-overlay');

    if (e.target == e.currentTarget/* && closeOverlay !== 'false'*/) {
      modalsOverlayNode.style.display = '';

      Array.prototype.forEach.call(openedModalNodes, function(openedModalNode) {
        openedModalNode.style.display = '';
        openedModalNode.removeAttribute('data-opened');
      });
    }

    if (action && action === 'close') {
      var openedModalNode = target.parentNode.parentNode;

      openedModalNode.style.display = '';
      openedModalNode.removeAttribute('data-opened');

      if (openedModalNodes.length <= 1) {
        modalsOverlayNode.style.display = '';
      }

    }
  });
});

/* 
//Request

 var req = new XMLHttpRequest();

          req.open('GET', modalUrl, true);

          req.onreadystatechange = function(aEvt) {
            if (req.readyState === 4) {
              if (req.status === 200) {
                modalsOverlayNode.innerHTML += req.responseText;

                modalNode = modalsOverlayNode.querySelector('[data-modal-id="' + modalId + '"]');

                showModal(modalNode);

                var subModalBtns = modalsOverlayNode.querySelectorAll('[data-modal]');

                Array.prototype.forEach.call(subModalBtns, function(subModalBtn) {
                  subModalBtn.addEventListener('click', onModalBtnClick);
                })

              } else {
                console.error(req, aEvt);
              }
            }
          };

          req.send(null);
*/					