/**
 * Created by samhwang1990@gmail.com.
 */

import { merge } from './helpers';

function mergeSort(arr: number[], start: number, end: number) {
    if (start >= end) return;

    let mid = start + Math.floor((end - start)/2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
}

export default function ascMergeSort(arr: number[]) {
    mergeSort(arr, 0, arr.length - 1);
}