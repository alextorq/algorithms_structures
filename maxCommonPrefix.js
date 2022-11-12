/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    const start = strs[0];
    let prefix = ''
    outer: for (let char of start) {
        prefix += char
        for (let index = 1; index < strs.length; index++) {
            const stringItem =  strs[index];
            if (!stringItem.startsWith(prefix)) {
               break outer
            }
        }
        result = prefix
    }
    return result;
};



console.log(longestCommonPrefix(['fiq', 'fia', 'qx']))
