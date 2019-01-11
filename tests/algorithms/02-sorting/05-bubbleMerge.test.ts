/**
 * Created by samhwang1990@gmail.com.
 */

import ascBubbleMergeSort from 'src/algorithms/02-sorting/05-bubbleMerge';
import { randomIntArray, timeRecord, ascSorted } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Bubble Merge Sorting Test Suite', () => {
    it('basic test', function () {
        let arr = randomIntArray(10000);
        timeRecord(() => {
            ascBubbleMergeSort(arr);
        });
        assert(ascSorted(arr));
    });
});
