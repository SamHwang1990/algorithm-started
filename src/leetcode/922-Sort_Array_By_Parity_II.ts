/**
 * Created by zhiyuan.huang@ddder.net.
 */

function exchange(arr: any[], i: number, j: number) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function isOdd(v): boolean {
    return v % 2 !== 0;
}

function sort(arr: number[], lo: number, hi: number) {
    if (lo >= hi) return;

    let i = lo;

    while (i <= hi) {
        if (isOdd(arr[i]) === isOdd(lo)) exchange(arr, lo++, i++);
        else if (isOdd(arr[i]) === isOdd(hi)) exchange(arr, i, hi--);
        else ++i;
    }

    sort(arr, lo, hi);
}

// 原地排序
function sortArrayByParityII_1(arr: number[]) {
    sort(arr, 0, arr.length - 1);
}

// 非原地排序
export default function sortArrayByParityII_2(arr: number[]): number[] {
    let result = new Array(arr.length);

    let odd = 1;
    let even = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] & 1) {
            result[odd] = arr[i];
            odd+=2;
        } else {
            result[even] = arr[i];
            even+=2;
        }
    }

    return result;
}