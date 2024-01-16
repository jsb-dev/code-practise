// Given an integer array arr and a filtering function fn,
// return a filtered array filteredArr.
// Do not use the built-in Array.prototype.filter method.
// filteredArr should only contain the elements from the arr
// for which the expression fn(arr[i], i) evaluates to a truthy
// value. A truthy value is a value where Boolean(value) returns true.

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};
