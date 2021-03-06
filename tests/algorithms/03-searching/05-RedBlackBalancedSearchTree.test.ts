/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { RedBlackBalancedSearchTree } from 'src/algorithms/03-searching/04-RedBlackBalancedSearchTree';
import {numberComparator} from './helpers/KeyComparator';

import 'mocha';
import assert = require('assert');

describe('Symbol Table Api Testing', () => {
    it('basic test', function () {
        let st = new RedBlackBalancedSearchTree(numberComparator);

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

        // st.put(0, null);
        // assert(st.size() === 9);
        //
        st.deleteMin();
        assert(st.size() === 9);
        assert(st.select(1) === 2);

        st.deleteMax();
        assert(st.size() === 8);
        assert(st.select(8) === 16);
        assert(st.max() === 16);

        st.delete(2);
        assert(st.size() === 7);
    });
});
