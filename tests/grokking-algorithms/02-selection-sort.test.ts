/**
 * Created by samhwang1990@gmail.com.
 */

import selectionAscSort from 'src/grokking-algorithms/02-selection-sort';
import assert = require('assert');

import 'mocha';

describe('selection asc sort test case', () => {
    it('basic test', () => {
        let arr = [3, 100, 50, 7, 90, 80, -4];

        selectionAscSort(arr);
        assert(arr[0] === -4);
        assert(arr[1] === 3);
        assert(arr[2] === 7);
        assert(arr[3] === 50);
        assert(arr[4] === 80);
        assert(arr[5] === 90);
        assert(arr[6] === 100);
    })
});