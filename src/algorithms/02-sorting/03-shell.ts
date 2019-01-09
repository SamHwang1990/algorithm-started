/**
 * Created by samhwang1990@gmail.com.
 */

import { less, exchange } from './helpers';

export default function ascShellSort(arr: number[]) {
    let size = arr.length;
    
    let h = 1;
    while(h < size/3) h = 3*h + 1;
    while (h >= 1) {
        for (let i = h - 1; i < size; ++i) {
            for (let j = i; j > h - 1; j-=h) {
                if (less(arr[j-h], arr[j])) break;

                exchange(arr, j, j-h);   
            }
        }
        
        h = Math.floor(h/3);
    }
}
