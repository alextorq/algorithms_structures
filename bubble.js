const unSortArray = [44, 56, 55, 0, 11, 784, 994, 12, 10, 4, 8];

// функция для перестановки двух элементов в массиве местами
function switchElArray(array, a, b) {
  const currentEl = array[a];
  const nextEl = array[b];

  array[a] = nextEl;
  array[b] = currentEl;
}

function bubbleSort(array) {
  let switcher = true;
  while (switcher) {
    // по умолчанию выключаем дальнейший перебор массива
    switcher = false;

    for (let i = 0; i < array.length - 1; i++) {
      const currentEl = array[i];
      const nextEl = array[i + 1];

      // если текущий елемент больше чем слудующий то переставлякм
      // их местами и продолжаем перебор элементов
      if (currentEl > nextEl) {
        switchElArray(array, i, i + 1);
        switcher = true;
      }
    }
  }

  return array;
}

console.log(bubbleSort(unSortArray));
