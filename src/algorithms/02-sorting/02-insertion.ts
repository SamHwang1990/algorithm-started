/**
 * Created by samhwang1990@gmail.com.
 */

import { exchange, less } from './helpers';

export default function ascInsertionSort(arr: number[]) {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (less(arr[j-1], arr[j])) break;
            exchange(arr, j-1, j);
        }
    }
}
