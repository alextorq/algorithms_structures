/**
 * Преобраовать число в строку
 * @param {number} i
 * @return {string}
 */
function iota(i) {
  const result = [];
  let first = true;

  if (i < 0) {
    return '';
  }

  while (i > 1) {
    const count = i % 10;
    let tmp = Math.floor(count);
    if (first) {
      tmp = count;
    }
    i /= 10;
    result.push(tmp);
    first = false;
  }

  return result.reverse().join('');
}

console.log(iota(123.5) === '123.5');
console.log(iota(123.51111) === '123.51111');

for (let i = 0; i < 10; i++) {
  !(function m(i) {
    setTimeout(() => console.log(i), 0);
  }());
}
