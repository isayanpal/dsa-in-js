// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let ans = {};

  for (let s of strs) {
    let key = s.split("").sort().join("");
    if (!ans[key]) {
      ans[key] = [];
    }
    ans[key].push(s);
  }
  return Object.values(ans);
};

// Time complexity: O(m∗nlogn)
// Space complexity: O(mn)
