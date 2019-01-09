/**
 * Created by samhwang1990@gmail.com.
 */

import ascInsertionSort from 'src/algorithms/02-sorting/02-insertion';
import ascShellSort from 'src/algorithms/02-sorting/03-shell';
import ascSelectionSort from 'src/algorithms/02-sorting/01-selection';
import { ascSorted, randomIntArray, arrayPartialRandom, fillAscArray, fillDescArray, timeRecord } from '../../helpers';

import 'mocha';
import assert = require('assert');

describe('Insertion Sort vs Shell Sort', () => {
    it('random array', function () {
        let srcArr = randomIntArray(100000);
        
        let insertionArr = Array.from(srcArr);
        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });
        assert(ascSorted(insertionArr))

        let shellArr = Array.from(srcArr);
        timeRecord(() => {
            ascShellSort(shellArr);
        });
        assert(ascSorted(shellArr));

        let selectionArr = Array.from(srcArr);
        timeRecord(() => {
            ascSelectionSort(selectionArr)
        })
        assert(ascSorted(selectionArr));
    });

    it('partial random array', function () {
        let srcArr = fillAscArray(100000);
        arrayPartialRandom(srcArr, 0.09);

        let insertionArr = Array.from(srcArr);
        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });
        assert(ascSorted(insertionArr))

        let shellArr = Array.from(srcArr);
        timeRecord(() => {
            ascShellSort(shellArr);
        });
        assert(ascSorted(shellArr));

        let selectionArr = Array.from(srcArr);
        timeRecord(() => {
            ascSelectionSort(selectionArr)
        })
        assert(ascSorted(selectionArr));
    });

    it('asc sorted array', function () {
        let srcArr = fillAscArray(100000);

        let insertionArr = Array.from(srcArr);
        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });
        assert(ascSorted(insertionArr))

        let shellArr = Array.from(srcArr);
        timeRecord(() => {
            ascShellSort(shellArr);
        });
        assert(ascSorted(shellArr));

        let selectionArr = Array.from(srcArr);
        timeRecord(() => {
            ascSelectionSort(selectionArr)
        })
        assert(ascSorted(selectionArr));
    });

    it('desc sorted array', function () {
        let srcArr = fillDescArray(100000);

        let insertionArr = Array.from(srcArr);
        timeRecord(() => {
            ascInsertionSort(insertionArr);
        });
        assert(ascSorted(insertionArr))

        let shellArr = Array.from(srcArr);
        timeRecord(() => {
            ascShellSort(shellArr);
        });
        assert(ascSorted(shellArr));

        let selectionArr = Array.from(srcArr);
        timeRecord(() => {
            ascSelectionSort(selectionArr)
        })
        assert(ascSorted(selectionArr));
    });
})
