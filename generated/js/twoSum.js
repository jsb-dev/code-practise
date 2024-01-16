/* 
Two Sum: Given an array of integers 'nums' and an integer 'target', return 
indices of the two numbers such that they add up to target.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (val + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
};
