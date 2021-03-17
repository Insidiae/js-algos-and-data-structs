# Count Divisible Numbers

***Inspired by [Aiyuuu Tutorial's Facebook post](https://www.facebook.com/aiyuuututorial310/posts/130908332287763)***

Write a function called `countDivisibleNumbers` that finds the number of integers within the range of two specified numbers and that are divisible by another number.

Example:
* Given the inputs *x* = 5, *y* = 20 and *p* = 3, find the number of integers within the range *x..y* and that are divisible by *p*.

  `countDivisibleNumbers(5,20,3) // should return 5, since [6,9,12,15,18] are all divisible by 3`

---

### Solution 1
```js
function countDivisibleNumbers(x, y, p) {
  //  Get the smallest number greater than x,
  //  that is also divisible by p
  const pStart = p * (Math.ceil(x / p) - 1) + p;
  //  Initialize a number for counting the multiples of p
  let count = 0;
  //  Loop numbers using multiples of p,
  //  starting from the number we calculated,
  //  until we get past y
  for(let i = pStart; i <= y; i += p) {
    // Increment the count
    count++;
  }
  //  Return the count
  return count;
}
```
> **Time Complexity:** O(n)

### Solution 2
```js
function countDivisibleNumbers(x, y, p) {
  //  Get the smallest number greater than x,
  //  that is also divisible by p
  const pStart = Math.ceil(x / p);
  //  Get the largest number less than y,
  //  that is also divisible by p
  const pEnd = Math.floor(y / p);
  //  Subtract the end and start values to get
  //  the number of integers divisible by p within the range
  return pEnd - pStart + 1;
}
```

### 🔥 Hotshot one-liner
```js
const countDivisibleNumbers = (x, y, p) => Math.floor(y / p) - Math.ceil(x / p) + 1;
```
> **Time Complexity:** O(1)
