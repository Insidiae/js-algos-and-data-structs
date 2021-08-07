function heapify(arr, size, current = 0) {
  //  Get children of current node
  const child1 = 2 * current + 1;
  const child2 = 2 * current + 2;

  //  Display the nodes we're looking at
  console.log(
    `Current node: ${arr[current]},`,
    `Children: ${child1 < size ? arr[child1] : "None"}${
      child2 < size ? `, ${arr[child2]}` : ""
    }`
  );

  //  Create a variable to keep track of largest node
  let largest = current;

  //  If current largest node is less than the left node:
  if (child1 < size && arr[child1] > arr[largest]) {
    //  Set new largest node to be the left node
    largest = child1;
  }

  //  If current largest node is less than the right node:
  if (child2 < size && arr[child2] > arr[largest]) {
    //  Set new largest node to be the right node
    largest = child2;
  }

  //  If current node is not the largest node:
  if (current !== largest) {
    //  Swap current and largest nodes
    console.log(`Swapping ${arr[current]} with ${arr[largest]}...`);
    [arr[current], arr[largest]] = [arr[largest], arr[current]];
    //  Heapify the affected sub-heap
    heapify(arr, size, largest);
  }
}

function heapSort(arr) {
  //* Heapify input array
  //  Keep track of the number of iterations
  let pass = 1;
  console.log(`Pass #${pass}`);
  //  Heapify sub-heaps, starting from last non-leaf node
  //? Last non-leaf node is Math.floor(arr.length/2) - 1
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  //  Display the initial heap
  console.log("Initial heap:", arr);

  //* Now that we have our first max heap...
  //  Loop over the heap, starting from the end:
  for (let i = arr.length - 1; i > 0; i--) {
    //  Indicate a new pass
    pass++;
    console.log(`Pass #${pass}`);

    //  Move the largest (root node) to the end of the heap
    console.log(`Moving ${arr[0]} to end of the heap...`);
    [arr[0], arr[i]] = [arr[i], arr[0]];
    //  Heapify the reduced heap
    heapify(arr, i);

    //  Display the status of the array as we
    //  iterate over the heaps
    console.log("Current array:", arr);
    console.log(`Sorted array starts at ${arr[i]}`);
  }

  //  Return sorted array
  console.log("Sorted array is:");
  return arr;
}
