const intervals = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
const intervals1 = [[1, 4], [8, 10], [15, 18], [2, 6]];
const intervals2 = [[2, 6], [8, 10], [15, 18], [0, 3]];

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  const result = [];
  intervals.forEach((item) => {
    let push = true;
    for (let i = 0; i < result.length; i++) {
      const resItem = result[i];
      if (resItem[1] >= item[0] && resItem[0] <= item[1]) {
        resItem[1] = Math.max(resItem[1], item[1]);
        resItem[0] = Math.min(resItem[0], item[0]);
        push = false;
      }
    }
    if (push) result.push([item[0], item[1]]);
  });

  return result;
}

const answer = [[1, 10]];
const answer1 = [[1, 6], [8, 10], [15, 18]];

// console.log(JSON.stringify(merge(intervals1)) === JSON.stringify(answer1))
// console.log(merge(intervals1))
//
console.log(JSON.stringify(merge(intervals)) === JSON.stringify(answer));
console.log(merge(intervals));
