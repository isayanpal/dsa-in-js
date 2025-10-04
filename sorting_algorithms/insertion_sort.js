// given an array of integers, sort the array
//  const arr = [-6,20,8,-2,4]

// virtually split the array into a sorted and an unsorted part
// assume that the first element is already sorted and remaining elements are unsorted
// select an unsorted element and compare with all elements in the sorted part
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index
// Repeat till all the unsorted elements are placed in the right order

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [-6, 20, 8, -2, 4];
insertionSort(arr);
console.log("🚀 ~ arr:", arr);

// Big-O = O(n^2)
