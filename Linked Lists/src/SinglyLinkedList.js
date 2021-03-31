// piece of data - val
//reference to next node - next

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //* The push function accepts a value to be added
  //* to the tail/end of the list
  push(value) {
    //  Create a new ListNode for the given value
    const newNode = new ListNode(value);
    //  If list is currently empty, set the head to be the new ListNode
    if(!this.head) this.head = newNode;
    //  otherwise, point the previous tail to the new ListNode
    else this.tail.next = newNode;
    //  Set the tail to be the new ListNode
    this.tail = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The pop function removes the item from the tail/end of the list
  //* It also returns the value of the removed item
  pop() {
    //  If list is empty, return undefined
    if(!this.head) return;
    //  Loop until the 2nd to last ListNode
    let currentNode = this.head;
    while(currentNode.next && currentNode.next !== this.tail) currentNode = currentNode.next;
    //  Set its next pointer to null
    currentNode.next = null;
    //  Point the new tail to its correct position
    const value = this.tail.value;
    this.tail = currentNode;
    //  Decrement length property of the list
    this.length--;
    //  If list is now empty, unset the head and tail pointers
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //  Return the value of the removed ListNode
    return value;
  }
}
