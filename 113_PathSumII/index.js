/*
113. Path Sum II
Medium

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

var pathSum = function(root, sum) {
  if(!root||root.length<1){
    return []
  }else if(root&&root.left==null&&root.right==null){
    if(root.val == sum){
      return [[root.val]]
    }else{
      return []
    }
  }
  let retArr = []
  function checkNode(node,lineCount,lineArr){
    if(node.left==null&&node.right==null){
        if(node.val+lineCount == sum){
          lineArr.push(node.val)
          retArr.push(lineArr)
        }
    }
    if(node.left){
        checkNode(node.left,lineCount+node.val,lineArr.concat([node.val]))
    }
    if(node.right){
        checkNode(node.right,lineCount+node.val,lineArr.concat([node.val]))
    }
  }
  checkNode(root,0,[])
  return retArr;
};