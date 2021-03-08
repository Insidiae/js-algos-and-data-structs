function productOfArray(arr) {
  if(!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}