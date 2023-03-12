// You can see the challenge prompt at the following link below:
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const otherNum = target - num;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === otherNum) {
                return [i, j];
            }
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]