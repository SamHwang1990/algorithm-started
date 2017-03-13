/**
 * Created by samhwang1990@gmail.com on 17/3/13.
 */

'use strict';

const randomIntArray = require('../utils/randomArray').randomIntArray;

function reverseArray(arr = []) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength/2; ++i) {
    let valueLeft = arr[i];
    let valueRight = arr[arrLength - 1 - i];
    arr[i] = valueRight;
    arr[arrLength - 1 - i] = valueLeft;
  }
}

let arr = randomIntArray(9, 100);

console.log(`source arr: ${arr}`);

reverseArray(arr);

console.log(`dist arr: ${arr}`);

