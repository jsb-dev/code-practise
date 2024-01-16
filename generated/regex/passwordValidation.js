const isValidPassword = function(password) {
	if (password.length < 8) {
		return false;
	}
	
	const valid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/g;
	return password.test(valid) || false;
}