/*
Input : arr[] = {1, 3, 2, 1, 2, 2, 3, 1}
Output : 3

Input : arr[] = {10, 20, 30}
Output : 10 or 20 or 30
*/

const arr = [1, 3, 2, 1, 2, 2, 3, 1];
const arr2 = [10, 20, 30, 10];

const solution1 = (arr) => {
  const map = new Map();
  let min = arr.length+1;
  let element = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]) ? map.get(arr[i])+1 : 1;
    map.set(arr[i], count);
  }
  map.forEach((value, key) => {
    if (min > value) {
      min = value;
      element = key;
    }
  })
  return element;
}


console.log(solution1(arr));
console.log(solution1(arr2));