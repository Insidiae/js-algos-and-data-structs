// piece of data - val
//reference to next node - next

class DoubleListNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //* The push method accepts a value to be added
  //* to the tail/end of the list
  push(value) {
    //  Create a new DoubleListNode for the given value
    const newNode = new DoubleListNode(value);
    //  If list is currently empty, set the head to be the new DoubleListNode
    if (!this.head) this.head = newNode;
    //  otherwise, point the previous tail to the new DoubleListNode
    else this.tail.next = newNode;
    // Set the prev property of the new DoubleListNode to the current tail, if any
    newNode.prev = this.tail;
    //  Set the tail to be the new DoubleListNode
    this.tail = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The pop method removes the item from the tail/end of the list
  //* It also returns the value of the removed item
  pop() {
    //  If list is empty, return undefined
    if (!this.tail) return;
    //  Get the current tail's value
    const value = this.tail.value;
    //  Set the new tail into the current tail's prev property
    this.tail = this.tail.prev;
    //  Decrement length property of the list
    this.length--;
    //  If list is now empty, unset the head pointer
    if (!this.tail) this.head = null;
    //  Otherwise, unset the next property of the new tail
    else this.tail.next = null;
    //  Return the value of the removed DoubleListNode
    return value;
  }
  //* The unshift method accepts a value to be added
  //* to the head/start of the list
  unshift(value) {
    //  Create a new DoubleListNode for the given value
    const newNode = new DoubleListNode(value);
    //  If list is currently empty, set the tail to be the new DoubleListNode
    if (!this.tail) this.tail = newNode;
    //  otherwise, point the previous head to the new DoubleListNode
    else this.head.prev = newNode;
    // Set the next property of the new DoubleListNode to the current head, if any
    newNode.next = this.head;
    //  Set the head to be the new DoubleListNode
    this.head = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The shift method removes the item from the head/start of the list
  //* It also returns the value of the removed item
  shift() {
    //  If list is empty, return undefined
    if (!this.head) return;
    //  Get the current head's value
    const value = this.head.value;
    //  Set the new head into the current head's next property
    this.head = this.head.next;
    //  Decrement length property of the list
    this.length--;
    //  If list is now empty, unset the tail pointer
    if (!this.head) this.tail = null;
    //  Otherwise, unset the prev property of the new head
    else this.head.prev = null;
    //  Return the value of the removed DoubleListNode
    return value;
  }
  //* The get method accepts an index to access a DoubleListNode on the list
  //* and returns the DoubleListNode at the specified index
  get(index) {
    //  If index is less than 0 or greater than or equal to the
    //  length of the list, return null
    if (index < 0 || index >= this.length) return null;
    //  If index is closer to the tail:
    let currentNode;
    if (index > this.length / 2) {
      // Starting from the tail,
      currentNode = this.tail;
      //  Loop through the list until we reach the index
      for (let i = this.length - 1; i < index; i--)
        currentNode = currentNode.prev;
    }
    //  Otherwise:
    else {
      // Starting from the head,
      currentNode = this.head;
      //  Loop through the list until we reach the index
      for (let i = 0; i < index; i++) currentNode = currentNode.next;
    }
    //  Return the DoubleListNode at that index
    return currentNode;
  }
  //* The set method accepts an index and a value,
  //* and sets the specified value on the DoubleListNode
  //* at the specified index
  set(index, value) {
    //  Get the DoubleListNode at the specified index
    const currentNode = this.get(index);
    //  If no DoubleListNode is found, return false
    if (!currentNode) return false;
    //  If a DoubleListNode is found, set its new value to be
    //  the specified value, and then return true
    currentNode.value = value;
    return true;
  }
  //* The insert method accepts an index and a value,
  //* and inserts a new DoubleListNode with the specified value
  //* at the specified index
  insert(index, value) {
    //  If index is less than 0 or greater than the
    //  length of the list, return false
    if (index < 0 || index > this.length) return false;
    //  If index is equal to the length of the list,
    //  simply use push to insert the new DoubleListNode
    if (index === this.length) this.push(value);
    //  If index is equal to 0,
    //  simply use unshift to insert the new DoubleListNode
    else if (index === 0) this.unshift(value);
    //  Otherwise:
    else {
      //  Create a new DoubleListNode
      const newNode = new DoubleListNode(value);
      //  Get the current DoubleListNode at the specified index - 1
      const currentNode = this.get(index - 1);
      //  Set the new DoubleListNode's next property to
      //  the current DoubleListNode's next property
      newNode.next = currentNode.next;
      //  Set the new DoubleListNode's prev property to
      //  the current DoubleListNode
      newNode.prev = currentNode;
      //  Set the next DoubleListNode's prev property to
      //  the new DoubleListNode
      newNode.next.prev = newNode;
      //  Set the current DoubleListNode's next property to
      //  the new DoubleListNode
      currentNode.next = newNode;
      //  Increment the length property of the list
      this.length++;
    }
    //  Return true
    return true;
  }
  //* The remove method accepts an index
  //* and removes the item at the specified index
  //* It also returns the value of the removed item
  remove(index) {
    //  If index is less than 0 or greater than or equal to the
    //  length of the list, return undefined
    if (index < 0 || index >= this.length) return;
    //  If index is equal to the length of the list - 1,
    //  simply use pop to remove the item
    if (index === this.length - 1) return this.pop(index);
    //  If index is equal to 0,
    //  simply use shift to remove the item
    if (index === 0) return this.shift(index);
    //  Otherwise:
    //  Get the DoubleListNode at the specified index - 1
    const previousNode = this.get(index - 1);
    //  Get the value of the DoubleListNode next to the current DoubleListNode
    //? a.k.a. the value of the actual DoubleListNode to be removed
    const value = previousNode.next.value;
    //  Set the next prperty of the current DoubleListNode to be
    //  the next property of the next DoubleListNode
    //? a.k.a. the DoubleListNode next to the actual DoubleListNode to be removed
    previousNode.next = previousNode.next.next;
    //  Set the next DoubleListNode's prev property to be
    //  the previous DoubleListNode
    previousNode.next.prev = previousNode;
    //  Decrement length property of the list
    this.length--;
    //  Return the value of the removed DoubleListNode
    return value;
  }
  //* The reverse method reverses the order
  //* of the DoubleListNodes in the linked list
  reverse() {
    //  If list is empty, do nothing
    if (!this.length) return;
    //  Create two ponters for the current and next DoubleListNode,
    //  starting from the head
    let currentNode = this.head;
    let nextNode = this.head.next;
    //  Create another DoubleListNode for iterating through the list,
    //  then loop through the list using that iterator
    //? I used a while loop this time to loop through the list
    let iteratorNode = nextNode;
    while (iteratorNode !== null) {
      //  Set the next DoubleListNode to be the
      //  iterating DoubleListNode's next property
      nextNode = iteratorNode.next;
      //  Set the iterating DoubleListNode's next property to be
      //  the current DoubleListNode
      iteratorNode.next = currentNode;
      //  Set the current DoubleListNode's prev property to be
      // the iterating DoubleListNode
      currentNode.prev = iteratorNode;
      //  Set the current DoubleListNode to be the iterating DoubleListNode
      currentNode = iteratorNode;
      //  Set the iterator DoubleListNode to be the next DoubleListNode
      iteratorNode = nextNode;
    }
    //? A for loop can also work here
    // for (
    //   let iteratorNode = this.head.next;
    //   iteratorNode !== null;
    //   iteratorNode = nextNode
    // ) {
    //   //  Set the next DoubleListNode to be the
    //   //  iterating DoubleListNode's next property
    //   nextNode = iteratorNode.next;
    //   //  Set the iterating DoubleListNode's next property to be
    //   //  the current DoubleListNode
    //   iteratorNode.next = currentNode;
    //   //  Set the current DoubleListNode's prev property to be
    //   // the iterating DoubleListNode
    //   currentNode.prev = iteratorNode;
    //   //  Set the current DoubleListNode to be the iterating DoubleListNode
    //   currentNode = iteratorNode;
    // }
    //  Swap the head and the tail
    [this.head, this.tail] = [this.tail, this.head];
    this.tail.next = null;
    this.head.prev = null;
  }
  //* The toArray method converts the linked list into an array
  toArray() {
    //  Initialize an empty array
    const arr = [];
    //  Loop through the list, and push the values into the array
    for (let i = this.head; i !== null; i = i.next) arr.push(i.value);
    //  Return the array
    return arr;
  }
}
