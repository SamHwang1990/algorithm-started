/**
 * Created by zhiyuan.huang@ddder.net.
 */

import sortArrayByParityII from 'src/leetcode/922-Sort_Array_By_Parity_II';
import {randomIntArray, timeRecord} from '../helpers';

import 'mocha';

import assert = require('assert');

function isArraySortByParityII(arr: number[]): boolean {
    for (let i = 0; i < arr.length; ++i) {
        if (i%2 !== arr[i]%2) return false;
    }

    return true;
}

describe('sort array by parity II test case', () => {
    it('basic test', () => {
        let arr = [4,6,1,7,8,2,1,3,5,2];

        timeRecord(() => {
            arr = sortArrayByParityII(arr);
        });

        assert(isArraySortByParityII(arr) === true);
    });
});