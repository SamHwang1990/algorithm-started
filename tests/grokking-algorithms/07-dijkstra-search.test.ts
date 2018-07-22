/**
 * Created by samhwang1990@gmail.com.
 */

import dijkstraSearch, { RelationGraph } from 'src/grokking-algorithms/07-dijkstra-search';

import assert = require('assert');
import 'mocha';

describe('dijkstra algorithm test case', () => {
    it('exchange test case', function () {
        let relationGraph: RelationGraph = {
            musicScore: {
                vinylRecord: 5,
                poster: 0,
            },
            vinylRecord: {
                bassGuitar: 15,
                drum: 20,
            },
            poster: {
                drum: 35,
                bassGuitar: 30,
            },
            drum: {
                piano: 10,
            },
            bassGuitar: {
                piano: 20,
            },
        };

        let exchangeChain = dijkstraSearch(relationGraph, 'musicScore', 'piano');

        assert(exchangeChain.length === 4);

        assert(exchangeChain[0].name === 'musicScore');
        assert(exchangeChain[0].cost == null);

        assert(exchangeChain[1].name === 'vinylRecord');
        assert(exchangeChain[1].cost === 5);

        assert(exchangeChain[2].name === 'drum');
        assert(exchangeChain[2].cost === 20);

        assert(exchangeChain[3].name === 'piano');
        assert(exchangeChain[3].cost === 10);
    });
});