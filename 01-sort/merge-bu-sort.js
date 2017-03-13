/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const MergeSort = require('./merge-sort');

class MergeBuSort extends MergeSort {
  _sort(/*lo, hi*/) {
    let arrLength = this.array.length;

    for (let sz = 1; sz < arrLength; sz = sz + sz) {
      for (let lo = 0; lo < arrLength - sz; lo = lo + sz + sz) {
        this.merge(lo, lo + sz - 1, Math.min(lo + sz + sz - 1, arrLength - 1));
      }
    }
  }
}

module.exports = MergeBuSort;

MergeBuSort.main();