function naiveSearch(str, pattern) {
  //  Initialize variable for number of matches
  let matches = 0;
  //  Loop over the input string
  //! The outer loop only needs to go until the last n characters,
  //! where n = the pattern string length
  for(let i = 0; i < (str.length - pattern.length + 1); i++) {
    //  Loop over the pattern
    let hasMatch = true;
    for(let j = 0; j < pattern.length; j++) {
      //  If the characters don't match, break out of inner loop
      if(str[i+j] !== pattern[j]) {
        hasMatch = false;
        break;
      }
    }
    //  If inner loop completes all the way,
    //  increment match count variable
    if(hasMatch) matches++;
  }
  //  Return match count variable
  return matches;
}
