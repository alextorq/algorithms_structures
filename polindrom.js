/**

**/

function polindrom(string) {
  let middleString = Math.floor(str.length);
  let str = string.toUpperCase();
  for (let i = 0; i < middleString; i++) {

    if (str[i] !== str[(str.length - i - 1)] ) {
      return false;
    }
    
  }
  return true;
}


let result = polindrom('haha');

console.log(result)
