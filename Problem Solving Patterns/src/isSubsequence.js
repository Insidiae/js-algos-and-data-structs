function isSubsequence(str1, str2) {
  //  Create a pointer for the first string
  let p1 = 0;
  //  Loop through the 2nd string
  for(let char of str2) {
    //  If current char at 2nd string matches current char at 1st string,
    //  increment 1st pointer
    if(char === str1[p1]) p1++;
    //  If 1st pointer has now looped through the 1st string, return true
    if(p1 === str1.length) return true;
  }
  //  If 2nd string has now finished looping without matching everything
  //  in the first string, return false
  return false;
}