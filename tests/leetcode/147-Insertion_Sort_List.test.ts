/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { insertionSortList } from 'src/leetcode/147-Insertion_Sort_List';
import {timeRecord} from '../helpers';

import 'mocha';

describe('insertion sort list test case', () => {
    it('basic test', () => {
        let head = {val: -1, next: {val: 5, next: {val: 3, next: {val: 4, next: { val: 0, next: null }}}}};

        timeRecord(() => {
            head = insertionSortList(head);
        });

        console.log(head);
    });
});