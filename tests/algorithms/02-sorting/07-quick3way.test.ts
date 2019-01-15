/**
 * Created by samhwang1990@gmail.com.
 */

import ascQuickSort from 'src/algorithms/02-sorting/07-quick3way';
import { randomIntArray, fillAscArray, arrayPartialRandom, timeRecord, ascSorted } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Quick 3 way Sorting Test Suite', () => {
    it('basic test', function () {
        let arr = randomIntArray(10000000);
        timeRecord(() => {
            ascQuickSort(arr);
        });
        assert(ascSorted(arr));
    });

    it('bad performance source array', () => {
        let partialRandomArr = fillAscArray(10000000);
        arrayPartialRandom(partialRandomArr, .1);

        timeRecord(() => {
            ascQuickSort(partialRandomArr);
        });
        assert(ascSorted(partialRandomArr));
    })
});
