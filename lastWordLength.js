// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
function lastWordLength(s) {
  let length = 0;
  const lengthString = s.length - 1;

  for (let i = lengthString; i >= 0; i--) {
    if (s[i] !== ' ') {
      length++;
    } else if (length !== 0) {
      break;
    }
  }

  return length;
}
