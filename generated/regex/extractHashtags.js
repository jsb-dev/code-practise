const extractHashtags = function(str) {
	if (str.length === 0) return [];
	
	const hashtag = /#\w+\b/g;
	return str.match(hashtag) || [];
};