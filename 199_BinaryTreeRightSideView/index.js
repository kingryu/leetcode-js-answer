/*
199. Binary Tree Right Side View
Medium

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if(!root||root.length<1){
    return []
  }else if(root&&root.left==null&&root.right==null){
    return [root.val]
  }
  let rightSideArr = []
  let retArr = []
  function checkNode(node,level){
    if(rightSideArr[level]){
      rightSideArr[level].push(node.val)
    }else{
      rightSideArr[level]=[node.val]
    }
    if(node.left==null&&node.right==null){
      return
    }
    if(node.right){
        checkNode(node.right,level+1)
    }
    if(node.left){
      checkNode(node.left,level+1)
    }
  }
  checkNode(root,0)
  for(let i=0;i<rightSideArr.length;i++){
    retArr.push(rightSideArr[i][0])
  }
  return retArr;
};