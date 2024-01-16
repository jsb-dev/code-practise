const findDates = function(string) {
	if (string.length === 0) {
		return [];
	}
	
	const date = /\b\d{2}\/\d{2}\/\d{4}\b/g;
	
	return string.match(date) || [];
}