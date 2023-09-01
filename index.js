// Finding a countiguous array with the largest sum
//
var slidingWindow = function (numbers, k) {
    if (k > numbers.length)
        return 0;
    var sum = 0;
    var testSum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (i < k) {
            sum += numbers[i];
        }
        else {
            for (var m = i; m < numbers.length - k; m++) {
                testSum = sum - numbers[m - k] + numbers[m];
                sum = Math.max(sum, testSum);
            }
        }
    }
    return sum / k;
};
console.log(slidingWindow([1, 12, -5, -6, 50, 3, 0, -45, 23], 4));
