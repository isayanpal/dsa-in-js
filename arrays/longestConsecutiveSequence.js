// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

// -------------- //
// first sort the array then traverse

var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let sortedArr = nums.sort((a, b) => a - b);

  let res = 0;
  let curr = sortedArr[0];
  let count = 0;
  let i = 0;

  while (i < sortedArr.length) {
    if (curr !== sortedArr[i]) {
      curr = sortedArr[i];
      count = 0;
    }
    while (i < sortedArr.length && curr === sortedArr[i]) {
      i++;
    }
    count++;
    curr++;
    res = Math.max(res, count);
  }
  return res;
};

// Time complexity = O(nlogn)

// ------------------ //
// Hash Set->
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let length = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

// Time complexity = O(n);
