function findRotatedIndex(arr, num, startIdx = 0, endIdx = arr.length - 1) {
  //  Find the middle index
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  //  If middle item is equal to the number we are looking for:
  if (arr[midIdx] === num) {
    //  return the middle index
    return midIdx;
  }
  //  If start index is greater than end index, return -1
  if (startIdx > endIdx) {
    //* This means we're done and no item can be found
    return -1;
  }
  //  If middle item is less than or equal to the end item:
  if (arr[midIdx] <= arr[endIdx]) {
    //* This means the right side is sorted
    //  If the number we are looking for is
    //  between middle and end items,
    if (num > arr[midIdx] && num <= arr[endIdx]) {
      //  set new start index to be middle index + 1
      return findRotatedIndex(arr, num, midIdx + 1, endIdx);
    }
    //  Otherwise, set new end index to be middle index - 1
    return findRotatedIndex(arr, num, startIdx, midIdx - 1);
  }
  //  Otherwise:
  else {
    //* This means the left side is sorted
    //  If the number we are looking for is
    //  between start and middle items,
    if (num >= arr[startIdx] && num < arr[midIdx]) {
      //  set new end index to be middle index - 1
      return findRotatedIndex(arr, num, startIdx, midIdx - 1);
    }
    //  Otherwise, set new start index to be middle index + 1
    return findRotatedIndex(arr, num, midIdx + 1, endIdx);
  }
}
