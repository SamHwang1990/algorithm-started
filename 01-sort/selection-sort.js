/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const SortBase = require('./base');

class SelectionSort extends SortBase {
  constructor(...args) {
    super(...args);
  }

  sort() {
    let arrLength = this.array.length;

    for (let i = 0; i < arrLength; ++i) {
      for (let j = i + 1; j < arrLength; ++j) {
        if (this.less(this.array[j], this.array[i])) this.exch(i, j);
      }
    }
  }
}

module.exports = SelectionSort;

SelectionSort.main();