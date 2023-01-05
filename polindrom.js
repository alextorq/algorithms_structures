/**
 * Test word on polindrom
 * @param {string} string
 * @return {boolean} status
 */
function palindrom(string) {
  const middleString = Math.floor(string.length);
  const str = string.toUpperCase();
  for (let i = 0; i < middleString; i++) {
    if (str[i] !== str[(str.length - i - 1)]) {
      return false;
    }
  }
  return true;
}

const result = palindrom('haha');

console.log(result);
