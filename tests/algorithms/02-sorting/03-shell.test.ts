/**
 * Created by samhwang1990@gmail.com.
 */

import ascShellSort from 'src/algorithms/02-sorting/03-shell';
import { randomIntArray, timeRecord, ascSorted } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Shell Sorting Test Suite', () => {
    it('basic test', function () {
        let arr = randomIntArray(10);
        timeRecord(() => {
            ascShellSort(arr);
        });
        assert(ascSorted(arr));
    });
});
