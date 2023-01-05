/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function findTheDifference(s, t) {
  let result = '';
  const map = new Map();
  const forTest = s.length > t.length ? s : t;
  const forCheck = s.length > t.length ? t : s;

  for (const forTestElement of forCheck) {
    map.set(forTestElement, true);
  }

  for (const forTestElement of forTest) {
    if (!map.has(forTestElement)) {
      result = forTestElement;
      break;
    }
  }

  return result;
}

console.log(findTheDifference('ab', 'aab'));
