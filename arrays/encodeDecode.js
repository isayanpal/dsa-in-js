// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

// Example 1:

// Input: ["neet","code","love","you"]

// Output:["neet","code","love","you"]
// Example 2:

// Input: ["we","say",":","yes"]

// Output: ["we","say",":","yes"]

// Time complexity : O(n)

class Solution {
  encode(strs) {
    let res = "";
    for (let s of strs) {
      res += s.length + "#" + s;
    }
    return res;
  }

  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}

// Test cases

const sol = new Solution();

// Test Case 1
const strs1 = ["hello", "world"];
const encoded1 = sol.encode(strs1);
const decoded1 = sol.decode(encoded1);

console.log("Test Case 1:");
console.log("Original:", strs1);
console.log("Encoded:", encoded1);
console.log("Decoded:", decoded1);
console.log("--------------------");

// Test Case 2
const strs2 = ["I", "love", "coding", "#100DaysOfCode"];
const encoded2 = sol.encode(strs2);
const decoded2 = sol.decode(encoded2);

console.log("Test Case 2:");
console.log("Original:", strs2);
console.log("Encoded:", encoded2);
console.log("Decoded:", decoded2);
