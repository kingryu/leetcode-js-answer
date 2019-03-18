/*
2. Add Two Numbers
Medium

4693

1182

Favorite

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let ret,last
  let up = 0
  let first = true
  let empty = new ListNode(0)
  let needbreak = 0
  while(true){
      let num = l1.val + l2.val + up
      let val = num%10
      up = (num-val)/10
      let tmp = new ListNode(val)
      if(first){
        first = false
        last = tmp
        ret = last 
      }else{
        last.next = tmp
        last = tmp
      }

      if(l1.next){
        l1 = l1.next
      }else if(needbreak ==-1||needbreak == 2){
        needbreak = 2;
      }else{
        needbreak = 1
        l1 = empty
      }
      if(l2.next){
        l2 = l2.next
      }else if(needbreak == 1||needbreak==2){
        needbreak = 2;
      }else {
        l2 = empty
        needbreak = -1
      }
      if(needbreak == 2){
        if(up>0){
          let tmp = new ListNode(up)
          last.next = tmp
        }
        break;
      }
  }
  return ret
};