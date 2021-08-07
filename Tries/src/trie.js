class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  addWord(word, index = 0) {
    //  If current index is equal to word length:
    if (index === word.length) {
      //  Set the current node to be a word
      this.isWord = true;
    }
    //  Otherwise:
    //  If current index is less than word length:
    if (index < word.length) {
      //  Get the current character
      const char = word[index];
      //  Get the next node in the trie
      //  or create a new one as needed
      const nextNode = this.characters[char] || new Trie();
      //  Make a recursive call on the next node
      nextNode.addWord(word, index + 1);
      //  Add a pointer to the next node as needed
      this.characters[char] = nextNode;
    }

    //  Optionally return the trie itself for easy chaining
    return this;
  }

  removeWord(word, index = 0) {
    //  If current index is equal to word length:
    if (index === word.length) {
      //  Unset the current node from being a word
      this.isWord = false;
    }
    //  Otherwise:
    //  If current index is less than the word length:
    if (index < word.length) {
      //  Get the current character
      const char = word[index];
      //  Get the next node in the trie
      const nextNode = this.characters[char];
      //  Make a recursive call if next node exists
      if (nextNode) {
        nextNode.removeWord(word, index + 1);
      }
    }

    //  Loop over children nodes, if any
    for (let key in this.characters) {
      const nextNode = this.characters[key];
      //  If next node is not a word and has no children:
      if (!nextNode.isWord && !Object.keys(nextNode.characters).length) {
        //  Delete the next node
        delete this.characters[key];
      }
    }
  }

  findWord(word, index = 0) {
    //  If current index is equal to word length:
    if (index === word.length) {
      //  Return the current node if it is a word
      return this;
    }

    //  Otherwise:
    //  Get the next character
    const nextChar = word[index];
    //  If no pointer to the next character exists
    //  in the current node, return undefined
    if (!this.characters[nextChar]) {
      return;
    }

    //  Otherwise, continue searching in the next node
    return this.characters[nextChar].findWord(word, index + 1);
  }

  getWords(root = this, prefix = "") {
    //  Create an array to store the results
    const res = [];

    //  Create a recursive helper function to help traverse the tree
    function traverse(currentNode, currentWord = "") {
      //  If current node is a word, add it to the array
      if (currentNode.isWord) {
        res.push(currentWord);
      }

      //  Loop over the characters in the current node
      for (let nextChar in currentNode.characters) {
        //  Get the next word based on the next character
        const nextWord = currentWord + nextChar;
        //  and make a recursive call on each of them
        traverse(currentNode.characters[nextChar], nextWord);
      }
    }

    //  Invoke the recursive helper function
    traverse(root, prefix);

    //  Return the results array
    return res;
  }

  autoComplete(prefix) {
    //  Traverse the trie according to the given prefix
    const currentNode = this.findWord(prefix);
    //  Return all words coming from the current node, if any
    return currentNode ? this.getWords(currentNode, prefix) : [];
  }
}
