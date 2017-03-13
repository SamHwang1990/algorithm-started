/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

function randomIntArray(size, max = 100) {
  let arr = new Array(size);
  for (let i = 0; i < size; ++i) {
    arr[i] = parseInt(Math.random() * max, 10);
  }
  return arr;
}

module.exports = {
  randomIntArray
};