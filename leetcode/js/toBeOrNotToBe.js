/*
A function expect that helps developers test their code. It should take in any 
value val and return an object with the following two functions.

1) toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".
2) notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".
*/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  let expected = val;
  return {
    toBe: function (val) {
      if (val === expected) return true;
      else throw new Error('Not Equal');
    },
    notToBe: function (val) {
      if (val !== expected) return true;
      else throw new Error('Equal');
    },
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
