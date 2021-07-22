class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  //* The insert method accepts a value to be added
  //* to the heap
  insert(value) {
    //  Add value to end of the values list
    this.values.push(value);

    //  Bubble up the value to its correct spot:
    const bubbleUp = (current, parent) => {
      //  If parent index is less than the root, exit the function
      if (parent < 0) return;
      //  If value is greater than the parent:
      if (this.values[current] > this.values[parent]) {
        //  Swap the value and its parent
        [this.values[current], this.values[parent]] = [
          this.values[parent],
          this.values[current],
        ];
        //  Set new current index to be the parent index,
        //  then start over
        bubbleUp(parent, Math.floor((parent - 1) / 2));
      }
    };

    //  Start bubbling up
    const currentIdx = this.values.length - 1;
    bubbleUp(currentIdx, Math.floor((currentIdx - 1) / 2));

    //  Optionally, return the heap to chain other method calls
    return this;
  }

  //* The extractMax method removes the root node
  //* from the heap, and returns its value.
  extractMax() {
    //  Swap the root with the most recently added node
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    //  Get the value of the previous root node
    const value = this.values.pop();

    //  Bubble down the new root to its correct spot:
    const bubbleDown = (parent) => {
      //  Get the two children nodes
      const child1Idx = 2 * parent + 1;
      const child1 = this.values[child1Idx] || -Infinity;
      const child2Idx = 2 * parent + 2;
      const child2 = this.values[child2Idx] || -Infinity;
      //  If child indices are out of bounds, exit the function
      if (child1Idx >= this.values.length) {
        return;
      }
      //  If parent is greater than both children, exit the function
      if (this.values[parent] >= child1 && this.values[parent] >= child2) {
        return;
      }
      let swap = -1;
      //  If both children are greater than the parent:
      if (this.values[parent] < child1 && this.values[parent] < child2) {
        //  Swap parent with the larger child
        if (child1 > child2) {
          swap = child1Idx;
        } else {
          swap = child2Idx;
        }
      }
      //  If only one child is greater than the parent:
      //  Swap parent with that child
      else if (this.values[parent] < child1) {
        swap = child1Idx;
      } else {
        swap = child2Idx;
      }
      //  Set new parent index to be the larger child's index
      [this.values[parent], this.values[swap]] = [
        this.values[swap],
        this.values[parent],
      ];
      bubbleDown(swap);
    };

    //  Start bubbling down
    bubbleDown(0);

    //  Return the value of the root node
    return value;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  //* The insert method accepts a value to be added
  //* to the heap
  insert(value) {
    //  Add value to end of the values list
    this.values.push(value);

    //  Bubble up the value to its correct spot:
    const bubbleUp = (current, parent) => {
      //  If parent index is less than the root, exit the function
      if (parent < 0) return;
      //  If value is greater than the parent:
      if (this.values[current] < this.values[parent]) {
        //  Swap the value and its parent
        [this.values[current], this.values[parent]] = [
          this.values[parent],
          this.values[current],
        ];
        //  Set new current index to be the parent index,
        //  then start over
        bubbleUp(parent, Math.floor((parent - 1) / 2));
      }
    };

    //  Start bubbling up
    const currentIdx = this.values.length - 1;
    bubbleUp(currentIdx, Math.floor((currentIdx - 1) / 2));

    //  Optionally, return the heap to chain other method calls
    return this;
  }

  //* The extractMin method removes the root node
  //* from the heap, and returns its value.
  extractMin() {
    //  Swap the root with the most recently added node
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];

    //  Get the value of the previous root node
    const value = this.values.pop();

    //  Bubble down the new root to its correct spot:
    const bubbleDown = (parent) => {
      //  Get the two children nodes
      const child1Idx = 2 * parent + 1;
      const child1 = this.values[child1Idx] || Infinity;
      const child2Idx = 2 * parent + 2;
      const child2 = this.values[child2Idx] || Infinity;
      //  If child indices are out of bounds, exit the function
      if (child1Idx >= this.values.length) {
        return;
      }
      //  If parent is less than both children, exit the function
      if (this.values[parent] <= child1 && this.values[parent] <= child2) {
        return;
      }
      let swap = -1;
      //  If both children are greater than the parent:
      if (this.values[parent] > child1 && this.values[parent] > child2) {
        //  Swap parent with the smaller child
        if (child1 < child2) {
          swap = child1Idx;
        } else {
          swap = child2Idx;
        }
      }
      //  If only one child is less than the parent:
      //  Swap parent with that child
      else if (this.values[parent] > child1) {
        swap = child1Idx;
      } else {
        swap = child2Idx;
      }
      //  Set new parent index to be the smaller child's index
      [this.values[parent], this.values[swap]] = [
        this.values[swap],
        this.values[parent],
      ];
      bubbleDown(swap);
    };

    //  Start bubbling down
    bubbleDown(0);

    //  Return the value of the root node
    return value;
  }
}
