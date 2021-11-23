/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    let newNums = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] % 2 == 0){
           nums[i] = nums[i]*2
           newNums.push(nums[i])
        }else{
            nums[i] = nums[i]*3
            newNums.push(nums[i])
        }
    }
    return newNums;
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}