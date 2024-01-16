const isValidEmail = function(email) {
	if (email.length === 0) {
		return false;
	}
	
	const valid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/; 
	return valid.test(email);
}