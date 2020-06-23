const nums = [10,5,2,6];
const k = 100;
const output = 8;

// bruteforce
const subArrayProductLessThanK = (nums, k) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum < k) {
      count++;
    } else {
      continue;
    }
    for (let j = i+1; j < nums.length; j++) {
      sum *= nums[j];
      if (sum < k) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

// sliding windows approach
const subArrayProductLessThanKSlidingWindowApproach = (nums, k) => {
  if (k <= 1) return 0;
  let product = 1;
  let result = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    result += right - left + 1;
    right++;
  }

  return result;
};

console.log(subArrayProductLessThanK(nums, k));
console.log(subArrayProductLessThanKSlidingWindowApproach(nums, k));