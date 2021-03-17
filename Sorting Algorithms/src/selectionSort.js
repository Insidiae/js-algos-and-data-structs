function selectionSort(arr) {
  //  Loop over the array
  for(let i = 0; i < arr.length - 1; i++) {
    console.log(`Pass #${i+1}`)
    //  Initialize a value to store the index of the smallest element
    let minIdx = i;
    //  Create an inner loop to select the next smallest element
    for(let j = i + 1; j < arr.length; j++) {
      //  Display the comparisons we're doing in this inner loop
      console.log(`Comparing ${arr[minIdx]} vs ${arr[j]}: ${arr[j] < arr[minIdx] ? arr[j] : arr[minIdx]} is the minimum value.`);
      //  If current element is smaller than the smallest element,
      //  save its index
      if(arr[j] < arr[minIdx]) minIdx = j;
    }
    //  Place the smallest element into its proper spot
    if(minIdx !== i) {
      console.log(`Swapping ${arr[i]} with ${arr[minIdx]}...`);
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
    // Display the current status of the array
    console.log(arr);
  }
  //  Return the sorted array
  console.log("Sorted array is:");
  return arr;
}
