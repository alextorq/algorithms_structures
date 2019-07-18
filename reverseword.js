/**
 * @param {String} str 
 * @returns {String}
 */
function reverseWord(str) {
    let chunkWord = '';
    let wordArray = str.split('');

    for (let i = 0; i <= wordArray.length; i++) {
        chunkWord = wordArray[i] + chunkWord;
    }

    return chunkWord;

}