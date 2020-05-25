/**
	@description сдвиг массива на указанное число
	@param  {number} switchCount число на которое сдвигать массив
	@param {Array} array  входной массив для сдвига
	@return {Array} array 
*/


function switchArray(array, switchCount) {
	let length = array.length - 1;
	let direction = switchCount > 0;
	switchCount = Math.abs(switchCount);
	while(switchCount){

		if (direction) {
			let lastValue = array[length];
			for (let i = length; i > 0 ; i--) {
				array[i] = array[i - 1];
			}
			array[0] = lastValue;
		}else {
			let firstValue = array[0];
			for (let i = 0; i < length ; i++) {
				array[i] = array[i + 1];
			}
			array[length] = firstValue;
		}

		switchCount--
	}
	return array
}



let arrayToSwitch = [0,1,2,3,4];


let arrayAfterSwitch =  switchArray(arrayToSwitch, 2);

console.log(arrayAfterSwitch);