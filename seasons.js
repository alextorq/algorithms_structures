


function getSeason(month) {
	var seasons = ['Зима', 'Весна', 'Лето', 'Осень'];

	month = (month > 11) ? 1 : month;

	var index = month / 3;

	index = Math.floor(index);

	return seasons[index]

}



for (var i = 1; i <= 12; i++) {
	console.log(`${i} месяц это ${getSeason(i)}`)

}