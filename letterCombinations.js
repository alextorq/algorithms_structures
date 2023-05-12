/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['x', 'y', 'w', 'z'],
  };

  const result = [];
  function walk() {
    const stuck = [];
  }

  for (let index = 0; index < digits.length - 1; index++) {
    const char = digits[index];
    const variants = map[char];
    const next = [...digits.substring(index + 1, digits.length)].flatMap((n) => map[n]);
    console.log({ next });
    for (const variant of next) {
      variants.forEach((item) => {
        result.push(item + variant);
      });
    }
  }
  if (digits.length === 1) {
    return map[digits];
  }

  return result;
}

// console.log(letterCombinations('234'));

