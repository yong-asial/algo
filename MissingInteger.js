/*

This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

*/

function solution(A) {
    let count = Array(A.length).fill(false);
    for (let i = 0; i < A.length; i++) {
        if (A[i] > A.length || A[i] <= 0) continue;
        count[A[i]-1] = true;
    }
    for (let i = 0; i < count.length; i++) {
        if (count[i] === false) return (i+1);
    }
    return A.length + 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));