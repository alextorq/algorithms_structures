/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersectionArrays(nums1, nums2) {
  const map = new Map();
  const mapResult = new Map();
  const result = [];

  for (const item of nums1) {
    map.set(item, true);
  }

  for (const item of nums2) {
    if (map.has(item) && !mapResult.has(item)) {
      mapResult.set(item, true);
      result.push(item);
    }
  }

  return result;
}
