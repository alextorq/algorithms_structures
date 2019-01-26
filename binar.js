

function binarSerch(array, value) {
  let firstIndex = 0;
  let lastIndex = array.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.round((firstIndex + lastIndex) / 2);
    let middleValue = array[middleIndex];

    if (value > middleValue) {
      firstIndex = middleIndex + 1;
    }else if (value < middleValue) {
        lastIndex = middleIndex - 1;
    }else {
      return middleIndex;
    }
  }

  return -1;
}

let sortArray = [1,2,3,4,5,6,7,8,9,10];

let result = binarSerch(sortArray, 8);

console.log(result);
