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
  //* The unshift function accepts a value to be added
  //* to the head/start of the list
  unshift(value) {
    //  Create a new ListNode for the given value
    const newNode = new ListNode(value);
    //  Set the next property of the new node to the current head
    //? Note that the current head should be null if the list is empty
    newNode.next = this.head;
    //  If list is currently empty, also set the tail
    //  to be the new ListNode
    if(!this.head) this.tail = newNode;
    //  Set the new head to be the new node
    this.head = newNode;
    //  Increment the length property of the list
    this.length++;
  }
  //* The shift function removes the item from the head/start of the list
  //* It also returns the value of the removed item
  shift() {
    //  If list is empty, return undefined
    if(!this.head) return;
    //  Get the value on the current head of the list
    const value = this.head.value;
    //  Set the new head into the current head's next
    this.head = this.head.next;
    //  Decrement length property of the list
    this.length--;
    //  If list is now empty, unset the tail pointer
    if(!this.head) this.tail = null;
    //  Return the value of the removed ListNode
    return value;
  }
  //* The get function accepts an index to access a ListNode on the list
  //* and returns the ListNode at the specified index
  get(index) {
    //  If index is less than 0 or greater than or equal to the
    //  length of the list, return null
    if(index < 0 || index >= this.length) return null;
    //  Loop through the list until we reach the index
    let currentNode = this.head;
    for(let i = 0; i < index; i++) currentNode = currentNode.next;
    //  Return the ListNode at that index
    return currentNode;
  }
  //* The set function accepts an index and a value,
  //* and sets the specified value on the ListNode
  //* at the specified index
  set(index, value) {
    //  Get the ListNode at the specified index
    const currentNode = this.get(index);
    //  If no ListNode is found, return false
    if(!currentNode) return false;
    //  If a ListNode is found, set its new value to be
    //  the specified value, and then return true
    currentNode.value = value;
    return true;
  }
  //* The insert function accepts an index and a value,
  //* and inserts a new ListNode with the specified value
  //* at the specified index
  insert(index, value) {
    //  If index is less than 0 or greater than the
    //  length of the list, return false
    if(index < 0 || index > this.length) return false;
    //  If index is equal to the length of the list,
    //  simply use push to insert the new ListNode
    if(index === this.length) this.push(value);
    //  If index is equal to 0,
    //  simply use unshift to insert the new ListNode
    else if(index === 0) this.unshift(value);
    //  Otherwise:
    else {
      //  Create a new ListNode
      const newNode = new ListNode(value);
      //  Get the current ListNode at the specified index - 1
      const currentNode = this.get(index - 1);
      //  Set the new ListNode's next property to
      //  the current ListNode's next property
      newNode.next = currentNode.next;
      //  Set the current ListNode's next property to
      //  the new ListNode
      currentNode.next = newNode;
      //  Increment the length property of the list
      this.length++;
    }
    //  Return true
    return true;
  }
  //* The remove function accepts an index
  //* and removes the item at the specified index
  //* It also returns the value of the removed item
  remove(index) {
    //  If index is less than 0 or greater than or equal to the
    //  length of the list, return undefined
    if(index < 0 || index >= this.length) return;
    //  If index is equal to the length of the list - 1,
    //  simply use pop to remove the item
    if(index === this.length - 1) return this.pop(index);
    //  If index is equal to 0,
    //  simply use shift to remove the item
    if(index === 0) return this.shift(index);
    //  Otherwise:
    //  Get the ListNode at the specified index - 1
    const previousNode = this.get(index - 1);
    //  Get the value of the ListNode next to the current ListNode
    //? a.k.a. the value of the actual ListNode to be removed
    const value = previousNode.next.value;
    //  Set the next prperty of the current ListNode to be
    //  the next property of the next ListNode
    //? a.k.a. the ListNode next to the actual ListNode to be removed
    previousNode.next = previousNode.next.next;
    //  Decrement length property of the list
    this.length--;
    //  Return the value of the removed ListNode
    return value;
  }
  //* The reverse function reverses the order
  //* of the ListNodes in the linked list
  reverse() {
    //  If list is empty, do nothing
    if(!this.length) return;
    //  Create two ponters for the current and next ListNode,
    //  starting from the head
    let currentNode = this.head;
    let nextNode = this.head.next;
    //  Create another ListNode for iterating through the list,
    //  then loop through the list using that iterator
    //? I just tried using a for loop here just for fun
    for(
      let iteratorNode = this.head.next;
      iteratorNode !== null;
      iteratorNode = nextNode
    ) {
      //  Set the next ListNode to be the
      //  iterating ListNode's next property
      nextNode = iteratorNode.next;
      //  Set the iterating ListNode's next property to be
      //  the current ListNode
      iteratorNode.next = currentNode;
      //  Set the current ListNode to be the iterating ListNode
      currentNode = iteratorNode;
    }
    //? A while loop can also work here, probably better
    // let iteratorNode = nextNode;
    // while(iteratorNode !== null) {
    //   //  Set the next ListNode to be the
    //   //  iterating ListNode's next property
    //   nextNode = iteratorNode.next;
    //   //  Set the iterating ListNode's next property to be
    //   //  the current ListNode
    //   iteratorNode.next = currentNode;
    //   //  Set the current ListNode to be the iterating ListNode
    //   currentNode = iteratorNode;
    //   //  Set the iterator ListNode to be the next ListNode
    //   iteratorNode = nextNode;
    // }
    //  Swap the head and the tail
    [this.head, this.tail] = [this.tail, this.head]
    this.tail.next = null;
  }
  //* The toArray function converts the linked list into an array
  toArray() {
    //  Initialize an empty array
    const arr = [];
    //  Loop through the list, and push the values into the array
    for(let i = this.head; i !== null; i = i.next) arr.push(i.value);
    //  Return the array
    return arr;
  }
}
