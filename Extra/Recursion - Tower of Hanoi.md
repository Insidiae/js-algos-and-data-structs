# Recursion Practice - Tower of Hanoi

The **Tower of Hanoi** (also called the **Tower of Brahma** or **Lucas' Tower** and sometimes pluralized as **Towers**, or simply **pyramid puzzle**) is a mathematical game or puzzle. It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to last rod, obeying the following simple rules:

1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No larger disk may be placed on top of a smaller disk.

With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2<sup>*n*</sup> − 1, where *n* is the number of disks.

![Tower of Hanoi example](https://mathworld.wolfram.com/images/gifs/hanoi.gif)

## Example
Here is the minimal sequence of moves for *n* = 3 disks:
1. Move disk **1** from rod **A** to rod **C**
2. Move disk **2** from rod **A** to rod **B**
3. Move disk **1** from rod **C** to rod **B**
4. Move disk **3** from rod **A** to rod **C**
5. Move disk **1** from rod **B** to rod **A**
6. Move disk **2** from rod **B** to rod **C**
7. Move disk **1** from rod **A** to rod **C**

## Recursive Strategy
* For *n* = 1 disk, simply move it from the source rod to the target rod
* For *n* >= 2 disks:
  1. Move the smallest/top *n* - 1 disks from the source rod to the spare rod
     > Note that the ***spare*** rod effectively becomes the ***target*** rod in this recursive call, and vice versa!
  2. Move the largest/bottom disk from the source rod to the target rod
  3. Move the smallest/top disks from the spare rod to the target rod

---

## Solution
```js
const rods = { 1: "A", 2: "B", 3: "C" };

function hanoi(n, start, end) {
  if(n === 1) {
    //* If we only need to move one disk,
    //* Simply move it from the starting rod to the end rod
    console.log(`Moved disk ${n} from rod ${rods[start]} to rod ${rods[end]}`);
    return;
  }

  //* Move the top n - 1 disks from the starting rod to the other rod
  //  Since the rods are represented by numbers 1 through 3,
  //  we can calculate the other rod as 6 - start - end
  hanoi(n - 1, start, 6 - start - end);

  //* Move the bottom disk from starting rod to the end rod
  console.log(`Moved disk ${n} from rod ${rods[start]} to rod ${rods[end]}`);

  //* Finally, move the top n - 1 disks from other rod to the end rod
  hanoi(n - 1, 6 - start - end, end);
}
```

## References
[Reducible - Towers of Hanoi: A Complete Recursive Visualization](https://youtu.be/rf6uf3jNjbo)

[Wikipedia - Towers of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi)