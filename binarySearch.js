const binarySearchRecursive = (nums, x, left, right) => {
  if (left === undefined) left = 0;
  if (right === undefined) right = nums.length - 1;
  if (left > right) return false;
  const mid = Math.floor((left + right) / 2);
  // left + ((right-left)/2) to avoid overflow
  const num = nums[mid];
  if (num === x) return true;
  if (x > num) return binarySearchRecursive(nums, x, mid+1, right);
  return binarySearchRecursive(nums, x, 0, mid-1);
}

const binarySearch = (nums, x) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num === x) return true;
    if (x < num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

const nums = [1,3,6,8,10];
const x = 10;
const found = binarySearchRecursive(nums, x);
console.log(found);
console.log(binarySearch(nums, x));
