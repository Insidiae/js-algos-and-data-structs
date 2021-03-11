function minSubArrayLen(arr, sum){
  //  Create two pointers for the sliding window
  let p1 = 0;
  let p2 = 1;
  //  Initialize a variable for the current sum
  let currentSum = arr[0];
  // Initialize a variable for the subarray length
  let minLen = Infinity;
  //  Loop over the array using the sliding window approach
  while(p2 <= arr.length) {
    //  If current sum is less than target sum, expand the window
    if(currentSum < sum) {
      //! Add the value at the end pointer only if it exists
      currentSum += arr[p2] || 0;
      p2++;
    } else {
      //  If current sum is greater than the target sum:
      //  Update the minimum subarray length variable...
      minLen = Math.min(minLen, p2 - p1);
      //  ...and shrink the window
      currentSum -= arr[p1];
      p1++;
    }
  }
  //  If window length is greater than the array length, return 0
  //  otherwise, return the window length
  return minLen === Infinity ? 0 : minLen;
}
