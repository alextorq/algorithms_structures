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
    const prev = map.get(forTestElement) || 0;
    map.set(forTestElement, prev + 1);
  }

  for (const forTestElement of forTest) {
    const newValue = map.get(forTestElement);
    if (newValue) {
      if (newValue) {
        map.set(forTestElement, newValue - 1);
      }
    } else {
      result = forTestElement;
      break;
    }
  }

  return result;
}

console.log(findTheDifference('ab', 'aab'));
