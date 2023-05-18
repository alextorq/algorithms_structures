// https://leetcode.com/problems/missing-number/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const n = nums.length;
  const correctSum = ((1 + n) * n) / 2;
  let sum = 0;

  for (let index = 0; index < n; index++) {
    sum += nums[index];
  }

  return correctSum - sum;
}
