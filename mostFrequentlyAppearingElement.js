/*
Input : arr[] = {1, 3, 2, 1, 4, 1}
Output : 1
*/

const arr = [1, 3, 2, 1, 4, 1];

const solution1 = (arr) => {
  const map = new Map();
  let max = 1;
  let element = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const count = map.get(arr[i]) ? map.get(arr[i])+1 : 1;
    map.set(arr[i], count);
    if (max < count) {
      max = count;
      element = arr[i];
    }
  }
  return element;
}


console.log(solution1(arr));
console.log(solution1([10, 20, 10, 20, 30, 20, 20]));