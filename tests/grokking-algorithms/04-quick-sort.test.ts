/**
 * Created by samhwang1990@gmail.com.
 */

import quickAscSort from 'src/grokking-algorithms/04-quick-sort';

import assert = require('assert');
import 'mocha';

describe('Asc Quick Sort test case', () => {
    it('Basic Test', () => {
        let oriArr = [3, 90, 84, -1000, 100.1, 33, 49];
        let sortArr = quickAscSort(oriArr);

        assert(sortArr.join(',') === '-1000,3,33,49,84,90,100.1');
    })
});