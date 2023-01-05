/**
	@description сдвиг массива на указанное число
	@param  {number} switchCount число на которое сдвигать массив
	@param {Array} array  входной массив для сдвига
	@return {Array} array
*/
function switchArray(array, switchCount) {
  const length = array.length - 1;
  const direction = switchCount > 0;
  switchCount = Math.abs(switchCount);
  while (switchCount) {
    if (direction) {
      const lastValue = array[length];
      for (let i = length; i > 0; i--) {
        array[i] = array[i - 1];
      }
      array[0] = lastValue;
    } else {
      const firstValue = array[0];
      for (let i = 0; i < length; i++) {
        array[i] = array[i + 1];
      }
      array[length] = firstValue;
    }

    switchCount--;
  }
  return array;
}

const arrayToSwitch = [0, 1, 2, 3, 4];

const arrayAfterSwitch = switchArray(arrayToSwitch, 2);

console.log(arrayAfterSwitch);
