const camelToSnake = function(str) {
	str.length === 0 && return '';
	
	str.replace(/([A-Z])/g, '_$1').toLowerCase();
}