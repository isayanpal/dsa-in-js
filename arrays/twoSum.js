// Brute force
// Big-O : O(n^2)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
};

// One-pass Hash Table
// Big-O : O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
