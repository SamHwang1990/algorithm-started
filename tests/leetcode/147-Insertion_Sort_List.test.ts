/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { insertionSortList } from 'src/leetcode/147-Insertion_Sort_List';
import {timeRecord, arrayToList, listToArray} from '../helpers';

import 'mocha';
import assert = require('assert');

describe('insertion sort list test case', () => {
    it('basic test', () => {
        let source = [-84,142,41,-17,-71,170,186,183,-21,-76,76,10,29,81,112,-39,-6,-43,58,41,111,33,69,97,-38,82,-44,-7,99,135,42,150,149,-21,-30,164,153,92,180,-61,99,-81,147,109,34,98,14,178,105,5,43,46,40,-37,23,16,123,-53,34,192,-73,94,39,96,115,88,-31,-96,106,131,64,189,-91,-34,-56,-22,105,104,22,-31,-43,90,96,65,-85,184,85,90,118,152,-31,161,22,104,-85,160,120,-31,144,115];

        let head = arrayToList(source);
        timeRecord(() => {
            head = insertionSortList(head);
        });

        console.log(listToArray(head));
        assert(listToArray(head).length === source.length);
    });
});