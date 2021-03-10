function binarySearch(arr, item) {
  //  Create two pointers at the start and end of the array
  let p1 = 0;
  let p2 = arr.length - 1;
  //  Loop while start pointer is less than end pointer
  while(p1 <= p2) {
    //  Check the element at the middle of the two pointers
    let mid = Math.floor((p1 + p2) / 2);
    //  If it is the same as the item we want, return the index
    if(arr[mid] === item) return mid;
    //  If element is smaller than the item we want, move start pointer up
    else if(arr[mid] < item) p1 = mid + 1;
    //  If element is larger than the item we want, move end pointer down
    else p2 = mid - 1;
  }
  //  If the item we want is not found in the input array, return -1
  return -1;
}
