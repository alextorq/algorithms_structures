/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  let increase = 0;
  let result = '';
  const NUMERAL_SYSTEM = 10;
  const large = num1.length >= num2.length ? num1 : num2;
  const small = num1.length >= num2.length ? num2 : num1;
  let num2Last = small.length - 1;

  for (let index = large.length - 1; index >= 0; index--, num2Last--) {
    const first = large[index] || 0;
    const second = small[num2Last] || 0;

    const sum = (+first) + (+second) + increase;
    increase = sum >= NUMERAL_SYSTEM ? 1 : 0;

    result = (sum % NUMERAL_SYSTEM) + result;
  }

  if (increase) {
    result = `1${result}`;
  }

  return result;
}

console.log(addStrings('11', '123'));
