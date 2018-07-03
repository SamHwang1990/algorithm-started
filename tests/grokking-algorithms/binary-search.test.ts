/**
 * Created by samhwang1990@gmail.com.
 */

import binarySearch from 'src/grokking-algorithms/binary-search';

import 'mocha';

import assert = require('assert');

describe('binary-search test case', () => {
    it('desc sorted numeric array', () => {
        assert(binarySearch([1000, 300, 250, 99, 77, 10, 3, 2, 1], 2) === 7);
    })
});