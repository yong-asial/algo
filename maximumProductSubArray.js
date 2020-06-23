const input = [2,3,-2,4];
const output = 6;

const input2 = [-2, 0, -1];
const output2 = 0;

const maxProduct = (nums) => {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let finalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const currentMaxTemp = currentMax;
    currentMax = Math.max(currentMax * nums[i], currentMin * nums[i], nums[i]);
    currentMin = Math.min(currentMaxTemp * nums[i], currentMin * nums[i], nums[i]);

    if (currentMax > finalMax) finalMax = currentMax;
  }
  return finalMax;
};

console.log(maxProduct(input));
console.log(maxProduct(input2));
