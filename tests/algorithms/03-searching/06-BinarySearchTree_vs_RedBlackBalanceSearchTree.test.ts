/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { BinarySearchTree } from 'src/algorithms/03-searching/03-BinarySearchTree';
import { RedBlackBalancedSearchTree } from 'src/algorithms/03-searching/04-RedBlackBalancedSearchTree';
import {
    TnyTaleCounter,
    TaleCounter,
    Leipzig300kCounter,
    Leipzig100kCounter,
    Leipzig1mCounter,
} from './helpers/FrequencyCounter';

import { stringComparator } from './helpers/KeyComparator';

import 'mocha';

describe('Binary Search tree Test Suite', () => {
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

describe('Red-Black Balanced Search Tree Test Suite', () => {
    it('TnyTaleCounter test', async function () {
        await TnyTaleCounter.exec(new RedBlackBalancedSearchTree(stringComparator), 1);
    });
    it('TaleCounter test', async function () {
        await TaleCounter.exec(new RedBlackBalancedSearchTree(stringComparator), 8);
    });
    it('Leipzig100kCounter test', async function () {
        await Leipzig100kCounter.exec(new RedBlackBalancedSearchTree(stringComparator), 10);
    });
    it('Leipzig300kCounter test', async function () {
        await Leipzig300kCounter.exec(new RedBlackBalancedSearchTree(stringComparator), 10);
    });
    it('Leipzig1mCounter test', async function () {
        await Leipzig1mCounter.exec(new RedBlackBalancedSearchTree(stringComparator), 10);
    });
});
