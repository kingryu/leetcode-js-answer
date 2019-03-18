/*
3. Longest Substring Without Repeating Characters
Medium

5018

263

Favorite

Share
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  if(s.length<2){
     return s.length;
  }
   let maxLen = 0;
   let nowLen = 0;
   let substr = ''
   let checkObj ={}
   for(let i=0;i<s.length;i++){
     let char = s.charAt(i)
     if(checkObj[char]){
       for(let j=0;j<substr.length;j++){
         let subChar = substr.charAt(j)
         if(subChar==char){
           substr = substr.substr(j+1,substr.length-1)+char
           if(nowLen>maxLen){
             maxLen = nowLen;
           }
           nowLen = substr.length;
           checkObj = {}
           for(let x=0;x<nowLen;x++){
             checkObj[substr.charAt(x)]=true;
           }
          break;
         }
       }
     }else{
       nowLen ++;
       checkObj[char]= true;
       substr +=char;
     }
   }
   if(nowLen>maxLen){
     maxLen = nowLen
   }
   return maxLen;
 };