function factorial(number) {
  return (number !== 1) ? number * factorial(number - 1) : 1;
}

function combine(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

console.log(combine(3, 2));
