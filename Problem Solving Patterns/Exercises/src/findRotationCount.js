function findRotationCount(arr) {
  //  Initialize start and end indices
  let startIdx = 0;
  let endIdx = arr.length - 1;

  //  Create helper recursive function to traverse the array
  function traverse() {
    //  If start item is less than or equal to end item:
    if (arr[startIdx] <= arr[endIdx]) {
      //* This means the array is already sorted
      //  simply return the start index
      return startIdx;
    }

    //  If start index is greater than end index, return -1
    if (startIdx > endIdx) {
      //* This means we're done, and the array is not circularly sorted
      return -1;
    }

    //  Find the middle item
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    //  Find the two adjacent items to the middle item
    const nextIdx = (midIdx + 1) % arr.length;
    const prevIdx = (midIdx + arr.length - 1) % arr.length;

    //  If middle item is less than or equal to
    //  both of its adjacent items:
    if (arr[midIdx] <= arr[nextIdx] && arr[midIdx] <= arr[prevIdx]) {
      //* This means we've found the pivot item
      //  return the middle index
      return midIdx;
    }

    //  If middle item is less than or equal to the end item:
    if (arr[midIdx] <= arr[endIdx]) {
      //* This means the pivot is somewhere to the left
      //  Set new end index to be middle index - 1
      endIdx = midIdx - 1;
    }
    //  Otherwise:
    else {
      //* This means the pivot is somewhere to the right
      //  Set new start index to be middle index + 1
      startIdx = midIdx + 1;
    }

    //  Make a recursive call to start another iteration
    return traverse();
  }

  //  Start the helper function and return its result
  return traverse();
}
