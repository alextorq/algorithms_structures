/**
 * @param {string[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
  const last = s.length - 1;
  const middle = Math.ceil(s.length / 2);
  for (let index = 0; index < middle; index++) {
    const left = s[index];

    s[index] = s[last - index];
    s[last - index] = left;
  }
}

const input = ['h', 'e', 'l', 'l', 'o'];
reverseString(input);
