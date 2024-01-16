// Given an array arr and a chunk size size, return a chunked array.
// A chunked array contains the original elements in arr, but consists
// of subarrays each of length size. The length of the last subarray may
// be less than size if arr.length is not evenly divisible by size.
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let chunkedArr = [];
  let chunk = [];
  arr.forEach((num, i) => {
    chunk.push(num);
    if (chunk.length === size || i === arr.length - 1) {
      chunkedArr.push(chunk);
      chunk = [];
    }
  });

  return chunkedArr;
};
