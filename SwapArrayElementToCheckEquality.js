// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function sum(a) {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result += a[i];
    }
    return result;
}

function solution(a1, a2) {
    sumA1 = sum(a1);
    sumA2 = sum(a2);
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            if ((sumA1 - a1[i] + a2[j]) === (sumA2 - a2[j] + a1[i])) return true;
        }
    }
    return false;
}

let result = solution(
    [1,2,3,4],
    [1,5,4,2]
);
console.log(result);