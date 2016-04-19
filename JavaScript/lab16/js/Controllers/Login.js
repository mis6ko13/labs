function Login() {
	this.querySelector('[data-id="login-form"]').addEventListener('submit', function(e) {
		
		var email = e.target.email.value;
    var password = e.target.password.value;

    localStorage.setItem('user', JSON.stringify({
      email: email,
      password: password
    }));

    location.reload();

    e.preventDefault();
    return false;
  });
}