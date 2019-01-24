/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { TwoPointer_SquaresOfASortedArray } from 'src/leetcode/977-Squares_of_a_Sorted_Array';
import {timeRecord, ascSorted} from '../helpers';

import 'mocha';

import assert = require('assert');

describe('two pointer squares of a sorted array test case', () => {
    it('basic test', () => {
        let arr = [-7,-3,2,3,11];

        timeRecord(() => {
            arr = TwoPointer_SquaresOfASortedArray(arr);
        });

        assert(ascSorted(arr) === true);
    });
});