let input = ["0",1,"0","0",0],
    solution = [1,"0","0","0",0];


function removeZeros(array) {
    let zero = true
    const length = array.length - 1
    while (zero) {
        zero = false

        for (let i = 0; i < length; i++) {
            const element =  array[i];
            const nextElement = array[i + 1]

            if ((0 === element || element === '0') && (0 !== nextElement && nextElement !== '0')) {
                zero = true
                array[i + 1] = element
                array[i] = nextElement
            }
        }

    }
    return array;
}

console.log(JSON.stringify(removeZeros(input)) === JSON.stringify(solution));
// console.log(removeZeros(input));
