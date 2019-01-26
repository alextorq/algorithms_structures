

var unSortArray = [44, 56, 55, 0, 11, 784, 994, 12, 10, 4, 8];


function isertSort(array) {
  for (var i = 1; i < array.length; i++) {

    let currentIndex = i;
    let currentEl = array[currentIndex];
    let prevEl = array[i - 1];

    while (currentIndex > 0 && array[currentIndex - 1] > currentEl) {
      array[currentIndex] =   array[currentIndex - 1];
      currentIndex--;
    }

      array[currentIndex] = currentEl;
  }
  return array;
}




console.log(isertSort(unSortArray));
