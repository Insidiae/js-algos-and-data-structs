function nestedEvenSum(obj) {
  //  Initialize variable for the sum
  let sum = 0;
  //  Loop over the input object
  for(let key in obj) {
    //  If current item is an object, make a recursve call
    if(isObject(obj[key])) sum += nestedEvenSum(obj[key]);
    //  If current item is an even number, add it to the sum
    if(typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
  }
  //  Return the sum
  return sum;
}
