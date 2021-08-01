/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => a-b)
    negs = nums.filter(e => e<0)
    // console.log(negs)
    switch(true){
    case k==1:
        nums.splice(0,1,-nums[0])
        break;
    case k % 3 == 0:
        for (i=0;i<nums.length;i++){
            if (nums[i]<0){
                nums.splice(i,1,-nums[i])               
                k-=1
            } else {
                k-=2
            }
            if (k==0){break}
        }
        break;
    default:
        for (i=0;i<nums.length;i++){
            if (nums[i]<0){
                nums.splice(i,1,-nums[i])               
                k-=1
            } else {
                for (j=0;j<k;j++){
                    nums.splice(i,1,-nums[i])
                    k-=1
                    if (k<=0){break}
                }
            }
            if (k<=0){break}
        }
        break;
    }
    // console.log(nums)
    return nums.reduce((a, b) => a + b, 0)
};