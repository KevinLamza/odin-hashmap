// Because of webpack, CSS rules need to be imported here and not in the .html file
// import './styles.css';

import { LinkedList } from './linkedList';
import { Node } from './linkedList';

// Another webpack check
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// ---------------------- START YOUR CODE BELOW HERE

class HashMap {
  constructor(size = 16) {
    // this.buckets = [
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    //   {},
    // ];
    this.buckets = [];
    for (let i = 0; i < size; i++) {
      this.buckets.push({});
    }
    this.loadFactor = 0.75;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.buckets.length;
    }

    return hashCode;
  }
  set(key, value) {
    const hashCode = this.hash(key);
    this.buckets[hashCode][key] = value;
    if (this.length() / this.buckets.length > 0.75) {
      // let newList = new HashMap(this.buckets.length * 2);
      // let oldList = this;
      // for (let i = 0; i < this.length(); i++) {
      //   newList.set(oldList.entries()[i][0], oldList.entries()[i][1]);
      // }
      let copyList = this.entries();
      // console.log(copyList);
      let increaseBy = this.buckets.length;
      for (let i = 0; i < increaseBy; i++) {
        this.buckets.push({});
      }
      this.clear();
      for (let i = 0; i < copyList.length; i++) {
        this.set(copyList[i][0], copyList[i][1]);
      }
    }
  }
  get(key) {
    const hashCode = this.hash(key);
    if (this.buckets[hashCode]) {
      return this.buckets[hashCode][key];
    } else {
      return null;
    }
  }
  has(key) {
    const hashCode = this.hash(key);
    for (let keys in this.buckets[hashCode]) {
      if (key === keys) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    const hashCode = this.hash(key);
    if (this.has(key)) {
      delete this.buckets[hashCode][key];
      return true;
    } else return false;
  }
  length() {
    let result = 0;
    for (let i in this.buckets) {
      for (let j in this.buckets[i]) {
        if (this.buckets[i][j]) result = ++result;
      }
    }
    return result;
  }
  clear() {
    for (let i in this.buckets) {
      for (let j in this.buckets[i]) {
        if (this.buckets[i][j]) delete this.buckets[i][j];
      }
    }
  }
  keys() {
    let result = [];
    for (let i in this.buckets) {
      for (let j in this.buckets[i]) {
        if (this.buckets[i][j]) result.push(j);
      }
    }
    return result;
  }
  values() {
    let result = [];
    for (let i in this.buckets) {
      for (let j in this.buckets[i]) {
        if (this.buckets[i][j]) result.push(this.buckets[i][j]);
      }
    }
    return result;
  }
  entries() {
    let result = [];
    for (let i = 0; i < this.length(); i++) {
      result[i] = [this.keys()[i], this.values()[i]];
    }
    return result;
  }
}

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('moon', 'silver');

console.log(test);
