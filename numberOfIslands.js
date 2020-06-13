const numberOfIslands = (arr) => {
  let count = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 1) {
        count++;
        callBFS(arr, row, col);
      }
    }
  }
  return count;
};

const callBFS = (arr, row, col) => {
  if (
    row < 0 || row >= arr.length ||
    col < 0 || col >= arr[row].length ||
    arr[row][col] === 0
  ) return;
  arr[row][col] = 0;
  callBFS(arr, row+1, col);
  callBFS(arr, row-1, col);
  callBFS(arr, row, col-1);
  callBFS(arr, row, col+1);
};


const arr = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0],
];

console.log(numberOfIslands(arr));
console.log(numberOfIslands([
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [1,1,1,1,1],
]));