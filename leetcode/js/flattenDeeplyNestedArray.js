/*
    Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

    A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

    A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual 
    elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. 
    The depth of the elements in the first array are considered to be 0.

    Please solve it without the built-in Array.flat method. 
*/

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  let stack = arr.map((item) => [item, 0]);
  let result = [];

  while (stack.length > 0) {
    let [current, currentDepth] = stack.pop();
    let isArray = Array.isArray(current);

    if (isArray && currentDepth < n) {
      stack.push(...current.map((item) => [item, currentDepth + 1]));
    } else {
      result.push(current);
    }
  }

  return result.reverse();
};
