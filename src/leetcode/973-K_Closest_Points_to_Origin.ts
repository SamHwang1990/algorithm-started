/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * https://leetcode.com/problems/k-closest-points-to-origin/
 */

export function PQ_KClosestPointsToOrigin(points: number[][], k: number): number[][] {
    if (points.length < k) return points;

    let queue = new Array(k);
    let N = 0;
    
    function less(pointA, pointB) {
        return (Math.pow(pointA[0], 2) + Math.pow(pointA[1], 2)) < (Math.pow(pointB[0], 2) + Math.pow(pointB[1], 2));
    }

    function exchange(array, i, j) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
    }

    function swim(index) {
        if (index > k) return;

        while(index > 1) {
            let parent = Math.floor(index/2);
            if (less(queue[index - 1], queue[parent - 1])) {
                return;
            }

            exchange(queue, parent - 1, index - 1);
            index = parent;
        }
    }

    function sink(index) {
        while (2 * index <= k) {
            let i = 2 * index;
            if ((i + 1) <= k && less(queue[i-1], queue[i])) {
                i = i + 1;
            }

            if (less(queue[i - 1], queue[index - 1])) {
                break;
            }

            exchange(queue, index - 1, i - 1);
            index = i;
        }
    }

    function insert(item) {
        if (N < k) {
            queue[N++] = item;
            swim(N);
        } else if (less(item, queue[0])) {
            queue[0] = item;
            sink(1);
        }
    }

    for (let i = 0; i < points.length; ++i) {
        insert(points[i]);
    }

    return queue;
}