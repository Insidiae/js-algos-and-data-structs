function bubbleSort(arr) {
  //  Loop over input array from end to start
  for(let i = arr.length - 1; i > 0; i--) {
    console.log(`Pass #${arr.length - i}`)
    //  Initialize a variable to check whether any swaps
    //  have been made in the current pass
    let swapped = false;
    //  Start another loop from start to 2nd last element
    for(let j = 0; j < i; j++) {
      //  If current element is greater than next element, swap them!
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
      //  Show the current status of the array after each pass
      console.log(arr);
    }
    //  Break out of outer loop if no swaps have been made
    if(!swapped){
      console.log("Array already sorted. Exiting...")
      break;
    }
  }
  //  Return the sorted array
  console.log("Sorted array is:");
  return arr;
}
