function constructNote(message, letters) {
  //  Initialize a frequency counter for the letters
  const freqCounter = {};
  //  Count the frequency of the given letters
  for (let letter of letters) {
    freqCounter[letter] = (freqCounter[letter] || 0) + 1;
  }
  //  Subtract the message letters from the frequency counter
  for (let letter of message) {
    freqCounter[letter] = (freqCounter[letter] || 0) - 1;
  }
  //  Check whether the frequency counter values contain
  //  all positive numbers, and return the result
  return Object.values(freqCounter).every((count) => count >= 0);
}
