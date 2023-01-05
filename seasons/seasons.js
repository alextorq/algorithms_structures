/**
 * Возвращает название сезона года в зависимости от месяца
 * @param {number} month
 * @return {string} название месяца
 * @throws {Error}
 */
function getSeason(month) {
  const seasons = ['Зима', 'Весна', 'Лето', 'Осень'];
  let errorMessage = '';

  if (typeof month !== 'number') {
    errorMessage = 'it is not correct number';
  }
  if (month > 12 || month < 1 || (month % 1) !== 0) {
    errorMessage = 'number must be integer, greater than 0 and less 12';
  }

  if (errorMessage) {
    throw new Error(errorMessage);
  }

  month = (month > 11) ? 1 : month;

  let index = month / 3;

  index = Math.floor(index);

  return seasons[index];
}

module.exports = getSeason;
