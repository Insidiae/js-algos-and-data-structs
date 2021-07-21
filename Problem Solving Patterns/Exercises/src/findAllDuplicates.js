function findAllDuplicates(arr) {
  //  Initialize frequency counter
  const freqCounter = {};
  //  Count frequency of array elements
  arr.forEach((n) => (freqCounter[n] = (freqCounter[n] || 0) + 1));
  //  Filter frequency counter for elements that
  //  appear twice, then return array of keys
  //! The keys will have a type of string,
  //! so we need to turn them back into numbers
  return Object.keys(freqCounter)
    .filter((key) => freqCounter[key] === 2)
    .map(Number);
}
