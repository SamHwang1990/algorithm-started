/**
 * Created by samhwang1990@gmail.com.
 */

import { less, exchange } from './helpers';

// 原地选择排序
export default function ascSelectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; ++i) {
        let min = i;
        for (let j = i; j < arr.length; ++j) {
            if (less(arr[j], arr[min])) {
                min = j;
            }
        }
        
        if (min != i) {
            exchange(arr, min, i);   
        }
    }
}
