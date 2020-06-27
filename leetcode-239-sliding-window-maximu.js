// maximum sum of subarray of size k

const input = [1,3,-1,-3,5,3,6,7];
const k = 3;
const output = [3,3,5,5,6,7];
/*
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

var maxSlidingWindow = function(input, k) {
  let result = [];
  let j;
  let max;
  let n = input.length;
  // console.log(n);
  
  for (let i=0; i<=n-k; i++) {
      max = input[i];
      
      for (j=1; j<k; j++) {
          if (input[i+j] > max) {
              max = input[i+j];
          }
      }
      result.push(max);
  }

  return result;
};

