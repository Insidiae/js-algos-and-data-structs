class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  //* A simple hash function that generates a hash index
  //* from a given (lowercase) string
  _hash(key) {
    //  Initialize a variable for the hash index
    let total = 0;
    //  Use some weird prime number to help make the hash index unique
    const WEIRD_PRIME = 6869;

    //  Loop over the key string
    //? Make sure the hash function is O(1) by limiting
    //? the number of iterations of the loop
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //  Get the current character and its ASCII keycode
      const char = key[i];
      const value = char.charCodeAt(0) - 96;

      //  Use the keycode value and the weird prime number
      //  to scramble the index value
      //? Make sure the index is within the bounds
      //? of the hash table's size
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    //  Return the final index value
    return total;
  }

  //* The set methods accepts a key string and a value
  //* and stores the key/value pair into the hash table
  //* via hashing the key
  set(key, value) {
    //  Hash the key using the hash function
    const hashIdx = this._hash(key);

    //  Store the value using the resulting hash index
    //! Use separate chaining to handle collisions
    //? This just means we store an array of key/value pairs
    //? with the given hash index
    //  If there are no items with the given hash index:
    if (!this.keyMap[hashIdx]) {
      //  Create an array then store the key/value pair
      this.keyMap[hashIdx] = [];
    }
    //  If the key already exists:
    let isDuplicateKey = false;
    for (let entry of this.keyMap[hashIdx]) {
      if (entry[0] === key) {
        //  replace its current value with the given value
        isDuplicateKey = true;
        entry[1] = value;
        break;
      }
    }
    //  Otherwise, simply push the key/value pair to the array
    if (!isDuplicateKey) {
      this.keyMap[hashIdx].push([key, value]);
    }

    //  Optionally return the hash table itself for easy chaining
    return this;
  }

  //* The get method accepts a key string
  //* and returns the value corresponding to the key
  get(key) {
    //  Hash the key using the hash function
    const hashIdx = this._hash(key);

    //  Loop over the array of key/value pairs
    if (this.keyMap[hashIdx]) {
      //  Get the value of the item with the corresponding key
      for (let item of this.keyMap[hashIdx]) {
        if (item[0] === key) {
          //  Return the value, if any
          return item[1];
        }
      }
    }
  }

  //* The keys method simply returns an array of
  //* all the keys stored within the hash table
  //? This is functionally similar to Object.keys()
  keys() {
    //  Initialize an array to store all keys
    const res = [];

    //  Loop over the key map
    for (let entryList of this.keyMap) {
      //  Push all keys (if any) into the array
      if (entryList) {
        for (let entry of entryList) {
          res.push(entry[0]);
        }
      }
    }

    //  Return the array
    return res;
  }

  //* The values method simply returns an array of
  //* all the values stored within the hash table
  //? This is functionally similar to Object.values()
  values() {
    //  Initialize an array to store all values
    const res = [];

    //  Loop over the key map
    for (let entryList of this.keyMap) {
      //  Push all values (if any) into the array
      if (entryList) {
        for (let entry of entryList) {
          //? Optionally, you can filter out duplicate values
          //? from the result array
          // if (!res.includes(entry[1]))
          res.push(entry[1]);
        }
      }
    }

    //  Return the array
    return res;
  }

  //* The entries method simply returns an array of
  //* all the key/value pairs stored within the hash table
  //? This is functionally similar to Object.entries()
  entries() {
    //  Initialize an array to store all entries
    const res = [];

    //  Loop over the key map
    for (let entryList of this.keyMap) {
      //  Push all entries (if any) into the array
      if (entryList) {
        for (let entry of entryList) {
          res.push(entry);
        }
      }
    }

    //  Return the array
    return res;
  }
}
