class PriorityQueueNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  //* The enqueue method accepts a value to be added
  //* to the queue
  enqueue(value, priority) {
    //  Add value to end of the values list
    this.values.push(new PriorityQueueNode(value, priority));

    //  Bubble up the value to its correct spot:
    const bubbleUp = (current, parent) => {
      //  If parent index is less than the root, exit the function
      if (parent < 0) return;
      //  If value is greater than the parent:
      if (this.values[current].priority < this.values[parent].priority) {
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

    //  Optionally, return the queue to chain other method calls
    return this;
  }

  //* The dequeue method removes the root node
  //* from the queue, and returns its value.
  dequeue() {
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
      const child1Priority = this.values[child1Idx]
        ? this.values[child1Idx].priority
        : Infinity;
      const child2Idx = 2 * parent + 2;
      const child2Priority = this.values[child2Idx]
        ? this.values[child2Idx].priority
        : Infinity;

      //  If child indices are out of bounds, exit the function
      if (child1Idx >= this.values.length) {
        return;
      }

      //  If parent is greater than both children, exit the function
      if (
        this.values[parent].priority <= child1Priority &&
        this.values[parent].priority <= child2Priority
      ) {
        return;
      }
      let swap = -1;

      //  If both children are greater than the parent:
      if (
        this.values[parent].priority > child1Priority &&
        this.values[parent].priority > child2Priority
      ) {
        //  Swap parent with the larger child
        if (child1Priority < child2Priority) {
          swap = child1Idx;
        } else {
          swap = child2Idx;
        }
      }

      //  If only one child is greater than the parent:
      //  Swap parent with that child
      else if (this.values[parent].priority > child1Priority) {
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
