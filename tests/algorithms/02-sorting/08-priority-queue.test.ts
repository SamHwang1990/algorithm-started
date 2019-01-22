/**
 * Created by samhwang1990@gmail.com.
 */

import { ascSinkPriorityQueueSort } from 'src/algorithms/02-sorting/08-priority-queue';
import { randomIntArray, fillAscArray, arrayPartialRandom, timeRecord, ascSorted } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Priority Queue Sorting Test Suite', () => {
    it('swim basic test', function () {
        let arr = randomIntArray(100000);
        timeRecord(() => {
            ascSinkPriorityQueueSort(arr);
        });
        assert(ascSorted(arr));
    });

    // it('better performance source array', () => {
    //     let partialRandomArr = fillAscArray(10000000);
    //     arrayPartialRandom(partialRandomArr, .1);
    //
    //     timeRecord(() => {
    //         ascSwimPriorityQueueSort(partialRandomArr);
    //     });
    //     assert(ascSorted(partialRandomArr));
    // })
});
