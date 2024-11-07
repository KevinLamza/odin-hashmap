// Because of webpack, CSS rules need to be imported here and not in the .html file
// import './styles.css';

import { LinkedList } from './linkedList.js';
import { Node } from './linkedList.js';

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
      // this.buckets.push({});
      this.buckets[i] = new LinkedList();
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
    if (Object.keys(this.buckets[hashCode]).length === 0) {
      let list = new LinkedList();
      this.buckets[hashCode] = list;
      this.buckets[hashCode].append(key, value);
    } else {
      this.buckets[hashCode].append(key, value);
    }

    if (this.length() / this.buckets.length > 0.75) {
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
    return this.buckets[hashCode].findValue(key);
    // if (this.buckets[hashCode]) {
    //   return this.buckets[hashCode][key];
    // } else {
    //   return null;
    // }
  }
  has(key) {
    const hashCode = this.hash(key);
    return this.buckets[hashCode].contains(key);
  }
  remove(key) {
    const hashCode = this.hash(key);
    if (this.has(key)) {
      this.buckets[hashCode].removeAt(this.buckets[hashCode].findIndex(key));
      return true;
    } else return false;
  }
  length() {
    let result = 0;
    for (let i in this.buckets) {
      // for (let j in this.buckets[i]) {
      //   if (this.buckets[i][j]) result = ++result;
      // }
      result = result + this.buckets[i].size();
    }
    return result;
  }
  clear() {
    for (let i in this.buckets) {
      // for (let j in this.buckets[i]) {
      //   if (this.buckets[i][j]) delete this.buckets[i][j];
      // }
      this.buckets[i] = new LinkedList();
    }
  }
  keys() {
    let result = [];
    for (let i in this.buckets) {
      let arr = this.buckets[i].allKeys();
      if (arr != null) {
        for (let j in arr) {
          result.push(arr[j]);
        }
      }
    }
    return result;
  }
  values() {
    let result = [];
    for (let i in this.buckets) {
      let arr = this.buckets[i].allValues();
      if (arr != null) {
        for (let j in arr) {
          result.push(arr[j]);
        }
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
