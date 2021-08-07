class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //* The insert method takes a value and adds it
  //* into its proper place in the Binary Search Tree
  insert(val, currentNode = this.root) {
    //  Starting at the root:
    if (!this.root) {
      //  If there is no root, make the new node the root
      this.root = new BSTNode(val);
    }
    //  Otherwise:
    //  If the new node has a value greater
    //  than the current node:
    else if (val > currentNode.value) {
      //  If there is no right node,
      //  add the new node to the right
      if (!currentNode.right) {
        currentNode.right = new BSTNode(val);
      }
      //  Otherwise, move to the right node and repeat
      else {
        this.insert(val, currentNode.right);
      }
    }
    //  If the new node has a value less
    //  than the current node:
    else if (val < currentNode.value) {
      //  If there is no left node,
      //  add the new node to the left
      if (!currentNode.left) {
        currentNode.left = new BSTNode(val);
      }
      //  Otherwise, move to the left node and repeat
      else {
        this.insert(val, currentNode.left);
      }
    }

    //* Optionally return the BST
    //* to chain other method calls
    return this;
  }

  //* The find method accepts a value
  //* and returns the node with the matching value, if any
  find(val, currentNode = this.root) {
    //  Check the current node (default is root):
    if (!currentNode) {
      //  If there is no value, return undefined
      return;
    }
    //  Otherwise:
    //  If the value we're looking for is equal to
    //  the value of the current node, return the node
    if (val === currentNode.value) {
      return currentNode;
    }
    //  Otherwise:
    //  If the value we're looking for is less than
    //  the value of the current node:
    else if (val < currentNode.value) {
      //  Move to the left, and repeat
      return this.find(val, currentNode.left);
    }
    //  If the value we're looking for is greater than
    //  the value of the current node:
    else {
      //  Move to the right, and repeat
      return this.find(val, currentNode.right);
    }
  }

  //* The remove method accepts a value,
  //* removes it from the tree,
  //* and re-arranges the remaining nodes
  //* to maintain the integrity of the Binary Search Tree
  remove(val, currentNode = this.root, parentNode = this, direction = "root") {
    //  Return false if the tree is empty
    //  or if the value is not found
    if (!currentNode) {
      return false;
    }

    //  If value to be deleted is less than the
    //  current node's value, move to the left
    if (val < currentNode.value) {
      return this.remove(val, currentNode.left, currentNode, "left");
    }
    //  If value to be deleted is greater than the
    //  current node's value, move to the right
    else if (val > currentNode.value) {
      return this.remove(val, currentNode.right, currentNode, "right");
    }
    //  Otherwise, remove the current node:
    else {
      //  If the current node has no children,
      //  simply remove the node
      if (!currentNode.left && !currentNode.right) {
        parentNode[direction] = null;
        return true;
      }
      //  If the current node has one child,
      //  move the child into the current node's position
      if (!currentNode.left) {
        parentNode[direction] = currentNode.right;
        return true;
      }

      if (!currentNode.right) {
        parentNode[direction] = currentNode.left;
        return true;
      }

      //  If the current node has two children,
      //  Set the current node's value to its
      //  inorder successor's value...
      currentNode.value = this.findInorderSuccessor(currentNode.right);
      //  ...and then remove the inorder successor
      //  from its old position
      return this.remove(currentNode.value, currentNode.right, currentNode);
    }
  }

  //* This helper method takes a node
  //* and finds its inorder successor
  //? The inorder successor is the smallest node
  //? from the current node's right subtree
  findInorderSuccessor(currentNode) {
    let min = currentNode.value;
    while (currentNode.left !== null) {
      min = currentNode.left.value;
      currentNode = currentNode.left;
    }
    return min;
  }

  breadthFirstSearch() {
    //  Create a queue for the nodes to be visited
    const visited = [this.root];
    //  Initialize an array to store the values
    const values = [];

    //  Using recursion, iterate over the tree:
    function traverseBreadthFirst() {
      //  Dequeue a value from the queue
      //  to get the current node
      const currentNode = visited.shift();
      //  Add the current node's left and right children,
      //  if any, to the queue
      if (currentNode.left) visited.push(currentNode.left);
      if (currentNode.right) visited.push(currentNode.right);
      //  Add the current node's value into the values array
      values.push(currentNode.value);

      //  If there are still nodes in the queue, keep going
      if (visited.length) traverseBreadthFirst();
    }

    //  Invoke the recursive function
    traverseBreadthFirst();
    //  Return the values array
    return values;
  }

  //? BFS using pure recursion
  // breadthFirstSearch(visited = [this.root], values = []) {
  //   //  If the queue is empty, return the values array
  //   if (!visited.length) return values;

  //   //  Dequeue a value from the queue
  //   //  to get the current node
  //   const currentNode = visited.shift();
  //   //  Add the current node's left and right children,
  //   //  if any, to the queue
  //   if (currentNode.left) visited.push(currentNode.left);
  //   if (currentNode.right) visited.push(currentNode.right);
  //   //  Add the current node's value into the values array
  //   values.push(currentNode.value);
  //   //  Make a recursive call to keep going
  //   return this.breadthFirstSearch(visited, values);
  // }

  DFSPreOrder() {
    //  Create an array to store the values
    const values = [];

    //  Using recursion, iterate over the tree
    function traversePreOrder(currentNode) {
      //  Add the current node's value into the values array
      values.push(currentNode.value);
      //  Make a recursive call for the left node, if any
      if (currentNode.left) traversePreOrder(currentNode.left);
      //  Make a recursive call for the right node, if any
      if (currentNode.right) traversePreOrder(currentNode.right);
    }

    //  Invoke the recursive function
    traversePreOrder(this.root);
    //  Return the values array
    return values;
  }

  DFSInOrder() {
    //  Create an array to store the values
    const values = [];

    //  Using recursion, iterate over the tree
    function traverseInOrder(currentNode) {
      //  Make a recursive call for the left node, if any
      if (currentNode.left) traverseInOrder(currentNode.left);
      //  Add the current node's value into the values array
      values.push(currentNode.value);
      //  Make a recursive call for the right node, if any
      if (currentNode.right) traverseInOrder(currentNode.right);
    }

    //  Invoke the recursive function
    traverseInOrder(this.root);
    //  Return the values array
    return values;
  }

  DFSPostOrder() {
    //  Create an array to store the values
    const values = [];

    //  Using recursion, iterate over the tree
    function traversePostOrder(currentNode) {
      //  Make a recursive call for the left node, if any
      if (currentNode.left) traversePostOrder(currentNode.left);
      //  Make a recursive call for the right node, if any
      if (currentNode.right) traversePostOrder(currentNode.right);
      //  Add the current node's value into the values array
      values.push(currentNode.value);
    }

    //  Invoke the recursive function
    traversePostOrder(this.root);
    //  Return the values array
    return values;
  }

  isBalanced() {
    //  Using recursion, traverse every node
    //  to check if the three is balanced
    //* The recursive function returns an array
    //* containing a bool for if the node is balanced,
    //* and a number for the height of the node
    function checkBalanced(currentNode) {
      //  If current node is empty, it is balanced
      //  and has a height of -1
      if (!currentNode) {
        return [true, -1];
      }
      //  Otherwise:
      //  Make a recursive call for the left subtree
      const [leftIsBalanced, leftHeight] = checkBalanced(currentNode.left);
      //  If the left subtree is NOT balanced:
      if (!leftIsBalanced) {
        //  Return false for the bool value
        return [false, leftHeight];
      }
      //  Make a recursive call for the right subtree
      const [rightIsBalanced, rightHeight] = checkBalanced(currentNode.right);
      //  If the right subtree is NOT balanced:
      if (!rightIsBalanced) {
        //  Return false for the bool value
        return [false, rightHeight];
      }
      //  Otherwise, it means both subtrees are balanced
      //  Now compare the height of each subtree
      //  The current node is only balanced if the
      //  absolute difference of the height of both subtrees
      //  are less than or equal to 1
      const subtreesAreBalanced = Math.abs(leftHeight - rightHeight) <= 1;
      //  To calculate the height of the current node,
      //  simply add 1 to the height of the larger subtree
      const currentHeight = Math.max(leftHeight, rightHeight) + 1;
      //  Return the balanced status of the node
      //  and the height of the current node
      return [subtreesAreBalanced, currentHeight];
    }

    //  Invoke the recursive function starting from
    //  the root, and return the bool value
    return checkBalanced(this.root)[0];
  }

  isValidBST() {
    //  Create a variable to store the previous value
    let prev = -Infinity;
    //  Create a variable to keep track of the BST's validity
    let isValid = true;

    //  Using recursion, iterate over the tree
    function traverseValidate(currentNode) {
      //  Make a recursive call for the left node, if any
      if (currentNode.left) traverseValidate(currentNode.left);
      //  If current node's value is greater than the previous value:
      if (currentNode.value > prev) {
        //  Set the new previous value to be the current node's value
        prev = currentNode.value;
      } else {
        //  Otherwise, the tree is NOT valid
        isValid = false;
        //  Also make sure we don't make any more
        //  unnecessary recursive calls
        return;
      }
      //  If the BST is still valid:
      //  Make a recursive call for the right node, if any
      if (isValid && currentNode.right) traverseValidate(currentNode.right);
    }

    //  Invoke the recursive function
    traverseValidate(this.root);
    //  Return the variable we were using to check for validity
    return isValid;
  }
}
