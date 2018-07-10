/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 数值型数组的顺序快速排序实现
 * */

export default function quickAscSort(arr: number[]): number[] {
    return sortDivide(arr);
}

function sortDivide(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    let stIndex = Math.floor(arr.length/2) - 1;
    let stNumber = arr[stIndex];

    let less = [];
    let more = [];

    for (let i = 0; i < arr.length; ++i) {
        if (i === stIndex) continue;

        let value = arr[i];
        if (value <= stNumber) {
            less.push(value);
        } else {
            more.push(value);
        }
    }

    return Array.of(...sortDivide(less), stNumber, ...sortDivide(more));
}