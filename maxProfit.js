/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let left = 0;
  let right = 1;
  let mProfit = 0;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit > 0) {
      mProfit = Math.max(mProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return mProfit;
}

const input = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(input));
