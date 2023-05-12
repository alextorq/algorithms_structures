// https://leetcode.com/problems/first-bad-version/submissions/

function isBadVersion(n) {
  return n >= 6;
}

/**
 * @param {number} n
 */
function firstBadVersion(n) {
  let left = 0;
  let right = n;

  while (left !== right - 1) {
    const middle = Math.round((left + right) / 2);
    if (isBadVersion(middle)) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return right;
}
