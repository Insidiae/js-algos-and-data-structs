function coinChange(denominations, value) {
  //  Create an array that tracks the number of ways
  //  to obtain the value from the given denominations
  //? Essentially, we are tabulating the number of ways to
  //? obtain a value from 0 to the current value
  //? The size should be value + 1 because we need to have
  //? the value itself as the last index in the array
  const ways = Array(value + 1).fill(0);

  //  Set the first index to 1
  //? There's only one way to get a value of 0 - using 0 coins
  ways[0] = 1;

  //  Loop over the denominations array
  for (let coinValue of denominations) {
    //  Loop over the tabulation array
    for (let currentTotal = 0; currentTotal < ways.length; currentTotal++) {
      //  If the current coin value is less than
      //  or equal to the current total value:
      if (coinValue <= currentTotal) {
        //  Get the difference between the total value and the coin value,
        //  Get the number of ways to get that resulting value
        //  using the same denominations,
        //  and add it to the current number of ways
        ways[currentTotal] += ways[currentTotal - coinValue];
      }
    }
  }

  //  Return the final result from the tabulation array
  return ways[value];
}
