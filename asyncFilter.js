/**
 *  Async filter array
 * @param {array} coll
 * @param {Function} predicate
 * @param {Function} cb
 */
export default function asyncFilter(coll, predicate, cb) {

    const iter = ([head, ...rest], acc) => {

        if(predicate(head)) {
            acc.push(head);
        }
        if(rest.length === 0) {
            cb(acc);
            return
        }

        setTimeout(iter, 0, rest, acc);
    };

    iter(coll, []);
}

