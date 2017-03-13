/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const SortBase = require('./base');

class MergeSort extends SortBase {
  constructor(...args) {
    super(...args);
  }

  merge(lo, mid, hi) {
    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; ++k) {
      this.aux[k] = this.array[k];
    }

    for (let k = lo; k <= hi; ++k) {
      if (i > mid) {
        this.array[k] = this.aux[j++];
      } else if (j > hi) {
        this.array[k] = this.aux[i++];
      } else if (this.less(this.aux[j], this.aux[i])) {
        this.array[k] = this.aux[j++];
      } else {
        this.array[k] = this.aux[i++];
      }
    }

  }

  sort() {
    let arrLength = this.array.length;
    let aux;
    if (arrLength <= 1) {
      aux = new Array;
      aux.length = arrLength;
    } else {
      aux = new Array(arrLength);
    }

    this.aux = aux;
    this._sort(0, arrLength - 1);
  }

  _sort(lo, hi) {
    if (hi <= lo) return;

    let mid = parseInt(lo + (hi - lo)/2, 10);
    this._sort(lo, mid);
    this._sort(mid + 1, hi);
    this.merge(lo, mid, hi);
  }
}

module.exports = MergeSort;

MergeSort.main();