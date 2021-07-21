function findFirst(arr, num) {
  //  Initialize start and end indices
  let startIdx = 0;
  let endIdx = arr.length - 1;
  //  Create another variable to store the current index
  //  of the item we're looking for
  let resultIdx = -1;

  //  While start index is less than or equal to the end index,
  //  loop over the array
  while (startIdx <= endIdx) {
    //  Find the middle item
    let midIdx = Math.floor((startIdx + endIdx) / 2);

    //  If the middle item is equal to the
    //  number we're looking for:
    if (num === arr[midIdx]) {
      //  Store the middle index in the result
      resultIdx = midIdx;
      //  Set new end index to be middle index - 1
      endIdx = midIdx - 1;
    }
    //  If the number we're looking for is
    //  less than the middle item:
    else if (num < arr[midIdx]) {
      //  Set new end index to be middle index - 1
      endIdx = midIdx - 1;
    }
    //  If the number we're looking for is
    //  greater than the middle item:
    else {
      //  Set new start index to be middle index + 1
      startIdx = midIdx + 1;
    }
  }
  //  Return the index of the result
  return resultIdx;
}
