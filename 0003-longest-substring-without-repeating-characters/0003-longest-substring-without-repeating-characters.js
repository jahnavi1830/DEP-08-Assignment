/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left=0;
    let count=0;
    let max=0;
    for(let right=0;right<s.length;right++){
        let key=s.charAt(right);
        let ind=s.indexOf(key,left);
        if(ind>=right){
            count++;
        }
        else{
            count=count+1-(ind-left+1);
            left=ind+1;
        }
        max=Math.max(max,count);
    }
    return max;
};