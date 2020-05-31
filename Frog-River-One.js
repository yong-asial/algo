// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let sumX = X * (X+1) / 2;
    let countX = Array(X).fill(0);
    for (let i = 0; i < n; i++) {
        if (A[i] > X) continue;
        if (countX[A[i]-1] >= 1) continue;
        countX[A[i]-1] = 1;
        sumX -= A[i];
        if (sumX === 0) return i;
    }
    return -1;
}

function solution2(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let covered = X;
    let countX = Array(X).fill(0);
    for (let i = 0; i < n; i++) {
        if (A[i] > X) continue;
        if (countX[A[i]-1] >= 1) continue;
        countX[A[i]-1] = 1;
        covered -= 1;
        if (covered === 0) return i;
    }
    return -1;
}


let result = solution2(5, [1,3,1,4,2,3,5,4]);
console.log(result);