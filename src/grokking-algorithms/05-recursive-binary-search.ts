/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 递归实现二分查找
 * */

export default function recursiveBinarySearch(sortedArray: number[], value: number): number {
    if (sortedArray == undefined || value == undefined) return -1;
    return recursiveSearch(sortedArray, 0, sortedArray.length - 1, value);
}

function recursiveSearch(array: number[], startIndex: number, endIndex: number, value: number): number {
    if (!array.length) return -1;
    if (array.length === 1) return array[0] === value ? 0 : -1;

    if (startIndex > endIndex) return -1;

    let sortCoefficient = array[startIndex] < array[endIndex] ? 1 : -1;
    let middleIndex = startIndex + Math.floor((endIndex - startIndex)/2);
    let middleValue = array[middleIndex];

    let difference = (value - middleValue) * sortCoefficient;

    if (difference === 0) return middleIndex;
    if (difference < 0) return recursiveSearch(array, startIndex, middleIndex - 1, value);
    return recursiveSearch(array, middleIndex + 1, endIndex, value);
}