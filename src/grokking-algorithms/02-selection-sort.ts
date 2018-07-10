/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 对随机的数值型数组使用选择排序算法进行顺序排序
 *
 * 时间复杂度为O(n^2)
 * */

export default function selectionAscSort(arr: number[]): number[] {
    if (!Array.isArray(arr)) return [];

    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j ) {
            if (arr[j] < arr[i]) {
                let temp = arr[i];

                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}