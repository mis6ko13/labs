window.onload = function() {};

window.addEventListener('load', function() {
  var modalLoginForm = document.querySelector('[data-id="modal-login-form"]'),
    loginFormNode = document.querySelector('[data-id="login-form"]'),
    logInNode = document.querySelector('.log-in'),
    logOutNode = document.querySelector('.log-out'),
//    user = JSON.parse(localStorage.getItem('user'));
		user = JSON.parse(getCookie('user') || null);	

  /* Start: Init */
  if (user) {
    logOutNode.querySelector('[data-id="user-email"]').innerHTML = user.email;

    logOutNode.style.display = 'block';
  } else {
    logInNode.style.display = 'block';
    //modalLoginForm.classList.add('modal-overlay-active');
  }
  /* End: Init */

  loginFormNode.addEventListener('submit', function(e) {
    var email = e.target.email.value;
    var password = e.target.password.value;

//    localStorage.setItem('user', JSON.stringify({
//      email: email,
//      password: password
//    }));
		
		setCookie('user', JSON.stringify({
			email: email,
			password: password
		}));

    modalLoginForm.classList.remove('modal-overlay-active');

    location.reload();

    e.preventDefault();
    return false;
  });

  logOutNode.querySelector('button').addEventListener('click', function() {
    localStorage.removeItem('user');
		deleteCookie('user');
    location.reload();
  });

  logInNode.querySelector('button').addEventListener('click', function() {
    modalLoginForm.classList.add('modal-overlay-active');
  });
});
