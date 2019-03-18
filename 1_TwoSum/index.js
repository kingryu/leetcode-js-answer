/*
1. Two Sum
Easy

10087

324

Favorite

Share
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  let tmp = {};
  for(let i=1;i<len;i+=2){
    if(tmp[nums[i]]){
        return [i,tmp[nums[i]]-1]
    }else if(tmp[nums[i-1]]){
        return [i-1,tmp[nums[i-1]]-1]
    }else if(nums[i]+nums[i-1]==target){
        return [i-1,i]
    }else {
        tmp[target - nums[i-1]] = i;
        tmp[target - nums[i]] = i+1;
        if(i+1 ==len-1){
            if(tmp[nums[i+1]]){
                return [i+1,tmp[nums[i+1]]-1]
            }else if(nums[i]+nums[i+1]==target){
                return [i,i+1]
            }else if(nums[i+1]+nums[i-1]==target){
                return [i-1,i+1]
            }
        }
    }
  }
};