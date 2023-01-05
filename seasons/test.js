const seasons = require('./seasons');

test('Зима', () => {
  expect(seasons(1)).toBe('Зима');
  expect(seasons(2)).toBe('Зима');
  expect(seasons(12)).toBe('Зима');
  expect(seasons(3)).not.toBe('Зима');
});

test('Весна', () => {
  expect(seasons(3)).toBe('Весна');
  expect(seasons(4)).toBe('Весна');
  expect(seasons(5)).toBe('Весна');
  expect(seasons(2)).not.toBe('Весна');
});

test('Лето', () => {
  expect(seasons(6)).toBe('Лето');
  expect(seasons(7)).toBe('Лето');
  expect(seasons(8)).toBe('Лето');
  expect(seasons(1)).not.toBe('Лето');
});

test('Осень', () => {
  expect(seasons(9)).toBe('Осень');
  expect(seasons(10)).toBe('Осень');
  expect(seasons(11)).toBe('Осень');
  expect(seasons(1)).not.toBe('Осень');
});

test('Исключения', () => {
  expect(() => { seasons(13); }).toThrow();
  expect(() => { seasons(); }).toThrow();
  expect(() => { seasons(1.2); }).toThrow();
  expect(() => { seasons(0); }).toThrow();
  expect(() => { seasons(122); }).toThrow();
  expect(() => { seasons(null); }).toThrow();
  expect(() => { seasons('Not number'); }).toThrow();
  expect(() => { seasons(Infinity); }).toThrow();
  expect(() => { seasons(undefined); }).toThrow();
});
