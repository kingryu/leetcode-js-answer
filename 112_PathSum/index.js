/*
112. Path Sum
Easy

822

265

Favorite

Share
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if(!root){
      return false
  }

  function checkIsLeaf(node){
      if(node.left == null && node.right == null){
          return true;
      }else {
          return false;
      }
  }
  
  function checkNode(node,num){
      if(num - node.val == 0){
          if(checkIsLeaf(node)){
              return true
          }
      }
      let leftHas = false
      if(node.left!=null){
       leftHas = checkNode(node.left,num - node.val)    
      }
      if(!leftHas){
          if(node.right){
              return checkNode(node.right, num - node.val)           
          }else{
              return false
          }
      }else{
          return leftHas
      }
  }
  return checkNode(root,sum)
};