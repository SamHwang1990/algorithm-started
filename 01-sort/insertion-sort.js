/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const SortBase = require('./base');

class InsertionSort extends SortBase {
  constructor(...args) {
    super(...args);
  }

  sort() {
    let arrLength = this.array.length;

    for (let i = 1; i < arrLength; ++i) {
      for (let j = i; j > 0 && this.less(this.array[j], this.array[j - 1]); --j) {
        this.exch(j-1, j);
      }
    }
  }
}

module.exports = InsertionSort;

InsertionSort.main();