function sameFrequency(num1, num2){
  // Convert input numbers to strings
  const [str1, str2] = [num1.toString(), num2.toString()];
  // Initialize two frequency counters for the inputs
  const counter1 = {};
  const counter2 = {};
  // Count the frequency of each digit in the inputs
  for(const val of str1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for(const val of str2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  // Compare the two frequency counters
  for(const key in counter1) {
    // Return false if a key in one of the counters
    // does not exist in the other,
    if(!(key in counter2)) return false;
    // Return false if there is a same key in both counters
    // but have different values
    if(counter1[key] !== counter2[key]) return false;
  }
  // Return true if everything matches up
  return true;
}
