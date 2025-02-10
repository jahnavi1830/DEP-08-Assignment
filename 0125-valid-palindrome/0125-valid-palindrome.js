/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let left=0
    let right=(str.length-1);
    while(left<=right){
        if(str.charAt(left)!==str.charAt(right)) return false;
        right--;
        left++;
    }
    return true;
};