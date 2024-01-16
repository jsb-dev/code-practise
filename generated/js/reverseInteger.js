/*
Reverse Integer: Given a 32-bit signed integer, reverse digits of an integer.
*/

/**
 * @param {number} x
 * @return {number}
 */

const reverseInteger = function (x) {
  const string = x.toString();
  const result = [];
  for (let i = string.length - 1; i > 0; i--) {
    result.push(string[i]);
  }
  if (result[string.length - 1] === '-') {
    result.unshift('-');
    result.pop();
  }

  return parseInt(result.join(''));
};
