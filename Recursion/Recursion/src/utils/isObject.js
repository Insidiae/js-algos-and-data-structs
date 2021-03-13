//* Function that checks if a variable is an object
//! Technically we can just check for objects using typeof,
//! but typeof obj can also return "object" for things like array, null, etc.
function isObject(obj) {
  return (!!obj) && (obj.constructor === Object);
}
