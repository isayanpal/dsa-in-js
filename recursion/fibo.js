// how to find the nth element of the fibonacci sequence

// recFib(0) = 0
// recFib(1) = 1
// recFib(6) = 8

function recFib(n) {
  if (n < 2) {
    return n;
  }
  return recFib(n - 1) + recFib(n - 2);
}

console.log("🚀 ~ recFib ~ recFib(0):", recFib(0));
console.log("🚀 ~ recFib ~ recFib(1):", recFib(1));
console.log("🚀 ~ recFib ~ recFib:(6)", recFib(6));

// Time complexity - O(2^n)
