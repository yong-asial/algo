const merge = (arr1, arr2) => {
  const arr3 = [];
  const n = arr1.length + arr2.length - 1;
  let first = 0;
  let second = 0;
  for (let i=n; i>=0; i--) {
    const num1 = arr1[first];
    const num2 = arr2[second];
    if (num1 <= num2 || second > arr2.length-1) {
      arr3.push(num1);
      first++;
    } else {
      arr3.push(num2);
      second++;
    }
  }
  return arr3;
}

const merge2 = (arr1, arr2) => {
  const arr3 = [];
  let first = 0;
  let second = 0;
  let i = 0;
  while (first < arr) {

  }
}

arr1 = [1,3,4,5];
arr2 = [2,3,6,8];
console.log(merge(arr1, arr2));