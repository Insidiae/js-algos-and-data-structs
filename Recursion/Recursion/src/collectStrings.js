function collectStrings(obj) {
  //  Initialize variable for array of strings
  const stringList = [];
  //  Create a helper function for finding strings in the input object
  function findStrings(o) {
    //  Loop over the input object
    for(let key in o) {
      //  If current item is an object, make a recursive call
      if(isObject(o[key])) findStrings(o[key]);
      //  If current item is a string, push it to the array
      if(typeof o[key] === "string") stringList.push(o[key]);
    }
  }
  //  Call the helper function
  findStrings(obj);
  //  Return the array of strings
  return stringList;
}
