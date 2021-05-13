//* This is an implementation of a Stack based on a Doubly Linked List
//? Why Doubly Linked List? Because the prev pointers allow us
//? to view the items from the top down.
class DoubleListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  //* The push method accepts a value to be added
  //* to the top/end of the list
  push(value) {
    //  Create a new DoubleListNode for the given value
    const newNode = new DoubleListNode(value);
    //  If list is not empty, point the previous top to the new DoubleListNode
    if (this.top) this.top.next = newNode;
    // Set the prev property of the new DoubleListNode to the current top, if any
    newNode.prev = this.top;
    //  Set the top to be the new DoubleListNode
    this.top = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The pop method removes the item from the top/end of the list
  //* It also returns the value of the removed item
  pop() {
    //  If list is empty, return undefined
    if (!this.top) return;
    //  Get the current top's value
    const value = this.top.value;
    //  Set the new top into the current top's prev property
    this.top = this.top.prev;
    //  Decrement length property of the list
    this.length--;
    //  If list is not yet empty, unset the next property of the new top
    if (this.top) this.top.next = null;
    //  Return the value of the removed DoubleListNode
    return value;
  }
  //* The peek method simply returns the top of the list
  peek() {
    return this.top;
  }
  //* The toArray method converts the linked list into an array
  toArray() {
    //  Initialize an empty array
    const arr = [];
    //  Loop through the list, and push the values into the array
    for (let i = this.top; i !== null; i = i.prev) arr.unshift(i.value);
    //  Return the array
    return arr;
  }
}
