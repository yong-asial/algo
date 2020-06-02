/*
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/

var subtractProductAndSum = function(n) {
  let st = String(n);
  let product = 1;
  let sum = 0;
  while(n) {
      const num = n%10;
      product *= num;
      sum += num;
      n = parseInt(n/10);
  }
  return product - sum;
};