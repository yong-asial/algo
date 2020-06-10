
const numWays= (n) => {
  if (n<=1) return 1;
  if (n===2) return 2;
  return numWays(n-1) + numWays(n-2);
}

// Dynamic Programming - bottomUp approach
const numWaysDP = (n, dp) => {
  if (n<=1) return 1;
  if (n===2) return 2;
  if (!dp[n-1]) dp[n-1] = numWays(n-1, dp) + numWays(n-2, dp);
  return dp[n-1];
}

const n = 4;
const dp = Array(n);
console.log(numWays(n));
console.log(numWaysDP(n));