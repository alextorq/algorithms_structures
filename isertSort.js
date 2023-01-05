const unSortArray = [44, 56, 55, 0, 11, 784, 994, 12, 10, 4, 8];

function isertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentIndex = i;
    const currentEl = array[currentIndex];
    const prevEl = array[i - 1];

    while (currentIndex > 0 && array[currentIndex - 1] > currentEl) {
      array[currentIndex] = array[currentIndex - 1];
      currentIndex--;
    }

    array[currentIndex] = currentEl;
  }
  return array;
}

console.log(isertSort(unSortArray));
