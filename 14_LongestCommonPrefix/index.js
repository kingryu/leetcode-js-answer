/*
14. Longest Common Prefix
Easy

1194

1203

Favorite

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.


*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length<1){
      return ''
  }
   let com = strs[0];
  for(let i=1;i<strs.length;i++){
      if(!strs[i].startsWith(com)){
          while(true){
            com = com.substr(0,com.length-1)
            if(strs[i].startsWith(com)){
                break;
            }else if(com==''){
                return ''
            }
         }
      }
         
  }
  return com
};