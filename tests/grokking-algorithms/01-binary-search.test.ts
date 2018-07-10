/**
 * Created by samhwang1990@gmail.com.
 */

import binarySearch from 'src/grokking-algorithms/01-binary-search';

import 'mocha';

import assert = require('assert');

describe('binary-search test case', () => {
    it('desc sorted numeric array', () => {
        let descSortedArray = [1000, 300, 250, 99, 77, 10, 3, 2, 1];

        for (let i = 0; i < descSortedArray.length; ++i) {
            assert(binarySearch(descSortedArray, descSortedArray[i]) === i);
        }

        assert(binarySearch(descSortedArray, 999) === -1);
    });

    it('asc sorted numeric array', () => {
        let ascSortedArray = [1, 2, 3, 10, 77, 99, 250, 300, 1000];

        for (let i = 0; i < ascSortedArray.length; ++i) {
            assert(binarySearch(ascSortedArray, ascSortedArray[i]) === i);
        }

        assert(binarySearch(ascSortedArray, 999) === -1);
    });

    it('invalid sorted array', () => {
        assert(binarySearch(undefined, 1) === -1);
    });

    it('empty sorted array', () => {
        assert(binarySearch([], 1) === -1);
    });

    it('invalid target number', () => {
        assert(binarySearch([1, 2], undefined) === -1);
    });
});