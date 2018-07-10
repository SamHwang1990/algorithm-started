/**
 * Created by samhwang1990@gmail.com.
 */

import LinkList from 'src/grokking-algorithms/03-linked-list';

import assert = require('assert');
import 'mocha';

describe('LinkedList Test Case', () => {
    it('append and existIn, then delete', function () {
        let list = new LinkList();

        list.append(1);
        assert(list.existIn(1) === true);
        assert(list.existIn(2) === false);

        list.delete(1);
        assert(list.existIn(1) === false);
    });

    it('prepend and existIn, then delete', function () {
        let list = new LinkList();

        list.prepend(1);
        assert(list.existIn(1) === true);
        assert(list.existIn(2) === false);

        list.delete(1);
        assert(list.existIn(1) === false);
    });

    it('iterate list', function () {
        let list = new LinkList();
        list.append(3);
        list.prepend(2);
        list.prepend(1);

        let listArray = Array.from(list);
        assert(listArray[0] === 1);
        assert(listArray[1] === 2);
        assert(listArray[2] === 3);
    })

});