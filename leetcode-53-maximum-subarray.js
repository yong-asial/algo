// Maximum Subarray

const input = [-2,1,-3,4,-1,2,1,-5,4];
const output = 6;
// Explanation: [4,-1,2,1] has the largest sum = 6.

// bruteforce
const maximumSubarray2 = (input) => {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    let sum = 0;
    for (let j = i; j < input.length; j++) {
      sum += input[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};

// kadane's algorithm
const maximumSubarray = (input) => {
  let max = input[0];
  let currentSum = max;
  for (let i = 1; i < input.length; i++) {
    currentSum = Math.max(input[i], currentSum + input[i]);
    if (currentSum > max) max = currentSum;
  }
  return max;
};

console.log(maximumSubarray(input));