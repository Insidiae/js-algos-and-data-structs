function insertionSort(arr) {
  //  Loop over the array starting at 2nd element
  for(let i = 1; i < arr.length; i++) {
    console.log(`Pass #${i}`);
    //  Store the current element in temp variable
    let temp = arr[i];
    //  Start an inner loop starting at current element, working backwards
    //  until a sorted position for the element is opened up
    for(var j = i; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
      console.log(arr);
    }
    //  Place the current element back into its sorted place
    arr[j] = temp;
    //  Display the current status of the array:
    console.log(`Inserting ${temp} into its sorted position:`);
    console.log(arr);
  }
  //  Return the sorted array
  console.log("Sorted array is:");
  return arr;
}
