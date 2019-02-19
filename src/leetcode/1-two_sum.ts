/**
 * Created by zhiyuan.huang@ddder.net.
 * 
 * https://leetcode.com/problems/two-sum/
 */

export function twoSum(nums: number[], target: number): number[] {
    if (!nums || nums.length < 2) return null;
    
    let matchCache = {};
    
    for (let i = nums.length - 1; i >= 0; --i) {
        let num = nums[i];
        let wanting = target - num;
        
        if (matchCache.hasOwnProperty(num)) {
            return [i, matchCache[num]];
        }
        
        matchCache[wanting] = i;
    }
    
    return null;
}
