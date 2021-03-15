function kmpSearch(str, pattern) {
  //* Preprocess pattern string
  //  Initialize variable for LPS array
  //! LPS = Longest proper Prefix which is Suffix
  const lps = [];
  //  Create a helper function for preprocessing pattern string
  function findPrefix(p) {
    //  Initialize two pointers to find prefixes within pattern string
    let tgt = 1;
    let pfx = 0;
    //  Loop over pattern string
    lps[0] = 0; //! First item in LPS is always 0
    for(tgt; tgt < p.length; tgt++) {
      //  If the characters match:
      if(p[tgt] === p[pfx]) {
        //  Increment prefix pointer and store in LPS array
        pfx++;
        lps[tgt] = pfx;
      }
      //  If the characters do not match:
      else {
      //  If prefix pointer is not at start:
        if(pfx) {
          //  Move target pointer back, and try matching again
          //  with the previous character according to the LPS array
          tgt--;
          pfx = lps[pfx - 1];
        }
        //  If prefix pointer is at start, store 0 in LPS array
        else lps[tgt] = 0;
      }
    }
  }
  //  Call helper function to preprocess pattern string
  findPrefix(pattern);

  //* Search for patterns using the LPS array
  //  Initialize variable for number of matches
  let matches = 0;
  //  Initialize pointer for looping over pattern string
  let j = 0;
  //  Loop over input string
  for(let i = 0; i < str.length; i++) {
    //  If the characters match:
    if(str[i] === pattern[j]) {
      //  Increment both pointers
      j++;
      //  If we have looped over the pattern string:
      if(j === pattern.length) {
        //  Increment match count variable
        matches++;
        //  and move back pattern pointer according to LPS
        j = lps[j - 1];
      }
    }
    //  If the characters do not match:
    else {
      //  If pattern pointer is not at start:
      if(j) {
        //  Move back input pointer, and try matching again
        //  with the previous character according to the LPS array
        j = lps[j - 1];
        i--;
      }
    }
  }
  //  Return match count variable
  return matches;
}
