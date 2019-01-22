/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { less, exchange } from './helpers';

export function ascSinkPriorityQueueSort(arr: number[]) {
    let n = arr.length;

    for (let k = Math.floor(n/2); k >= 1; k--) {
        sink(arr, k, n);
    }

    while(n >= 1) {
        exchange(arr, 0, --n);
        sink(arr, 1, n);
    }
}

function sink(arr: number[], k: number, end: number) {
    if (k >= end) return;

    while(2*k <= end) {
        let j = 2*k - 1;

        if (j + 1 < end && less(arr[j], arr[j+1])) {
            j = j + 1;
        }

        if (less(arr[j], arr[k - 1])) break;
        exchange(arr, j, k - 1);
        k = j + 1;
    }
}