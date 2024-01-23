/* Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  const isArray = Array.isArray(obj);
  const isObject = typeof obj === 'object';

  if (isArray) {
    let isEmpty = obj.length === 0;
    if (isEmpty) return true;
    else return false;
  } else if (isObject) {
    for (let key in obj) {
      let keyExists = obj.hasOwnProperty(key);
      if (keyExists) return false;
    }
  }

  return true;
};
