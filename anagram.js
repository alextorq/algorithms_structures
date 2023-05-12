// https://leetcode.com/problems/valid-anagram/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const map = new Map();
  for (const char of s) {
    const prev = map.get(char) || 0;
    map.set(char, prev + 1);
  }

  for (const char of t) {
    const prev = map.get(char);
    if (prev) {
      map.set(char, prev - 1);
    } else {
      return false;
    }
  }

  const val = [...map.values()];
  return val.every((_) => _ === 0);
}
