function sortedFrequency(arr, num) {
  //  Find the first and last occurrences
  //  of the item we're looking for
  const first = findFirst(arr, num);
  //! If the number isn't found in the array, return -1
  if (first === -1) return -1;
  const last = findLast(arr, num);

  //  Return the difference between the last and first indices
  return last - first + 1;
}
