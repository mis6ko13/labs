function Login(prevHash) {
  this.querySelector('[data-id="login-form"]').addEventListener('submit', function(e) {
    var email = e.target.email.value;
    var password = e.target.password.value;

//    localStorage.setItem('user', JSON.stringify({
//      email: email,
//      password: password
//    }));
//
//    //modalLoginForm.classList.remove('modal-overlay-active');
//
//    location.hash = prevHash;
//    location.reload();
		
		setCookie('user', JSON.stringify({
			email: email,
			password: password
		}));

    e.preventDefault();
    return false;
  });
}
