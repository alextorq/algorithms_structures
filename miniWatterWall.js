/**
 *
 * @param {array} functions
 * @param {Function} callback
 */
export default function watterWall(functions, callback) {
  if (functions.length === 0) { return callback(null, []); }

  const iter = ([head, ...rest], previousResult) => {
    const cb = (err, ...args) => {
      if (err) { return callback(err, args); }
      if (rest.length === 0) {
        callback(err, args);
      } else {
        iter(rest, args);
      }
    };
    head(...previousResult, cb);
  };

  iter(functions, []);
}
