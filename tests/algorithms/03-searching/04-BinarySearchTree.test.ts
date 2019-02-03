/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { BinarySearchTree } from 'src/algorithms/03-searching/03-BinarySearchTree';
import {numberComparator, stringComparator} from './helpers/KeyComparator';

import 'mocha';
import assert = require('assert');
import {
    Leipzig100kCounter,
    Leipzig1mCounter,
    Leipzig300kCounter,
    TaleCounter,
    TnyTaleCounter
} from "./helpers/FrequencyCounter";

describe('Symbol Table Api Testing', () => {
    it('basic test', function () {
        let st = new BinarySearchTree(numberComparator);

        assert(st.contains(-1) === false);

        for (let i = 0; i < 10; ++i) {
            st.put(i*2, i*2);
        }

        assert(st.size() === 10);
        assert(st.get(0) === 0);
        assert(st.get(2) === 2);

        assert(st.rank(7) === 4);

        // assert(st.size(4,7) === 2);
        // assert(st.size(4,8) === 3);

        assert(st.select(6) === 10);
        assert(st.rank(12) === 6);

        assert(st.floor(7) === 6);
        assert(st.ceiling(7) === 8);

        assert(st.max() === 18);
        assert(st.min() === 0);

        st.put(0, null);
        assert(st.size() === 9);

        st.deleteMin();
        assert(st.size() === 8);
        assert(st.select(1) === 4);
    });
});

describe('Binary Search Ordered Symbol Table Test Suite', () => {
    it('TnyTaleCounter test', async function () {
        await TnyTaleCounter.exec(new BinarySearchTree(stringComparator), 1);
    });
    it('TaleCounter test', async function () {
        await TaleCounter.exec(new BinarySearchTree(stringComparator), 8);
    });
    it('Leipzig100kCounter test', async function () {
        await Leipzig100kCounter.exec(new BinarySearchTree(stringComparator), 10);
    });
    it('Leipzig300kCounter test', async function () {
        await Leipzig300kCounter.exec(new BinarySearchTree(stringComparator), 10);
    });
    it('Leipzig1mCounter test', async function () {
        await Leipzig1mCounter.exec(new BinarySearchTree(stringComparator), 10);
    });
});
