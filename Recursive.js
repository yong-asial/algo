function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

function fibMemoize(n, memo) {
    if (memo[n-1] !== 0) return memo[n-1];
    if (n === 1 || n === 2) {
        result = 1;
    } else {
        result = fib(n-1) + fib(n-2);
    }
    memo[n-1] = result;
    return result;
}

function fibBottomUp(n) {
    if (n === 1 || n === 2) return 1;
    let buttomUp = Array(n).fill(0);
    buttomUp[0] = 1;
    buttomUp[1] = 1;
    for (let i = 2; i < n;i++) {
        buttomUp[i] = buttomUp[i-1] + buttomUp[i-2];
    }
    return buttomUp[n-1];
}

let n = 6;
let memo = Array(n).fill(0);
console.log(fib(n));
console.log(fibMemoize(n, memo));
console.log(fibBottomUp(n));
