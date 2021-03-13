function stringifyNumbers(obj) {
  //  Initialize variable for new object
  const newObj = {};
  //  Loop over the object
  for(let key in obj) {
    //  If item is an object, make a recursive call
    if(isObject(obj[key])) newObj[key] = stringifyNumbers(obj[key]);
    //  If item is a number, turn it into a string
    else if(typeof obj[key] === "number") newObj[key] = obj[key].toString();
    //  Otherwise, simply store the current item into the new object
    else newObj[key] = obj[key];
  }
  //  Return the new object
  return newObj;
}
