// this sort uses recursion

// given an array of integers, sort the array
//  const arr = [-6,20,8,-2,4]

// Identify the pivot element in the array
// - pick first element as pivot
// - pick last element as pivot
// - pick random element as pivot
// - pick median as pivot

//  Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array
// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition
// Repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log("🚀 ~ arr:", quickSort(arr));

// Worst case complexity - O(n^2) - sort an already sorted array
// Average case complexity - O(nlogn)
