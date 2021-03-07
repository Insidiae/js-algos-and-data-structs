function maxSubarraySum(arr, subLen){
  //  If subarray length is greater than input array length, return null
  if(subLen > arr.length) return null;
  // Initialize variable for max sum
  let maxSum = 0;
  //  Add first items of the input array according to the subarray size
  for(let i = 0; i < subLen; i++) maxSum += arr[i];
  //  Initialize variable for current sum
  let currentSum = maxSum;
  //  Loop through the rest of the input array
  for(let i = subLen; i < arr.length; i++) {
    //  Update current sum
    currentSum = currentSum - arr[i - subLen] + arr[i];
    //  If current sum is greater than max sum, update max sum
    if(currentSum > maxSum) maxSum = currentSum;
  }
  //  Return max sum
  return maxSum;
}