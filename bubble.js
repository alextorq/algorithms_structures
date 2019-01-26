var unSortArray = [44, 56, 55, 0, 11, 784, 994, 12, 10, 4, 8];


function bubbleSort(array) {
  let switcher = true;
  while (switcher) {
    // по умолчанию выключаем дальнейший перебор массива
    switcher = false;

    for (var i = 0; i < array.length - 1; i++) {

      let cuurentEl = array[i];
      let nextEl = array[i + 1];

      // если текущий елемент больше чем слудующий то переставлякм
      // их местами и продолжаем перебор элементов
      if (cuurentEl > nextEl) {
        switchElArray(array, i, i + 1);
        switcher = true;
      }

    }
  }

  return array;
}

// функция для перестановки двух элементов в массиве местами
function switchElArray(array, a, b) {

  let currentEl = array[a];
  let nextEl = array[b];

  array[a] = nextEl;
  array[b] = currentEl;
}


console.log(bubbleSort(unSortArray));
