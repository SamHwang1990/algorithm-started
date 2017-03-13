/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const randomIntArray = require('../utils/randomArray').randomIntArray;

class SortBase {
  constructor(array = []) {
    this.array = array;
  }

  sort() {}

  less(x, y) {
    try {
      if (Object.prototype.toString.call(x.compare) === '[object Function]') {
        return x.compare(y) < 0;
      } else {
        return x < y;
      }
    } catch(e) {
      return false;
    }
  }

  exch(x, y) {
    let xValue = this.array[x];
    let yValue = this.array[y];

    this.array[x] = yValue;
    this.array[y] = xValue;
  }

  startWatch() {
    this.startTime = process.hrtime();
  }

  stopWatch() {
    let interval = process.hrtime(this.startTime);
    this.startTime = undefined;

    console.log(`run with ${interval[0]} seconds and ${interval[1]} nanoseconds.`);

    return interval;
  }

  isSorted() {
    for (let i = 0; i < this.array.length; ++i) {
      if (this.less(i + 1, i)) return false;
    }
    return true;
  }

  static main() {
    let testArr = randomIntArray(10, 100);

    console.log(`before sort: ${testArr}`);

    let sortInstance = new this(testArr);

    sortInstance.startWatch();
    sortInstance.sort();
    sortInstance.stopWatch();

    console.log(`is test arr sorted: ${sortInstance.isSorted()}`);
    console.log(`process memory usage: ${JSON.stringify(process.memoryUsage())}`);

    console.log(`after sort: ${testArr}`);
  }
}

module.exports = SortBase;