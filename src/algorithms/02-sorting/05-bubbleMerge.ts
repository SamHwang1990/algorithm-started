/**
 * Created by zhiyuan.huang@ddder.net.
 */
import {less, merge} from "./helpers";

export default function ascBubbleMergeSort(arr: number[]) {
    for (let i = 1; i < arr.length; i*=2) {
        for (let j = 0; j < arr.length;) {
            let mid = Math.min(j + i, arr.length - 1) - 1;
            let high = Math.min(mid + i, arr.length - 1);
            merge(arr, j, mid, high);
            j = high + 1;
        }
    }
}