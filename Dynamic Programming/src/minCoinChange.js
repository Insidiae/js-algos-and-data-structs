function minCoinChange(denominations, value) {
  //  If the current value is 0:
  if (value === 0) {
    //  return an empty array, to be populated
    //  by recursive callers
    return [];
  }

  //  If the current value is less than 0:
  if (value < 0) {
    //  return null, since we have an invalid combination
    return null;
  }

  //  Otherwise:
  //  Initialize an array to store the shortest combination
  let shortestCombination = null;

  //  Loop over the denominations array
  for (let i = denominations.length - 1; i > -1; i--) {
    const coinValue = denominations[i];
    //  Subtract the coin value from the total value
    const remainder = value - coinValue;
    //  Try to get some combination of coins by making
    //  a recursive call with the remainder value
    const combination = minCoinChange(denominations, remainder);

    //  If we have a valid combination:
    if (combination) {
      //  Append the current coin value to the combination
      combination.push(coinValue);
      //  If we do not have a shortest combination:
      if (!shortestCombination) {
        //  Update the shortest combination
        shortestCombination = combination;
        break;
      }
    }
  }

  //  Return the shortest combination
  //? Make sure to output the array in reverse
  //? to account for the recursive calls
  return shortestCombination.reverse();
}

function minCoinChangeOptimal(denominations, value, cache = {}) {
  //  If the cache already contains a result for the current value:
  if (value in cache) {
    //  Simply return the cached value
    return cache[value];
  }
  //  If the current value is 0:
  if (value === 0) {
    //  return an empty array, to be populated
    //  by recursive callers
    return [];
  }

  //  If the current value is less than 0:
  if (value < 0) {
    //  return null, since we have an invalid combination
    return null;
  }

  //  Otherwise:
  //  Initialize an array to store the shortest combination
  let shortestCombination = null;

  //  Loop over the denominations array
  for (let coinValue of denominations) {
    //  Subtract the coin value from the total value
    const remainder = value - coinValue;
    //  Try to get some combination of coins by making
    //  a recursive call with the remainder value
    const combination = minCoinChange(denominations, remainder, cache);

    //  If we have a valid combination:
    if (combination) {
      //  Append the current coin value to the combination
      combination.push(coinValue);
      //  If the current combination is shorter than the
      //  previous shortest combination, or if we do not
      //  have a shortest combination:
      if (
        !shortestCombination ||
        combination.length < shortestCombination.length
      )
        //  Update the shortest combination
        shortestCombination = combination;
    }
  }

  //  Store the shortest combination in the cache
  cache[value] = shortestCombination;
  //  Return the cached value
  return shortestCombination;
}

function minCoinChangeTabulated(denominations, value) {
  //  Initialize a tabulation array
  const table = Array(value + 1).fill(null);

  //  Set the first index to an empty array
  //? There's only one way to get a value of 0 - using 0 coins
  table[0] = [];

  //  Loop over the tabulation array
  for (let i = 0; i <= value; i++) {
    //  If the table contains a value at the current index:
    //! A null value in the current index means that the
    //! current value cannot be reached using the coin denominations
    if (table[i]) {
      //  Loop over the coin denominations
      for (let coinValue of denominations) {
        //  Set the current combination to be the value
        //  at the curent index, appended by the
        //  current coin value
        let combination = [...table[i], coinValue];
        //  Add the current coin value to the table index,
        //  Check the value at the resulting table index,
        //  And compare the value with the current combination
        //  If the current combination is shorter than
        //  the value at the resulting table index,
        //  or if there is no value at the resulting table index:
        if (
          !table[i + coinValue] ||
          combination.length < table[i + coinValue].length
        ) {
          //  Replace the value at the resulting table index
          //  with the current combination
          table[i + coinValue] = combination;
        }
      }
    }
  }

  //  Return the final result from the tabulation array
  //? Make sure to reverse the result to sort the coins
  //? in descending order
  return table[value].reverse();
}
