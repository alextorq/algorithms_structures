
const arrayOne = [1, 4, 5, 7, 3, 8, 1, 9];
const arrayTwo = [3, 7, 1, 12, 9, 5, 24, 16];

function diffArrayInt(array1, array2) {
    // 1. Return a new array that will follow this rules
    return (
        // 2. Combine two arrays
        [...array1, ...array2]
        // 3. Check each element if it's unique return in a new array
            .filter((item) => !array1.includes(item) || !array2.includes(item))
    );
}

console.time('Start Algo 3');
console.log(diffArrayInt(arrayOne, arrayTwo));
console.timeEnd('Start Algo 3'); // Start Algo 3: 0.48486328125ms
