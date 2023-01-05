/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let increment = 1;
  const rad = 10;
  for (let index = digits.length - 1; index !== -1; index--) {
    let digit = digits[index] + increment;
    if (digit === rad) {
      digit = 0;
    } else {
      increment = 0;
    }
    digits[index] = digit;
  }
  if (increment) {
    digits.unshift(1);
  }
  return digits;
};
