// https://leetcode.com/problems/ransom-note/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const map = new Map();
  for (const char of magazine) {
    const prev = map.get(char) || 0;
    map.set(char, prev + 1);
  }
  for (const char of ransomNote) {
    const item = map.get(char);
    if (item === undefined || item < 1) return false;
    map.set(char, item - 1);
  }

  return true;
}

function isProxy(obj) {
}
