// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Map();

  for (let char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!counter.has(char) || counter.get(char) === 0) {
      return false;
    }
    counter.set(char, counter.get(char) - 1);
  }
  return true;
};

// Time complexity: O(n)
// Space complexity:O(26) → O(1)
