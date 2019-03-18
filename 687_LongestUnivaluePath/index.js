/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    if(!root){
      return 0
    }
    let max = 0;
    function checkNode(node){
      if(node.left == null&&node.right==null){
        return [node.val,0]
      }
      let leftVal,leftCount=0,rightVal,rightCount=0
      if(node.left){
        [leftVal,leftCount] = checkNode(node.left)
      }
      if(node.right){
        [rightVal,rightCount] = checkNode(node.right)
      }
      if(node.val == leftVal){
        leftCount++
        if(leftCount > max){
          max = leftCount
        }
      }
      if(node.val == rightVal){
        rightCount++;
        if(rightCount > max){
          max = rightCount
        }
      }
      if(rightVal == leftVal ){
        if(node.val == rightVal){
          if(max<rightCount+leftCount){
            max = rightCount+leftCount
          }
          let count = leftCount>rightCount?leftCount:rightCount
          return [leftVal,count]
        }else{
          return [node.val,0]
        }
      }else{
        if(leftVal == node.val){
          return [leftVal, leftCount]   
        }else if(rightVal == node.val){
          return [rightVal, rightCount]
        }else{
          return [node.val,0]
        }
      }
    }
    checkNode(root)
    return max
};