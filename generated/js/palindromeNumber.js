/*
Palindrome Number: Check if a number is a palindrome. 
A palindrome number is the same forward and backward.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindromeNumber = function(x) {
	let string = x.toString();
	if (string[0] === '-') { return false };
	
	let reverse = [];
	
	for (let i = string.length - 1; i > 0; i--){
		reverse.push(string[i]);
	}
	
	let result = reverse.join('');
	return result === string;
	
}