// Finding a contiguous array with the largest sum
 
const slidingWindow = (numbers: number[], k: number): number => {
  if (k > numbers.length) return 0;
  let sum = 0;
  let testSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i < k) {
      sum += numbers[i];
    }
    //sliding window
    else {
      for (let m = i; m < numbers.length - k; m++) {
        testSum = sum - numbers[m - k] + numbers[m];
        sum = Math.max(sum, testSum);
      }
    }
  }
  return sum / k;
};
console.log(slidingWindow([1, 12, -5, -6, 50, 3, 0, -45, 23], 4));
