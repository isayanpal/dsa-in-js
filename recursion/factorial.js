// factorial of a number

function recursionFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursionFactorial(n - 1);
}

console.log(
  "🚀 ~ recursionFactorial ~ recursionFactorial(0):",
  recursionFactorial(0)
);
console.log(
  "🚀 ~ recursionFactorial ~ recursionFactorial(1):",
  recursionFactorial(1)
);
console.log(
  "🚀 ~ recursionFactorial ~ recursionFactorial(5):",
  recursionFactorial(5)
);

// Time complexity Big-O : O(n)
