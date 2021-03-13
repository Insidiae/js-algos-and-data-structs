function flatten(arr) {
  //  "Unwrap" any arrays within the input array
  const newArr = [].concat(...arr);
  //  If there are still array elements in the new array, call flatten again
  //  Otherwise, return flattened array
  return newArr.some(elem => Array.isArray(elem)) ? flatten(newArr) : newArr;
}
