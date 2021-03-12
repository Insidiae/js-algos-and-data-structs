function someRecursive(arr, callback) {
  if(!arr.length) return false;
  if(callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}
