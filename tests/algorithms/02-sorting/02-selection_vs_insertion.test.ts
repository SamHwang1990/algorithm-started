/**
 * Created by samhwang1990@gmail.com.
 */

import ascInsertionSort from 'src/algorithms/02-sorting/02-insertion';
import ascSelectionSort from 'src/algorithms/02-sorting/01-selection';
import { ascSorted, randomIntArray, arrayPartialRandom, fillAscArray, fillDescArray, timeRecord } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Insertion Sort vs Selection Sort', () => {
    it('random array', function () {
        let srcArr = randomIntArray(10000);

        let selectionArr = Array.from(srcArr);
        let insertionArr = Array.from(srcArr);

        timeRecord(() => {
            ascSelectionSort(selectionArr);
        });

        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });

        assert(ascSorted(selectionArr));
        assert(ascSorted(insertionArr))
    });

    it('partial random array', function () {
        let srcArr = fillAscArray(10000);
        arrayPartialRandom(srcArr, 0.09);

        let selectionArr = Array.from(srcArr);
        let insertionArr = Array.from(srcArr);

        timeRecord(() => {
            ascSelectionSort(selectionArr);
        });

        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });

        assert(ascSorted(selectionArr));
        assert(ascSorted(insertionArr))
    });

    it('asc sorted array', function () {
        let srcArr = fillAscArray(10000);

        let selectionArr = Array.from(srcArr);
        let insertionArr = Array.from(srcArr);

        timeRecord(() => {
            ascSelectionSort(selectionArr);
        });

        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });

        assert(ascSorted(selectionArr));
        assert(ascSorted(insertionArr))
    });

    it('desc sorted array', function () {
        let srcArr = fillDescArray(10000);

        let selectionArr = Array.from(srcArr);
        let insertionArr = Array.from(srcArr);

        timeRecord(() => {
            ascSelectionSort(selectionArr);
        });

        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });

        assert(ascSorted(selectionArr));
        assert(ascSorted(insertionArr))
    });
})
