

function solution(A) {
    // p[0] = 0, p[1] = A[0], p[2] = A[0] + A[1], ...
    let prefixSum = Array(A.length + 1).fill(0);
    for (let k = 1; k < A.length + 1; k++) {
        prefixSum[k] = prefixSum[k-1] + A[k-1];
    }

    let x = 2;
    let y = 4;
    return prefixSum[y] - prefixSum[x];
}

console.log(solution([1, 3, 6, 4, 1, 2]));
