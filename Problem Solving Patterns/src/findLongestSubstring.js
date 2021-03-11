function findLongestSubstring(str){
  //  Create two pointers for the sliding window
  let p1 = 0;
  let p2 = 0;
  //  Create a frequency counter to tally up the letters we've seen
  const freqCounter = {};
  //  Initialize a variable for the longest substring length
  let maxLen = 0;
  //  Loop over the string using the sliding window approach
  for(p2; p2 < str.length; p2++) {
    //  If we haven't "seen" the current character,
    //  i.e. the current character is not within our window:
    if(!(str[p2] in freqCounter) || freqCounter[str[p2]] < p1) {
      //  Update the longest substring length
      maxLen = Math.max(maxLen, p2 - p1 + 1);
    } else {
      //  If we've already "seen" the curent character,
      //  i.e. if it comes after the start pointer:
      if(freqCounter[str[p2]] >= p1) {
        //  move the start pointer one character after its location
        p1 = freqCounter[str[p2]] + 1;
      }
    }
    //  Store the current char's position in the freq counter
    freqCounter[str[p2]] = p2;
  }
  //  Return the longest substring length
  return maxLen;
}
