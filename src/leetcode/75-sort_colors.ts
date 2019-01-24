/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * https://leetcode.com/problems/sort-colors/
 */

export function quickSortColor(nums: number[]) {
    if (!nums.length) return nums;

    function exchange(arr, x, y) {
        let t = arr[x];
        arr[x] = arr[y];
        arr[y] = t;
    }

    let lo = 0;
    let hi = nums.length - 1;

    let i = 0;

    while (i <= hi) {
        let v = nums[i];
        if (v === 0) exchange(nums, lo++, i++);
        else if (v === 2) exchange(nums, i, hi--);
        else ++i;
    }
}