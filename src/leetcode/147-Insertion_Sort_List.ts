/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * https://leetcode.com/problems/insertion-sort-list/
 */

export function insertionSortList(head) {
    if (head.next == null) return head;

    let node = head.next;
    let prev = head;

    while(node != null) {
        let next = node.next;

        if (node.val > prev.val) {
            prev = node;
            node = next;
            continue;
        }

        prev.next = next;
        node.next = head;
        head = node;

        let sortPrev = null;
        let sortNode = node;
        while (true) {
            let sortNextNode = sortNode.next;

            if (sortNextNode === next) {
                prev = sortNode;
                break;
            }
            if (sortNode.val < sortNextNode.val) break;

            if (sortPrev != null) {
                sortPrev.next = sortNextNode;
            } else {
                head = sortNextNode;
            }

            sortNode.next = sortNextNode.next;
            sortNextNode.next = sortNode;
            sortPrev = sortNextNode;
        }

        node = next;
    }

    return head;
}