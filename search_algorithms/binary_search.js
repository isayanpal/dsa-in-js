//* important point to remember - Binary Search only works on Sorted Array otherwise if the array is not sorted we use linear search or sort the array first then apply binary search.
// given a sorted array of 'n' elements and a target element 't' , find the index of 't' in the array. Return -1 if the target element is not found.

// pseudocode

// if the array is empty, return -1 as the element cannot be found.
// if the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index.
// if the target is less than the middle element, binary search the left half of the array.
// if the target is greater than the middle element , binary search right half of the array.

// we will use TwoPointers to get the middle element by pointig the leftMost and rightMost element.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

// Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
