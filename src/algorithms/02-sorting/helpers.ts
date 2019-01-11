/**
 * Created by samhwang1990@gmail.com.
 */

export function exchange(arr: any[], i: number, j: number) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

export function less(i: any, j: any): boolean {
    if (i == undefined) return false;
    if (j == undefined) return false;
    
    return i < j;
}

export function merge(arr: any[], low: number, mid: number, high: number) {
    if (low >= high) return;

    let i = low,
        j = mid + 1;

    let helperArr = new Array(arr.length);
    for (let i = low; i <= high; ++i) {
        helperArr[i] = arr[i];
    }

    for (let k = low; k <= high; ++k) {
        if (i > mid) arr[k] = helperArr[j++];
        else if (j > high) arr[k] = helperArr[i++];
        else if (less(helperArr[i], helperArr[j])) arr[k] = helperArr[i++];
        else arr[k] = helperArr[j++];
    }
}