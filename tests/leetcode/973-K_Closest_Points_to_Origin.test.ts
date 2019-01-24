/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { PQ_KClosestPointsToOrigin } from 'src/leetcode/973-K_Closest_Points_to_Origin';
import {randomIntArray, timeRecord} from '../helpers';

import 'mocha';

import assert = require('assert');

describe('k closest points to origin test case', () => {
    it('basic test', () => {
        let arr = [[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]];

        // Expected: [[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]

        timeRecord(() => {
            arr = PQ_KClosestPointsToOrigin(arr, 5);
        });

        console.log(arr);
    });
});