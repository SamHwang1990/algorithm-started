/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 */

export function TwoPointer_SquaresOfASortedArray (A: number[]): number[] {
    let result = new Array(A.length);

    let lo = 0;
    let hi = A.length - 1;

    for (let i = hi; i >= 0; --i) {
        result[i] = Math.abs(A[lo]) > Math.abs(A[hi]) ? Math.pow(A[lo++], 2) : Math.pow(A[hi--], 2);
    }

    return result;
}