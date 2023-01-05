function sum(...arg) {
  if (arg.length > 1) {
    return arg.reduce((acmulate, (currenValue) => acmulate + currenValue));
  }

  let acumulateSum = arg[0];

  function close(b) {
    acumulateSum += b;
    return close;
  }

  close.toString = function () {
    return acumulateSum;
  };
  close.valueOf = function () {
    return acumulateSum;
  };

  return close;
}

console.log(+sum(5)(4)(3));
