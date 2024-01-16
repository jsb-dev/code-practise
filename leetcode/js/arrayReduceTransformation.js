// Given an integer array nums, a reducer function fn,
// and an initial value init, return a reduced array.
// Do not use the built-in Array.prototype.reduce method.

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let acc = init;
  nums.forEach((num) => {
    acc = fn(acc, num);
  });
  return acc;
};
