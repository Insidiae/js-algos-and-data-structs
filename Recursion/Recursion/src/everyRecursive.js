function everyRecursive(arr, callback) {
  if(!arr.length) return true;
  if(!callback(arr[0])) return false;
  return everyRecursive(arr.slice(1), callback);
}
