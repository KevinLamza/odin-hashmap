export const LinkedList = class {
  constructor() {
    this.head = null;
  }
  append(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(key, value);
    }
  }
  prepend(key, value) {
    if (this.head === null) {
      this.head = new Node(key, value);
    } else {
      let tmp = this.head;
      this.head = new Node(key, value, tmp);
    }
  }
  size() {
    if (this.head === null) {
      return 0;
    } else {
      let tmp = this.head;
      let length = 1;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        length = ++length;
      }
      return length;
    }
  }
  firstNode() {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    } else {
      return this.head;
    }
  }
  lastNode() {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    } else {
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      }
      return tmp;
    }
  }
  at(index) {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    }
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      if (tmp.nextNode != null) {
        tmp = tmp.nextNode;
      } else {
        console.log('Invalid operation');
        return;
      }
    }
    return tmp;
  }
  pop() {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    } else if (this.head.nextNode === null) {
      this.head = null;
    } else {
      let tmp = this.head;
      let prev = null;
      while (tmp.nextNode != null) {
        prev = tmp;
        tmp = tmp.nextNode;
      }
      prev.nextNode = null;
    }
  }
  contains(key) {
    if (this.head === null) {
      // console.log('Invalid operation');
      return false;
    } else {
      let tmp = this.head;
      if (tmp.key === key) return true;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        if (tmp.key === key) {
          return true;
        }
      }
      return false;
    }
  }
  findValue(key) {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    } else {
      let tmp = this.head;
      let index = 0;
      if (tmp.key === key) return tmp.value;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        index = ++index;
        if (tmp.key === key) {
          return tmp.value;
        }
      }
      return null;
    }
  }
  findIndex(key) {
    if (this.head === null) {
      // console.log('Invalid operation');
      return false;
    } else {
      let tmp = this.head;
      let index = 0;
      if (tmp.key === key) return index;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        index = ++index;
        if (tmp.key === key) {
          return index;
        }
      }
      return null;
    }
  }
  toString() {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    } else {
      let string = `( ${this.head.value} )`;
      let tmp = this.head;
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        string = string + ` -> ( ${tmp.value} )`;
      }
      string = string + ` -> null`;
      console.log(string);
    }
  }
  insertAt(key, value, index) {
    if (this.head === null) {
      console.log('Invalid operation');
      return;
    }
    let tmp = this.head;
    let prev = null;
    if (index === 0) this.prepend(key, value);
    else {
      for (let i = 0; i < index; i++) {
        if (tmp === null) return;
        prev = tmp;
        tmp = tmp.nextNode;
      }
      prev.nextNode = new Node(key, value, tmp);
    }
  }
  removeAt(index) {
    // if (this.head === null) {
    //   console.log('Invalid operation');
    //   return;
    // }
    let tmp = this.head;
    let prev = null;
    if (index === 0) this.head = this.head.nextNode;
    else {
      for (let i = 0; i < index; i++) {
        if (tmp === null) return;
        prev = tmp;
        tmp = tmp.nextNode;
      }
      prev.nextNode = tmp.nextNode;
    }
  }
  allKeys() {
    let tmp = this.head;
    if (tmp != null) {
      let result = [];
      result.push(tmp.key);
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        result.push(tmp.key);
      }
      return result;
    } else return null;
  }
  allValues() {
    let tmp = this.head;
    if (tmp != null) {
      let result = [];
      result.push(tmp.value);
      while (tmp.nextNode != null) {
        tmp = tmp.nextNode;
        result.push(tmp.value);
      }
      return result;
    } else return null;
  }
};

export const Node = class {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
};

// use debugger!!! to check
