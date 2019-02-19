/**
 * Created by zhiyuan.huang@ddder.net.
 * 
 * https://leetcode.com/problems/happy-number/
 * https://leetcode.com/problems/happy-number/discuss/56917/My-solution-in-C(-O(1)-space-and-no-magic-math-property-involved-)
 */

export function happyNumber(n: number): boolean {
    function digitSquareSum(num) {
        let sum = 0;

        while(num !== 0) {
            let mod = num % 10;
            sum += mod*mod;
            num = Math.floor(num / 10);
        }
        
        return sum;
    }
    
    let happyCache = {};
    while(happyCache[n] !== true) {
        happyCache[n] = true;
        n = digitSquareSum(n);
        if (n === 1) return true;
    }
    
    return false;
}

export function happyNumberFloydCycleDetection(n: number): boolean {
    function digitSquareSum(num) {
        let sum = 0;

        while(num !== 0) {
            let mod = num % 10;
            sum += mod*mod;
            num = Math.floor(num / 10);
        }

        return sum;
    }
    
    let slot, fast;
    slot = fast = n;
    
    do {
        slot = digitSquareSum(slot);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while(slot !== fast);
    
    return slot === 1;
}
