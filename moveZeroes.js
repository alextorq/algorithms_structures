/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let index = 0; index < nums.length - 1; index++) {
      const current = nums[index];
      const next = nums[index + 1];
      if (current === 0 && next !== 0) {
        nums[index + 1] = current;
        nums[index] = next;
        swap = true;
      }
    }
  }
}

const nums = [0, 1, 0, 3, 12];
const output = [1, 3, 12, 0, 0];

moveZeroes(nums);

console.log(nums);
