/**
 * Created by zhiyuan.huang@ddder.net.
 */


import { LinkedListST } from 'src/algorithms/03-searching/01-LinkedListST';
import { BinarySearchST } from 'src/algorithms/03-searching/02-BinarySearchOrderedST';
import {
    TnyTaleCounter,
    TaleCounter,
    Leipzig300kCounter,
    Leipzig100kCounter,
    Leipzig1mCounter,
} from './helpers/FrequencyCounter';

import { stringComparator } from './helpers/KeyComparator';

import 'mocha';

describe('Linked List Symbol Table Test Suite', () => {
    it('TnyTaleCounter test', async function () {
        await TnyTaleCounter.exec(new LinkedListST(), 1);
    });
    it('TaleCounter test', async function () {
        await TaleCounter.exec(new LinkedListST(), 8);
    });
    it('Leipzig100kCounter test', async function () {
        await Leipzig100kCounter.exec(new LinkedListST(), 10);
    });
    it('Leipzig300kCounter test', async function () {
        await Leipzig300kCounter.exec(new LinkedListST(), 10);
    });
    // it('Leipzig1mCounter test', async function () {
    //     await Leipzig1mCounter.exec(new LinkedListST(), 10);
    // });
});

describe('Binary Search Ordered Symbol Table Test Suite', () => {
    it('TnyTaleCounter test', async function () {
        await TnyTaleCounter.exec(new BinarySearchST(stringComparator), 1);
    });
    it('TaleCounter test', async function () {
        await TaleCounter.exec(new BinarySearchST(stringComparator), 8);
    });
    it('Leipzig100kCounter test', async function () {
        await Leipzig100kCounter.exec(new BinarySearchST(stringComparator), 10);
    });
    it('Leipzig300kCounter test', async function () {
        await Leipzig300kCounter.exec(new BinarySearchST(stringComparator), 10);
    });
    it('Leipzig1mCounter test', async function () {
        await Leipzig1mCounter.exec(new BinarySearchST(stringComparator), 10);
    });
});
