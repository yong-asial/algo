/*
Input : arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output : Union : {1, 2, 3, 4, 5, 6, 7} 
         Intersection : {3, 5}

Input : arr1[] = {2, 5, 6}
        arr2[] = {4, 6, 8, 10} 
Output : Union : {2, 4, 5, 6, 8, 10} 
         Intersection : {6}
*/

const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 5, 6];
const arr3 = [2, 5, 6];
const arr4 = [4, 6, 8, 10];

const union = (arr1, arr2) => {
  const set = new Set(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) set.add(arr2[i]);
  }
  return Array.from(set).sort((a,b)=>a-b);
};

const intersection = (arr1, arr2) => {
  const set = new Set(arr1);
  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) result.push(arr2[i]);
  }
  return result;
}

const union2 = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while (i < arr1.length) result.push(arr1[i++]);
  while (j < arr2.length) result.push(arr2[j++]);
  return result;
};

const intersection2 = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  return result;
};

// console.log('intersection', intersection(arr1, arr2));
// console.log('union', union(arr1, arr2));
console.log('intersection', intersection2(arr1, arr2));
console.log('union', union2(arr1, arr2));

console.log('intersection', intersection2(arr3, arr4));
console.log('union', union2(arr3, arr4));