// since array is sorted it is adviced to use binary search.
// steps:
// binary search
// if index not found return left.
// why left?
// logic: If the loop terminates without finding the target, it
// means the left pointer has moved to the position where
// the target should be inserted to maintain the sorted
// order of the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
