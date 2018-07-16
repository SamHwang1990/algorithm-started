/**
 * Created by samhwang1990@gmail.com.
 */

import breadthFirstSearch, { RelationGraph, QueueItem } from 'src/grokking-algorithms/06-breadth-first-search';

import assert = require('assert');

import 'mocha';

describe('Breadth First Search Test Case', () => {
    it('base test case', () => {
        const graph: RelationGraph = {
            a: ['b', 'f', 'q'],
            b: ['c', 'z', 'f', 'j'],
            f: ['m', 'k', 'o', 'e', 'c'],
            q: ['a', 'p', 'i', 'h', 'd', 'j'],
            c: ['f', 'g', 'v', 'w', 't', 'u', 'y'],
            e: ['c', 'x'],
        };

        assert(breadthFirstSearch(graph, 'a', 'f') === true);
        assert(breadthFirstSearch(graph, 'a', 'g') === true);
        assert(breadthFirstSearch(graph, 'a', 'g') === true);
        assert(breadthFirstSearch(graph, 'a', 'x') === true);

        assert(breadthFirstSearch(graph, 'f', 'a') === false);
        assert(breadthFirstSearch(graph, 'f', 'b') === false);
    });
});