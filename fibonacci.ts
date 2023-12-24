const fibonacci = (n: number): number => {
  if (n < 2) return n;
  const dp: number[] = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    if (dp[i]) return dp[i];
    else dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(fibonacci(10));
