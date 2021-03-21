//* Helpfer function that moves an element
//* into its correct sorted position in the array
function pivot(arr, startIdx = 0, endIdx = arr.length - 1, pass) {
  //  Grab pivot element from the array
  //! In this particular implementation, we're getting the pivot
  //! from the starting index, but other implementations can select
  //! any other (random) pivot element between start/end indices!
  const pivot = arr[startIdx];
  console.log(`Moving pivot element (${pivot}) into its correct position...`)
  //  Initialize variable for current pivot index
  //! Interestingly, this also tracks how many
  //! elements are smaller that our pivot!
  let pivotIdx = startIdx;
  //  Loop over array from the given start to end indices
  for(let i = startIdx + 1; i <= endIdx; i++) {
    //  If current element is smaller than pivot:
    if(arr[i] < pivot) {
      //  Increment the pivot index variable,
      pivotIdx++;
      //  and swap the current element with
      //  the element at current pivot index
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
      console.log(arr);
    }
  }
  //  Swap pivot element (i.e. the starting element)
  //  with the element at the current pivot index
  [arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]];
  console.log(`Current array status after pass ${pass}:`)
  console.log(arr);
  //  Return the pivot index
  return pivotIdx;
}

// pivot([4,8,2,1,5,7,6,3])

//* Main Logic for Quick Sort
function quickSort(arr) {
  //  Count the number of iterations we've made so far,
  //  and display it later
  let pass = 1;

  function quickSortLogic(arr, startIdx = 0, endIdx = arr.length - 1) {
    //  If subarray has more than two elements:
    if(startIdx < endIdx) {
      //  Display the current status of the array
      //  as we iterate through the pivot function
      console.log(`Pass #${pass}`);
      //  Get pivot index by calling the pivot helper on the subarray
      const pivotIdx = pivot(arr, startIdx, endIdx, pass);
      pass++;
      //  Use pivot index to make recursive calls
      //  to the left and right of the pivot index
      //! Since the element at pivot index should already be sorted,
      //! we don't need to include it in the recursive calls!
      quickSortLogic(arr, startIdx, pivotIdx - 1);
      quickSortLogic(arr, pivotIdx + 1, endIdx);
    }
    //  Return the sorted array
    return arr;
  }

  //! quickSort sorts the array in-place, so we don't need to
  //! create a new variable to store the sorted array!
  quickSortLogic(arr);
  console.log("Sorted array is:");
  return arr;
}