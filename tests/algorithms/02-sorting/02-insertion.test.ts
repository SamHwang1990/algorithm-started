/**
 * Created by samhwang1990@gmail.com.
 */

import ascInsertionSort from 'src/algorithms/02-sorting/02-insertion';
import ascSelectionSort from 'src/algorithms/02-sorting/01-selection';
import { ascSorted, randomIntArray, arrayPartialRandom, fillAscArray, fillDescArray, timeRecord } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Insertion Sort Test Case', function () {
    it('basic asc test', function () {
        let arr = randomIntArray(10000);
        
        timeRecord(() => {
            ascInsertionSort(arr);
        })
        
        assert(ascSorted(arr));
    });
})
