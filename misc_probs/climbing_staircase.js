// Given a staircase of n steps, count the number distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.
//  n = 1, climbingStaircase(1) = 1
//  n = 2, climbingStaircase(2) = 2 [(1,1), (2)]
//  n = 3, climbingStaircase(3) = 3 [(1,1,1), (1,2), (2,1)]
//  n = 4, climbingStaircase(4) = 5 [(1,1,1,1), (1,1,2), (1,2,1),(2,1,1), (2,2)]

// Idea -
// At any given time, you can climb either 1 step or 2 steps
// If you have to climb to step n, we can only climb from step n-1 or n-2
// Calculate the ways we can climb to n-1 and n-2 steps and add the two
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

function climbingStaircase(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}

console.log(
  "🚀 ~ climbingStaircase ~ climbingStaircase(1):",
  climbingStaircase(1)
);
console.log(
  "🚀 ~ climbingStaircase ~ climbingStaircase(2):",
  climbingStaircase(2)
);
console.log(
  "🚀 ~ climbingStaircase ~ climbingStaircase(3):",
  climbingStaircase(3)
);
console.log(
  "🚀 ~ climbingStaircase ~ climbingStaircase(4):",
  climbingStaircase(4)
);

// Big-O = O(n)
