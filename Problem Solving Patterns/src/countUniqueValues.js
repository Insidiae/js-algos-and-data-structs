function countUniqueValues(arr){
  // Immediately return 0 if array is empty
  if(!arr.length) return 0;
  // Initialize counter variable
  let count = 1;
  // Set two pointers next to each other at the start of the input array
  let i = 0;
  let j;
  // Loop through the array using the 2nd pointer
  for(let j = 1, len = arr.length; j < len; j++) {
  // If the elements on both pointer do not match
  // move 1st pointer to where the 2nd pointer is,
  // and increment the counter variable.
    if(arr[i] !== arr[j]) {
        i = j;
        count++;
    }
  }
  // Simply return the value of the counter variable
  return count;
}
