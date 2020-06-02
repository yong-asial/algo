/*
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/

var smallerNumbersThanCurrent = function(nums) {
  const result = [];
  for (let i=0; i<nums.length; i++) {
      let count = 0;
      for (let j=0; j<nums.length; j++) {
          if (i !== j && nums[i] > nums[j]) ++count;
      }
      result.push(count);
  }
  return result;
};

var smallerNumbersThanCurrent2 = function(nums) {
  var r = new Array(nums.length);
  
  var a = nums.map(function(e, i) {
     return {
         originalIndex: i,
         num: e
     } 
  });
  
  a.sort(function(a1, a2) {
      return a1.num - a2.num;
  })
  
  var prev = 0;
  var turns = 0;
  
  a.forEach(function(e, i) {
     if(i === 0) {
         r[e.originalIndex] = 0;
         prev = e.num;
     } else {
         if(e.num > prev) {
             r[e.originalIndex] = i
             turns = 0;
         } else {
             turns++;
             r[e.originalIndex] = i - turns;
         }
         prev = e.num;
     }
  });
  
  return r;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent2([8,1,2,2,3]));