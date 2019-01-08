/**
 * Created by samhwang1990@gmail.com.
 */

import ascSelectionSort from 'src/algorithms/02-sorting/01-selection';
import { timeRecord, ascSorted, randomIntArray } from '../../helpers';
import assert = require('assert');

import 'mocha';

describe('asc selection sort test case', () => {
    it('basic asc sorted', function () {
        let arr = randomIntArray(1000);
        
        timeRecord(() => {
            ascSelectionSort(arr);  
        });
        
        assert(ascSorted(arr) === true);
    });
});
