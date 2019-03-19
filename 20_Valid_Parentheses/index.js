/*
20. Valid Parentheses
Easy

2645

133

Favorite

Share
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length%2==1){
    return false;
  }
  let leftArr = []
  for(let i=0;i<s.length;i++){
    let char = s.charAt(i)
    if(char=='['){
      leftArr.push('[')
    }else if(char == '{'){
      leftArr.push('{')
    }else if(char == '('){
      leftArr.push('(')
    }else if(char==']'){
      if(leftArr.pop() != '['){
        return false
      }
    }else if(char == '}'){
      if(leftArr.pop() != '{'){
        return false
      }
    }else if(char == ')'){
      if(leftArr.pop() != '('){
        return false
      }
    }
  }  
  if(leftArr.length<1){
    return true;
  }else{
    return false;
  }
};