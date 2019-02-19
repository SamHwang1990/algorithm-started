/**
 * Created by zhiyuan.huang@ddder.net.
 * 
 * https://leetcode.com/problems/single-number/discuss/42997/My-O(n)-solution-using-XOR
 */

export function singleNumber(nums: number[]): number {
    let result = nums[0];
    
    for (let i = 1; i < nums.length; ++i) {
        result ^= nums[i];
    }
    
    return result;
}
