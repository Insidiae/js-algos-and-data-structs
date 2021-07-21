function countZeroes(arr) {
  //  If start item is 0, return the length of the array
  if (arr[0] === 0) {
    return arr.length;
  }
  //  If end item is 1, return 0
  if (arr[arr.length - 1] === 1) {
    return 0;
  }
  //  Find last occurrence of 1
  const last = findLast(arr, 1);
  //  Subtract index of the last 1 from the length of the array - 2,
  // and return the result
  return arr.length - last - 2;
}
