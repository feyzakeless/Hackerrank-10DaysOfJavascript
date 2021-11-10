/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let firstValue = nums[0];
    let secondLargest = nums[0];
    // Complete the function
    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] > firstValue) {
            secondLargest = firstValue;
            firstValue = nums[i]
        }

        if (nums[i] > secondLargest && nums[i] < firstValue) {
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}