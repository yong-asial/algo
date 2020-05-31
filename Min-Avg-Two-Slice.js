function solution(A) {
    let min = 0;
    let index = 0;
    let prefixSum = Array(A.length-1).fill(0);
    prefixSum[0] = A[0] + A[1];
    min = prefixSum[0];
    console.log(0, prefixSum[0]);
    for (let i = 1; i < A.length - 1; i++) {
        prefixSum[i] = A[i] + A[i+1];
        console.log(i, prefixSum[i]);
        if (prefixSum[i] < min) {
            min = prefixSum[i];
            index = i;
        }
    }
    return index;
}

let A = Array(7).fill(0);
A[0] = 4;
A[1] = 2;
A[2] = 2;
A[3] = 5;
A[4] = 1;
A[5] = 5;
A[6] = 8;
// console.log(solution(A)); // 1
// console.log(solution([5, 6, 3, 4, 9])); // 2
console.log(solution([-3, -5, -8, -4, -10])); // 2