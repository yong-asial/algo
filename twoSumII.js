const twoSum = (arr, target) => {
  let aPointer = 0;
  let bPointer = arr.length-1;
  while (aPointer < bPointer) {
    if (arr[aPointer]+arr[bPointer] < target) {
      aPointer++;
    } else if (arr[aPointer]+arr[bPointer] > target) {
      bPointer--;
    } else {
      return [arr[aPointer], arr[bPointer]];
    }
  }
  return null;
};

console.log(twoSum([2,7,11,15], 9));