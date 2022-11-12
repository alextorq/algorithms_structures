/**
 * Test word on polindrom
 * @param {String} string
 * @return {Boolean} status
 */
function palindrom(string) {
  let middleString = Math.floor(string.length);
  let str = string.toUpperCase();
  for (let i = 0; i < middleString; i++) {
    if (str[i] !== str[(str.length - i - 1)] ) {
      return false;
    }
  }
  return true;
}


let result = palindrom('haha');

console.log(result);
