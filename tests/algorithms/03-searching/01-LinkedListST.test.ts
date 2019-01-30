/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { LinkedListST } from 'src/algorithms/03-searching/01-LinkedListST';

import 'mocha';
import assert = require('assert');

describe('Symbol Table Api Testing', () => {
    it('basic test', function () {
        let st = new LinkedListST();

        assert(st.contains(-1) === false);

        for (let i = 0; i < 10; ++i) {
            st.put(i*2, i*2);
        }

        assert(st.size() === 10);
        assert(st.get(0) === 0);
        assert(st.get(2) === 2);

        st.put(0, null);
        assert(st.size() === 9);

        st.delete(5);
        assert(st.size() === 9);

        st.delete(2);
        assert(st.size() === 8);
    });
});
