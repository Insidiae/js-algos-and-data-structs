function findPair(nums, difference) {
  //  Initialize frequency counter
  const freqCounter = {};
  //  Loop over the array
  for (let num of nums) {
    //  If current number is in counter, return true
    if (freqCounter[num]) {
      return true;
    }
    //  Otherwise, store its complements in the freq counter
    freqCounter[difference + num] = true;
    freqCounter[num - difference] = true;
  }
  //  Return false if no matches were found
  return false;
}
