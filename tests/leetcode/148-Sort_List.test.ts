/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { ascSinkPriorityQueueSort } from 'src/algorithms/02-sorting/08-priority-queue';
import { sortList, magicBubbleSortList } from 'src/leetcode/148-Sort_List';
import {timeRecord, arrayToList, listToArray, randomIntArray, fillAscArray, fillDescArray} from '../helpers';

import 'mocha';
import assert = require('assert');

describe('insertion sort list test case', () => {
    it('basic test', () => {
        // let source = randomIntArray(10000000);
        // let source = new Array(10000000).fill(1, 0, 10000000);
        // let source = fillDescArray(1000);

        let source = [-84,142,41,-17,-71,170,186,183,-21,-76,76,10,29,81,112,-39,-6,-43,58,41,111,33,69,97,-38,82,-44,-7,99,135,42,150,149,-21,-30,164,153,92,180,-61,99,-81,147,109,34,98,14,178,105,5,43,46,40,-37,23,16,123,-53,34,192,-73,94,39,96,115,88,-31,-96,106,131,64,189,-91,-34,-56,-22,105,104,22,-31,-43,90,96,65,-85,184,85,90,118,152,-31,161,22,104,-85,160,120,-31,144,115];
        let expect = [-96,-91,-85,-85,-84,-81,-76,-73,-71,-61,-56,-53,-44,-43,-43,-39,-38,-37,-34,-31,-31,-31,-31,-30,-22,-21,-21,-17,-7,-6,5,10,14,16,22,22,23,29,33,34,34,39,40,41,41,42,43,46,58,64,65,69,76,81,82,85,88,90,90,92,94,96,96,97,98,99,99,104,104,105,105,106,109,111,112,115,115,118,120,123,131,135,142,144,147,149,150,152,153,160,161,164,170,178,180,183,184,186,189,192];

        let head = arrayToList(source);

        timeRecord(() => {
            head = sortList(head);
        });

        // console.log(listToArray(head));
        // ascSinkPriorityQueueSort(source);
        assert(JSON.stringify(listToArray(head)) === JSON.stringify(expect));
    });
});