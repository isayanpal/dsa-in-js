// Sorting first then we iterate through the input array from index 1 and check previous index every time.
// Big-O : O(nlogn)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

// this one passed all 3 test cases in leetcode but during submission - time limit exceeded so not recommended
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === nums[i]) {
        return true;
      }
    }
  }
  return false;
};
