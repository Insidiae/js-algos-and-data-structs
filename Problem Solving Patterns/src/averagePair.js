function averagePair(arr, avg){
  //  Create two pointers at the start/end of the array
  let p1 = 0;
  let p2 = arr.length - 1;
  //  Loop through the array using these pointers
  while(p1 < p2) {
    //  Take the average value of the two items referenced by the pointers
    const cur = (arr[p1] + arr[p2]) / 2;
    //* We are given a sorted array as input,
    //* so finding the target pair becomes much simpler
    //  If current average is same as targer average, we have found the target pair!
    if(cur === avg) return true;
    //  If current average is less than target average, move start pointer forward
    if(cur < avg) p1++;
    //  If current average is more than target average, move end pointer backward
    if(cur > avg) p2--;
  }
  //  If no target pair is found, return false
  return false;
}