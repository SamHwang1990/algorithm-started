/**
 * Created by samhwang1990@gmail.com.
 */

export default function binarySearch(sortedArray: number[], targetNumber: number): number {
    if (!Array.isArray(sortedArray)) return -1;
    if (targetNumber !== targetNumber) return -1;

    let searchStart = 0;
    let searchEnd = sortedArray.length - 1;

    let sortCoefficient = sortedArray[searchStart] >= sortedArray[searchEnd] ? -1 : 1;

    while (searchStart <= searchEnd) {
        if (searchStart === searchEnd) {
            return sortedArray[searchStart] === targetNumber ? searchStart : -1;
        }

        let middleIndex = searchStart + Math.floor((searchEnd - searchStart) / 2);
        let middleNumber = sortedArray[middleIndex];

        let difference = targetNumber - middleNumber;

        if (difference === 0) return middleIndex;

        if (sortCoefficient * difference > 0) {
            searchStart = middleIndex + 1;
        } else {
            searchEnd = middleIndex - 1;
        }
    }

    return -1;
}