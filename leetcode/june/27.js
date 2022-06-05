// var removeElement = function(nums, val) {

//     let len=nums.length;
//     let k=0;
//     for(i=0;i<len;i++){
//         if(nums[i]!=val){
//             nums[k]=nums[i]
//             k++;
//         }
//     }
//     nums.length= k;    
// };

var removeElement = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        }
        else {
            left++;
        }
    }
    return left;
};