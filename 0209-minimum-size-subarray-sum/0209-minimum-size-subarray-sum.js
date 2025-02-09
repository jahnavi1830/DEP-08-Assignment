/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum=0;
    let left=0;
    let min=Number.MAX_SAFE_INTEGER;
    for(let right=0;right<nums.length;right++){
        sum+=nums[right];
        if(sum>=target){
            while(sum>=target) {
                if(sum>=target) min=Math.min(min,right-left+1);
                sum-=nums[left];
                left++;
            }
        }
        
    }
    
    return min===Number.MAX_SAFE_INTEGER?0:min;
}; 