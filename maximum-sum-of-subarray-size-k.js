// maximum sum of subarray of size k

const input = [4,2,1,7,8,1,2,8,1,0];
const k = 3;
const output = 16;

const solution = (input, k) => {
  let max = 0;
  for (let i=0; i<k; i++) max += input[i];

  for (let i = 3; i < input.length; i++) {
    let current = max + input[i] - input[i-k];
    if (current > max) max = current;
  }
  return max;
};

console.log(solution(input, k));