//* This is an implementation of a Stack based on a Singly Linked List
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //* The enqueue method accepts a value to be added
  //* to the end of the list
  enqueue(value) {
    //  Create a new ListNode for the given value
    const newNode = new ListNode(value);
    //  If list is currently empty, point the first pointer to the new ListNode
    if (!this.first) this.first = newNode;
    //  otherwise, point the previous last ListNode's next pointer
    //  to the new ListNode
    else this.last.next = newNode;
    //  Point the last pointer to the new ListNode
    this.last = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The dequeue method removes the item from the first/start of the list
  //* It also returns the value of the removed item
  dequeue() {
    //  If list is empty, return undefined
    if (!this.first) return;
    //  Get the value on the current first ListNode
    const value = this.first.value;
    //  Set the new first pointer into the next ListNode
    this.first = this.first.next;
    //  Decrement length property of the list
    this.length--;
    //  If list is now empty, unset the last pointer
    if (!this.first) this.last = null;
    //  Return the value of the removed ListNode
    return value;
  }
  //* The peek method simply returns the first ListNode
  peek() {
    return this.first;
  }
  //* The toArray method converts the linked list into an array
  toArray() {
    //  Initialize an empty array
    const arr = [];
    //  Loop through the list, and push the values into the array
    for (let i = this.first; i !== null; i = i.next) arr.push(i.value);
    //  Return the array
    return arr;
  }
}
