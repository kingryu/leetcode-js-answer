/*
7. Reverse Integer
Easy

1983

2945

Favorite

Share
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let ret = ''
  let str = x.toString()
  let len = str.length-1
  for(let i=len; i >-1;i--){
      ret+=str[i]
  }
  if(ret[ret.length-1] == "-"){
      ret = - Number(ret.slice(0,ret.length-1))
  }
  if(ret[0] == '0'){
      ret = ret.slice(1)        
  }


  if(ret>2147483647||ret<-2147483648){
      ret = 0
  }
  return ret
};