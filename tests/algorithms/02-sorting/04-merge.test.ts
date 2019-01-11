/**
 * Created by samhwang1990@gmail.com.
 */

import ascMergeSort from 'src/algorithms/02-sorting/04-merge';
import { randomIntArray, timeRecord, ascSorted } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Merge Sorting Test Suite', () => {
    it('basic test', function () {
        let arr = randomIntArray(10000);
        timeRecord(() => {
            ascMergeSort(arr);
        });
        assert(ascSorted(arr));
    });
});
