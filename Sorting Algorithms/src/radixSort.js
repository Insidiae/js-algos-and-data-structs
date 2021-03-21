//* Helper function that gets a digit from a given number,
//* in the given digit position (starting from 0)
//! Assume we're working with base 10 (decimal) for now
function getDigit(num, place) {
  //  Keep dividing by 10 (base) until we reach our desired digit,
  //  then use modulo operator to get only the digit that we want
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//* Helper function that gets the number of digits
//* in a given number
//! Again, assume we're working with base 10 for now.
function digitCount(num) {
  //* Log base 10 (Math.log10) helps us get the number we want!
  //! However, we need to add a special case for when
  //! the input number is 0, because log(0) is undefined.
  if(num === 0) return 1;
  //  Otherwise, just floor the log10 output and add 1 to get
  //  the number of digits for a base 10 number!
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//* Helper function that gets the hignest number of digits
//* in a given array of numbers
function mostDigits(arr) {
  //  Simply use a reducer to loop over the input array,
  //  and get the largest number of digits!
  return arr.reduce((acc,nxt) => acc > digitCount(nxt) ? acc : digitCount(nxt), 0);
}

//* Helper function for getting the ordinal number suffix
function getOrdinalSuffix(num) {
  //  Initialize ordinal rules from the Intl.PluralRules library
  const rules = new Intl.PluralRules("en", {type: "ordinal"});
  const suffixList = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th"
  };
  //  Use the Intl rules to get the ordinal suffix
  return num + suffixList[rules.select(num)];
}

//* Main logic for Radix Sort
function radixSort(arr) {
  //  Get the largest number of digits in the array
  const radix = mostDigits(arr);
  //  Start a loop according to the largest number of digits
  for(let n = 0; n < radix; n++) {
    console.log(`Pass #${n + 1}`);
    //  Create a bucket for each digit (0 to 9)
    const buckets = Array.from({length: 10}, () => []);
    //  Loop over the input array
    for(let i = 0; i < arr.length; i++) {
      //  For each number, get the current digit to look at
      let currentDigit = getDigit(arr[i], n);
      //  Place the current number into the bucket according to
      //  its current digit that we're currently looking at
      buckets[currentDigit].push(arr[i]);
    }
    //  Display the buckets from the current iteration
    console.log(`Buckets for ${getOrdinalSuffix(n + 1)} digit:`);
    console.log(buckets);
    //  Spread the bucket contents into a new array
    arr = [].concat(...buckets);
    console.log("Arranging buckets into new array...");
    console.log(arr);
  }
  //  Return sorted array
  console.log("Sorted array is:")
  return arr;
}
