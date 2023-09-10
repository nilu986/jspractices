// Map Method - getMyMap

/* Array.prototype.getMyMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

let arr = [12, 532, 41, 11];
console.log(arr.getMyMap((x) => x * 2)); */

// Filter Method - getMyFilter

/* Array.prototype.getMyFilter = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
let arr = [32, 11, 345, 87];
console.log(arr.getMyFilter((x) => x > 40)); */

// Find method - getMyFind

/* Array.prototype.getMyFind = function (callback) {
  if (this.length <= 0) {
    return;
  }
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let arr = [];
console.log(arr.getMyFind((x) => x > 100)); */

// Array Reduce method - getMyReduce

/* Array.prototype.getMyReduce = function (callback, initialVal) {
  let acc = initialVal;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }
  return acc;
};
let arr = [12, 5, 8, 10];
let sumofArr = arr.getMyReduce((acc, item, index, arr) => {
  return (acc += item);
}, 0);
console.log(sumofArr); */

// Array Sort Method - Mysort

/* Array.prototype.mySort = function () {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < this.length; i++) {
      if (this[i - 1] > this[i]) {
        done = false;
        let temp = this[i - 1];
        this[i - 1] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
};

let arr = [23, 43, 12, 89, 32, 12, 55];
console.log(arr.mySort()); */

// Flaten Array without flat or inbuilt methods
//let arrFlat = [1, 34, [45, 67, 32, [12, 35, 9, [2, 65, 46]]]];
/*let arr = [];
 Array.prototype.getFlatten = function () {
  for (let i = 0; i < this.length; i++) {
    if (Object.prototype.toString.call(this[i]) === '[object Array]') {
      this.getFlatten.call(this[i]);
    } else {
      arr.push(this[i]);
    }
  }
  return arr;
}; 
//console.log(arrFlat.getFlatten());
// two dimensional arr
let flatted = arrFlat.flatMap((item) =>
  Array.isArray(item) ? item.flat() : item
);
console.log(flatted); */
// Using Reduce
/* Array.prototype.getFlattenArr = function () {
  return this.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? curr.getFlattenArr() : curr);
  }, []);
};
console.log(arrFlat.getFlattenArr()); */
