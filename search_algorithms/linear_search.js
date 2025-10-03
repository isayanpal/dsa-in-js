// given an array of 'n' elements and a target elememt 't' , find the index of 't' in the array. Return -1 if the target element is not found.

// pseudocode-
// start at the first element in the array and move towards the last.
// at each element though, check if the element is equal to the target element.
// if element found , return the index of the element
// if element not found , return -1

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Big-o = O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)); // -1
