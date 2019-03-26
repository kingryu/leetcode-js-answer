/*
21. Merge Two Sorted Lists
Easy

1995

278

Favorite

Share
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
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
var mergeTwoLists = function(l1, l2) {
    if(l1==null){
      return l2;
    }
    if(l1==null){
      return l1
    }
    let next = {}
    let ret = next
    while(true){
      if(l1){
        if(l2){
          if(l1.val>l2.val){
             next.next = l2
             l2 = l2.next
             next = next.next
          }else{
            next.next = l1
            l1 = l1.next
            next = next.next
          }
        }else{
          next.next = l1
          break;
        }  
      }else {
        if(l2){
          next.next = l2
          break;
        }else{
          break;
        }
      }
    }
    return ret.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arr2ListNode(arr){
  let ret,last
  for(let i=0;i<arr.length;i++){
    let tmp = new ListNode(arr[i])
    if(i==0){
      last = tmp
      ret = last
    }else{
      last.next = tmp
      last = tmp
    }
  }
  return ret
}

function ListNode2Arr(ret){
  str = []
while(true){
  str.push(ret.val)
  if(ret.next){
    ret = ret.next
  }else{
    break;
  }
}
return str
}

let l1 = arr2ListNode([1,2,4])
let l2 = arr2ListNode([1,3,4])

let lr = mergeTwoLists(l1,l2)
console.log(ListNode2Arr(lr))