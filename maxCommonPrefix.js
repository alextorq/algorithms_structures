/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let result = '';
  const start = strs[0];
  let prefix = '';
  outer: for (const char of start) {
    prefix += char;
    for (let index = 1; index < strs.length; index++) {
      const stringItem = strs[index];
      if (!stringItem.startsWith(prefix)) {
        break outer;
      }
    }
    result = prefix;
  }
  return result;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix2(strs) {
  const first = strs[0];
  let prefix = '';
  outer: for (let index = 0; index < first.length; index++) {
    const char = first[index];
    for (let innerIndex = 1; innerIndex < strs.length; innerIndex++) {
      const innerChar = strs[innerIndex][index];
      if (innerChar !== char) break outer;
    }
    prefix += char;
  }
  return prefix;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix3(strs) {
  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  let prefix = '';
  for (let index = 0; index < first.length; index++) {
    if (first[index] !== last[index]) {
      break;
    }
    prefix += first[index];
  }
  return prefix;
}

console.log(longestCommonPrefix2(['fiq', 'fia', 'qx']));
