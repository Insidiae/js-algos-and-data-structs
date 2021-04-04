# Solving Leetcode Problems with JavaScript One-Liners

## Introduction

*Inspired by the freeCodeCamp article ["How to Solve Leetcode Problems With Python One-Liners"](https://www.freecodecamp.org/news/solve-leetcode-problems-using-python-list-comprehension/) by [Ganesh Kumar M](https://twitter.com/ganeshkumarm_1).*

The article referenced above solves some Leetcode array problems using Python's List Comprehension feature. In this exercise we aim to solve the same Leetcode problems using JavaScript, while still keeping the solutions in one line of code.

### What is List Comprehension?
Python has a feature called List Comprehension, where a new list can be created based on another existing list.

Consider the following Python code:
```py
def addOneAndTwo(nums, n):
  for i in range(n):
    if i % 2 == 1:
      nums[i] += 1
    else:
      nums[i] += 2
  return nums
```

The above Python code snippet adds 1 to the numbers at the odd indices of the list and to adds 2 to the number at even indices. Using List Comprehension, the above code can be simplified into one line:
```py
def addOneAndTwo(nums, n):
  return [nums[i] + 1 if i % 2 == 1 else nums[i] + 2 for i in range(n)]
```

### Does JavaScript have List Comprehension?
Sadly, [not anymore](https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/Array_comprehensions) :^(

JavaScript originally proposed Array Comprehensions in an older ECMAScript2015 draft, but later got removed in revision 27 (August 2014). Consequently, browsers such as Firefox have [removed support for JavaScript Array Comprehensions](https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/Array_comprehensions).
> The array comprehensions syntax is non-standard and removed starting with Firefox 58. For future-facing usages, consider using Array.prototype.map, Array.prototype.filter, arrow functions, and spread syntax.

### Well that's too bad. What do we do now?
Fortunately, we can still use other features of JavaScript to achieve the same result. The MDN docs quoted above helpfully mentions various array methods and modern ES6 syntax such as arrow functions and the spread operator.

For example, we can use the `map()` array method to solve the example problem above, and still have a one-limer solution:
```js
const addOneAndTwo = nums => nums.map((num, idx) => idx % 2 === 1 ? num + 1 : num + 2);
```

Looks good. Now let's try to solve the same Leetcode problems with one line of code!

## 1. [Shuffle The Array](https://leetcode.com/problems/shuffle-the-array/)

Given the array nums consisting of `2n` elements in the form `[x1,x2,...,xn,y1,y2,...,yn]`, *return the array in the form `[x1,y1,x2,y2,...,xn,yn]`*.

### Examples:
* ```js
  shuffle([2,5,1,3,4,7], 3) // should return [2,3,5,4,1,7]
  // Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
  ```
* `shuffle([1,2,3,4,4,3,2,1], 4) // shoule return [1,4,2,3,3,2,4,1]`
* `shuffle([1,1,2,2], 2) // should return [1,2,1,2]`

### Constraints:
* `1 <= n <= 500`
* `nums.length == 2n`
* `1 <= nums[i] <= 10^3`

### Solution
```js
function shuffle(nums, n) {
  const newNums = [];
  for(let i = 0; i < n; i++) {
    newNums.push(nums[i], nums[n+i]);
  }
  return newNums;
}
```

### 🔥 Hotshot One-Liner
```js
const shuffle = (nums, n, i = 0) => i < n ? [nums[i], nums[n+i], ...shuffle(nums,n,++i)] : []
```

## 2. [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

You are given an array of integers `nums`.

A pair `(i,j)` is called *good* if `nums[i]` == `nums[j]` and `i` < `j`.

Return the number of *good* pairs.

### Examples:
* ```js
  numIdenticalPairs([1,2,3,1,1,3]) // should return 4
  // There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
  ```
* ```js
  numIdenticalPairs([1,1,1,1]) // should return 6
  // Each pair in the array are good.
  ```
* `numIdenticalPairs([1,2,3]) // should return 0`

### Constraints:
* `1 <= nums.length <= 100`
* `1 <= nums[i] <= 100`

### Solution
```js
function numIdenticalPairs(nums) {
  let ctr = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) ctr++;
    }
  }
  return ctr;
}
```

### 🔥 Hotshot One-Liner
```js
const numIdenticalPairs = (nums) => nums.reduce((acc,nxt,idx) => acc + nums.slice(idx+1).filter(n => n === nxt).length,0)
```

## 3. [Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)
Given the array `candies` and the integer `extraCandies`, where `candies[i]` represents the number of candies that the ***ith*** kid has.

For each kid check if there is a way to distribute `extraCandies` among the kids such that he or she can have the **greatest** number of candies among them. Notice that multiple kids can have the **greatest** number of candies.

### Examples:
* ```js
  kidsWithCandies([2,3,5,1,3], 3)
  /*
    Output: [true,true,true,false,true]
    Explanation:
    Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
    Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
    Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
    Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
    Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
  */
  ```
* `kidsWithCandies([4,2,1,1,2], 1) // should return [true,false,false,false,false]`
* `kidsWithCandies([12,1,12], 10) // should return [true,false,true]`

### Constraints
* `2 <= candies.length <= 100`
* `1 <= candies[i] <= 100`
* `1 <= extraCandies <= 50`

### Solution
```js
function kidsWithCandies(candies, extraCandies) {
  const greatestCandies = candies.reduce((acc,nxt) => acc < nxt ? nxt : acc);
  return candies.map(candy => candy + extraCandies >= greatestCandies);
}
```

### 🔥 Hotshot One-Liner
```js
const kidsWithCandies = (candies, extraCandies) => candies.map(candy => candy + extraCandies >= candies.reduce((max,nxt) => max < nxt ? nxt : max));
```

## 4. [Decompress Run-Length Encoded List](https://leetcode.com/problems/decompress-run-length-encoded-list/)
We are given a list `nums` of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements `[freq, val] = [nums[2*i], nums[2*i+1]]` (with `i >= 0`). For each such pair, there are `freq` elements with value `val` concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.

### Examples
* ```js
  decompressRLElist([1,2,3,4]) // should return [2,4,4,4]
  /*
    The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
    The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
    At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
  */
  ```
* `decompressRLElist([1,1,2,3]) // should return [1,3,3]`

### Constraints
* `2 <= nums.length <= 100`
* `nums.length % 2 == 0`
* `1 <= nums[i] <= 100`

### Solution
```js
function decompressRLElist(nums) {
  const decompressed = [];
  for(let i = 0; i < nums.length; i += 2) {
    decompressed.push(...Array(nums[i]).fill(nums[i+1]))
  }
  return decompressed;
}
```

### 🔥 Hotshot One-Liner
```js
const decompressRLElist = nums => nums.reduce((decompressed, num, idx) => idx % 2 === 0 ? decompressed.concat(Array(num).fill(nums[idx + 1])) : decompressed,[]);
```

## 5. [Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/)
You are given an `m x n` integer grid `accounts` where `accounts[i][j]` is the amount of money the `i`<sup>`th`</sup> customer has in the `j`<sup>`th`</sup> bank. Return the ***wealth** that the richest customer has*.

A customer's **wealth** is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum **wealth**.

### Examples
* ```js
  maximumWealth([[1,2,3],[3,2,1]]) // should return 6
  /*
    1st customer has wealth = 1 + 2 + 3 = 6
    2nd customer has wealth = 3 + 2 + 1 = 6
    Both customers are considered the richest with a wealth of 6 each, so return 6.
  */
  ```
* ```js
  maximumWealth([[1,5],[7,3],[3,5]]) // should return 10
  /*
    1st customer has wealth = 6
    2nd customer has wealth = 10
    3rd customer has wealth = 8
    The 2nd customer is the richest with a wealth of 10.
  */
  ```
* `maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) // should return 17`

### Constraints
* `m == accounts.length`
* `n == accounts[i].length`
* `1 <= m, n <= 50`
* `1 <= accounts[i][j] <= 100`

### Solution
```js
function maximumWealth(accounts) {
  let richestWealth = 0;
  for(let account of accounts) {
    const accountWealth = account.reduce((totalWealth, bankWealth) => totalWealth + bankWealth)
    if(accountWealth > richestWealth) richestWealth = accountWealth;
  }
  return richestWealth;
}
```

### 🔥 Hotshot One-Liner
```js
const maximumWealth = accounts => accounts.reduce((richestWealth, account) => richestWealth >= account.reduce((totalWealth, bankWealth) => totalWealth + bankWealth) ? richestWealth : account.reduce((totalWealth, bankWealth) => totalWealth + bankWealth), 0);
```

Hmmm... we *do* have a one-liner solution, but it's gotten kinda hard to read. Let's add a few lines just to give more space to the code and make it more readable!

### 🔥🔥🔥 Best of Both Worlds
```js
const maximumWealth = accounts => (
  accounts.reduce((richestWealth, account) => {
    const accountWealth = account.reduce((totalWealth, bankWealth) => totalWealth + bankWealth)
    return accountWealth > richestWealth ? accountWealth : richestWealth;
  }, 0)
);
```

## Conclusion
I love me some one-liner solutions, so I can't help but try solving the same Leetcode problems on the freeCodeCamp article and use ES6 to keep my solutions in one line! Researching how to implement List Comprehensions in Javascript led me to a bit of a rabbit hole finding out how the feature was originally supposed to be implemented in JavaScript, as well as the rationale as to why it was later removed. Thankfully, we still have our trusty ES6 syntax and array methods at our disposal, and with just a little bit of cleverness we can still make simple yet effective one-liner solutions!
