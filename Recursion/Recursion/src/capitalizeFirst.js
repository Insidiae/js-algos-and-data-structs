function capitalizeFirst(arr) {
  let newStr = arr[0][0].toUpperCase() + arr[0].slice(1);
  if(arr.length === 1) return [newStr];
  return [newStr, ...capitalizeFirst(arr.slice(1))];
}
