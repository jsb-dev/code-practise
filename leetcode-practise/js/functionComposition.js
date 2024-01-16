// Given an array of functions [f1, f2, f3, ..., fn], return a new function
// fn that is the function composition of the array of functions.
// You may assume each function in the array accepts one integer as
// input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
