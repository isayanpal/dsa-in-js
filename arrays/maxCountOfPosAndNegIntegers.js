// Approach
// We use binary search twice:
// First to find the index of the first non-negative number (0 or positive), which gives us the count of negative numbers
// Second to find the index of the first positive number, which helps us calculate the count of positive numbers
// We implement a helper function binary_search(nums, target) that finds the index of the first element greater than or equal to the target.

// This function is used to:
// Find the first index where the value is ≥ 0 (giving us the negative count)
// Find the first index where the value is ≥ 1 (allowing us to calculate the positive count)

// Complexity
// Time complexity: O(log(n))
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let negCount = binarySearch(nums, 0);
  let posCount = nums.length - binarySearch(nums, 1);
  return Math.max(negCount, posCount);
};

var binarySearch = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    result = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      result = mid;
      right = mid - 1;
    }
  }

  return result;
};
