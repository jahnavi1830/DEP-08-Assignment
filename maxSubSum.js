class Solution {
    maximumSumSubarray(arr, k) {
        // code here
        
        let sum=0;
        let max=0;
        for(let i=0;i<k;i++){
            sum+=arr[i];
            max=Math.max(max,sum);
        }
        let left=0;
        for(let i=k;i<arr.length;i++){
            sum=sum-arr[left]+arr[i];
            max=Math.max(max,sum);
            left++;
        }
        return max;
    }
}
