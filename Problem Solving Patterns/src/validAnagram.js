function validAnagram(str1, str2) {
  // If the two strings do not have the same length, they're definitely not anagrams.
  if (str1.length !== str2.length) {
      return false;
  }

  // Initialize the Frequency Counter objects
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Use the frequency Counter objects to count the frequency of the letters for the two strings
  for(const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(const val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Check if the two Frequency Counter objects are the same
  for (const key in frequencyCounter1) {
    // If a key in one Frequency Counter object does not exist in the other, then the two strings are not anagrams.
    if(!(key in frequencyCounter2)) {
      return false;
    }
    // If the two Frequency Counter objects do not display the same frequency on one key, then the two strings are not anagrams.
    if(frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  // If the two Frequency Counter objects are the exact same, then the two strings are anagrams!
  return true;
}
