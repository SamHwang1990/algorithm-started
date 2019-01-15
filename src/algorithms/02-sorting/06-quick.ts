/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { less, exchange } from './helpers';

function partition(arr: number[], lo: number, hi: number): number {
    if (lo >= hi) return lo;

    let v = arr[lo];
    let lt = lo;
    let gt = hi + 1;

    while (true) {
        while (less(arr[++lt], v)) if (lt === hi) break;
        while (less(v, arr[--gt])) if (gt === lo) break;
        if (lt >= gt) break;
        exchange(arr, lt, gt);
    }

    exchange(arr, lo, gt);

    return gt;
}

function sort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;
    let j = partition(arr, lo, hi);
    sort(arr, lo, j - 1);
    sort(arr, j + 1, hi);
}

export default function ascQuickSort(arr: number[]) {
    if (!arr || !arr.length) return;

    sort(arr, 0, arr.length - 1);
}