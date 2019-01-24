/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { quickSortColor } from 'src/leetcode/75-sort_colors';
import {timeRecord} from '../helpers';

import 'mocha';

describe('sort colors test case', () => {
    it('basic test', () => {
        let arr = [2,2,2,2,0,2,0,0,2,1,1,2,1,1,0,0,0,0];

        timeRecord(() => {
            quickSortColor(arr);
        });

        console.log('expected', [0,0,1,1,2,2]);
        console.log(arr);
    });
});