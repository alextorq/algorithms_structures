const arr = ['a', 'b', 'c', ['f', ['m', 'n']], 'z', 'w'];

/**
 * flat array
 * @param data {Array<T>}
 * @return {Array<T>}
 */
function flat(data) {
  return data.reduce((accum, item) => {
    if (Array.isArray(item)) {
      accum.push(...flat(item));
    } else {
      accum.push(item);
    }
    return accum;
  }, []);
}

console.log(flat(arr));
