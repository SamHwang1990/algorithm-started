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
