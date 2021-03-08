# Recursion Practice

## Sum

Writa a recursive function `sum` that, given an input *n*, sums all nonnegative integers up to *n*.

Examples:
* `sum(5) // 15`

### Solution
```js
function sum(n) {
  if(n === 1) return 1;
  return n + sum(n - 1);
}
```

### 🔥 Hotshot One-liner
```js
const sum = n => n <= 1 ? 1 : n + sum(--n);
```

---

## Grid Paths

Write a recursive function `gridPaths` that takes two inputs *n* and *m* and outputs the number of unique paths from the top left corner to the bottom right corner of an *n* x *m* grid.

**Constraint:** you can only move down or right one unit at a time.

Examples:
* `gridPaths(3, 3) // 6`
* `gridPaths(4, 3) // 10`

### Solution
```js
function gridPaths(n, m) {
  if(n === 1 || m === 1) return 1;
  return gridPaths(n - 1, m) + gridPaths(n, m - 1);
}
```

### 🔥 Hotshot One-liner
```js
const gridPaths = (n, m) => (n === 1 || m === 1) ? 1 : gridPaths(n - 1, m) + gridPaths(n, m - 1);
```

---

## Count Partitions

Write a recursive function `countPartitions` that counts the number of ways you can partition *n* objects using parts up to *m* (assuming *m* >= 0)

Examples:
* `countPartitions(5, 3) // 5`
* `countPartitions(9, 5) // 23`

### Solution
```js
function countPartitions(n, m) {
  if(n === 0) return 1;
  if(n < 0 || m === 0) return 0;
  return countPartitions(n - m, m) + countPartitions(n, m-1);
}
```

---

## Reference
[Reducible - 5 Simple Steps for Solving Any Recursive Problem](https://youtu.be/ngCos392W4w)