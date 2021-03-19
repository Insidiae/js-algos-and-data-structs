# Longest Common Prefix

You are given an array of lowercase strings as an argument. Return the longest common prefix of all strings.

**Requirements**
* Must return a string
* Must be able to compare more than two strings

Examples:
* `solve(["antiquated", "antilope"])`
  > "anti"
* `solve(["california", "calibrated"])`
  > "cali"
* `solve(["test","testing","tester"])`
  > "test"


---

### Solution
```js
function solve(strArray) {
  //  Initialize pointer to look over the strings
  let ctr = 0;
  //  Get the shortest string in the input array
  const shortest = strArray.reduce((acc, nxt) => acc.length < nxt.length ? acc : nxt);
  //  Loop over the input strings...
  for(ctr; ctr < shortest.length; ctr++) {
    // ...and compare the current character where the pointer is at
    let currentChar = strArray[0][ctr];
    // If the characters do not match, break out of the loop
    if(!strArray.every(str => str[ctr] === currentChar)) break;
  }
  //  Return the longest common prefix string
  return strArray[0].slice(0,ctr);
}
```