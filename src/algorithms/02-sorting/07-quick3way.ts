/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { exchange } from './helpers';

function sort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;

    let v = arr[lo];
    let lt = lo;
    let gt = hi;
    let i = lo + 1;

    while(i <= gt) {
        let compareTo = arr[i] - v;
        if (compareTo < 0) exchange(arr, i++, lt++);
        else if (compareTo > 0) exchange(arr, i, gt--);
        else i++;
    }

    sort(arr, lo, lt - 1);
    sort(arr, gt + 1, hi);
}

export default function ascQuick3WaySort(arr: number[]) {
    sort(arr, 0, arr.length - 1);
}