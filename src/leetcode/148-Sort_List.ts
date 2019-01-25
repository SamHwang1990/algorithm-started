/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * https://leetcode.com/problems/sort-list/
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

export function sortList(head) {
    if (head == null || head.next == null) return head;

    return sort(head, null);
}

// 这里的 quick sort 递归没办法进行尾递归优化，导致调用堆栈过长，空间复杂度为 o(nlgn)
function sort(head, end) {
    if (!head || head.next == null || head === end || head.next === end) return head;

    let lo = head;
    let hi = head;

    let helper = new ListNode(null);
    helper.next = head;

    let refVal = head.val;
    let node = hi.next;
    let prevNode = hi;
    while(node != null && node !== end) {
        let nextNode = node.next;
        if (node.val < refVal) {
            prevNode.next = nextNode;
            node.next = helper.next;
            helper.next = node;
            node = nextNode;
        } else if (node.val === refVal) {
            if (hi !== prevNode) {
                prevNode.next = nextNode;
                node.next = hi.next;
                hi.next = node;
            } else {
                prevNode = node;
            }
            hi = node;
            node = nextNode;
        } else {
            prevNode = node;
            node = nextNode;
        }
    }

    hi.next = sort(hi.next, end);
    return sort(helper.next, lo);
}

// bottom-to-up 的归并排序，时间复杂度仍为 n(nlgn)，但因为没有递归，所以没有过长的堆栈，空间复杂度为 o(1)
// base on: https://leetcode.com/problems/sort-list/discuss/46712/Bottom-to-up(not-recurring)-with-o(1)-space-complextity-and-o(nlgn)-time-complextity
// 思路大致上是：
// 1. 按 step 分割链表，step 递增速度为 step*step，1 -> 2 -> 4 -> 8
// 2. 每次对链表分割后，对前后一对的链表进行合并排序
export function magicBubbleSortList(head) {
    if (head == null || head.next == null) return head;

    let length = 0;
    let cur = head;
    let dummyNode = new ListNode(null);
    dummyNode.next = head;

    while(cur) {
        ++length;
        cur = cur.next;
    }

    let left, right, tail;
    for (let step = 1; step < length; step <<= 1) {
        cur = dummyNode.next;
        tail = dummyNode;
        while(cur) {
            left = cur;
            right = split(left, step);
            cur = split(right, step);
            tail = merge(left, right, tail);
        }
    }

    return dummyNode.next;
}

function split(head, n) {
    for (let i = 1; head && i < n; ++i) head = head.next;

    if (!head) return null;

    let right = head.next;
    head.next = null;
    return right;
}

function merge(l1, l2, head) {
    let cur = head;

    while(l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            cur = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            cur = l2;
            l2 = l2.next;
        }
    }

    cur.next = l1 ? l1 : l2;

    while(cur.next) { cur = cur.next; }

    return cur;
}