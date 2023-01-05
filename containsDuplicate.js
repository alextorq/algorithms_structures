/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const map = new Map();
  let result = false;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map.has(element)) {
      result = true;
      break;
    }
    map.set(element, true);
  }
  return result;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 1]));
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7]));
