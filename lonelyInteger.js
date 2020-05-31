/*
Input: [9,1,2,3,2,9,1,7,7]
Output: 3
*/

const arr = [9,1,2,3,2,9,1,7,7];

// using map
const findLonely = (arr) => {
  const map = new Map();
  for (const num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num)+1);
    } else {
      map.set(num, 1);
    }
  }

  const iterator1 = map[Symbol.iterator]();
  for (const item of iterator1) {
    if (item[1] === 1) return item[0]
  }
  return null;
}

// using bit operation
const findLonelyWithBitOperation = (arr) => {
  let found = 0;
  for (const num of arr) {
    found ^= num;
  }
  return found;
}

console.log(findLonely(arr));
console.log(findLonelyWithBitOperation(arr));