const a = [0, 4, 7, 8, 900];
const b = [1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 15, 400, 550];

function concatSort(a, b) {
  const res = [];
  const finalArrLength = a.length + b.length;
  let lastIndexA = 0;
  let lastIndexB = 0;

  while (res.length !== finalArrLength) {
    const AValue = a[lastIndexA] !== undefined ? a[lastIndexA] : Infinity;
    const BValue = b[lastIndexB] !== undefined ? b[lastIndexB] : Infinity;
    let val = AValue;
    if (AValue < BValue) {
      lastIndexA++;
    } else {
      val = BValue;
      lastIndexB++;
    }
    res.push(val);
  }

  return res;
}

const res = concatSort(a, b);
console.log(res);
