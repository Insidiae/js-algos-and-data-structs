function areThereDuplicates(...args) {
  // Initialize frequency counter object
  const counter = {};
  // Loop through the args passed into the function
  for(const item of args) {
    // If the current item matches up on the counter, return true
    if(counter[item]) return true;
    // otherwise store the current item in the counter object
    counter[item] = 1;
  }
  // Return false if nothing matches up in the whole array
  return false;
}
