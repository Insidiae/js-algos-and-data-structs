//* Helper function that merges two sorted arrays
function merge(arr1, arr2) {
  //  Initialize a new empty array
  const newArr = [];
  //  Initialize two pointers, one for each input array
  let i = 0;
  let j = 0;
  //  Loop while both of the arrays are not empty
  while(i < arr1.length && j < arr2.length) {
    //  Compare the current values on both arrays,
    //  then add the smaller one to the new array
    if(arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  //  Once we finish looping through either one of the arrays,
  //  add the remaining elements of the other array to the new array
  while(i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  //  Return merged array
  return newArr;
}

//* Main Logic for Merge Sort
function mergeSort(arr) {
  //  Count the number of iterations we've made so far,
  //  and display it later
  let pass = 1;

  function mergeSortLogic(arr) {
    //  If there's 1 element or less in the input array,
    //  simply return the input array
    if(arr.length <= 1) return arr;
    //  Otherwise:
    //  Split the input array in half...
    console.log(`Pass #${pass}`);
    let oldPass = pass;
    ++pass;
    const mid = Math.floor(arr.length / 2);
    console.log("Splitting array into",arr.slice(0, mid),"and",arr.slice(mid),"...");
    //  ...and call mergeSort on both halves
    const left = mergeSortLogic(arr.slice(0, mid));
    const right = mergeSortLogic(arr.slice(mid));
    //  Merge both halves of the input array,
    //  and return the merged array which is now also sorted
    console.log(`From pass #${oldPass}: Merging`, left, "and", right, "...");
    return merge(left, right);
  }

  return mergeSortLogic(arr);
}
