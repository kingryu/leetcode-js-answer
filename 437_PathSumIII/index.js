/*
437. Path Sum III
Easy

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

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
 * @return {number}
 */
var pathSum = function(root, sum) {
     if(!root||root.length<1){
        return 0
     }
    let count = 0
    function checkNode(node){
      if(sum == node.val){
            count++
      }
      if(node.left==null&&node.right==null){
          return [node.val]
      }
      let leftArr,rightArr
      let leftRet = []
      let rightRet = []
      if(node.left){
          leftArr = checkNode(node.left)
          leftRet = getRet(leftArr,node.val)
      }
      if(node.right){
          rightArr = checkNode(node.right)
          rightRet = getRet(rightArr,node.val)
      }
      return [node.val,...leftRet,...rightRet]
    }

    function getRet(arr,val){
      let ret = []
      if(arr&&arr.length>0){
            for(let i=0;i<arr.length;i++){
                  ret[i] = arr[i]+val
                  if(ret[i]== sum){
                        count ++;
                  }
            }
      }
      return ret
    }
    checkNode(root)
    return count;
};

function TreeNode(val,left,right) {
      this.val = val;
      this.left = left 
      this.right = right;
   }
   
   function createTreeNode(arr){
       let level = 0
       let levelCount =1
       let NullCount = 0
       let NodeArr = []
       for(let i=0;i<arr.length;i++){
         if(i>=levelCount){
           level++
           levelCount += Math.pow(2, level)
           levelCount -= NullCount*2
         }
         if(!NodeArr[level]){
           NodeArr[level] = []
         }
         if(arr[i]==null){
           NullCount ++;
         }
         if(arr[i]!=null){
           NodeArr[level].push(new TreeNode(arr[i]))
         }else{
           NodeArr[level].push(null)
         }
       }
       
       let len = NodeArr.length;
       for(let i=0;i<len;i++){
         var levelArr = NodeArr[i]
         let leftCount = 0
         for(let j=0;j<levelArr.length;j++){
           if(levelArr[j]!=null){
             if(i+1<len && NodeArr[i+1] &&leftCount < NodeArr[i+1].length){
               levelArr[j].left = NodeArr[i+1][leftCount]||null
               levelArr[j].right = NodeArr[i+1][leftCount+1]||null
             }else {
               levelArr[j].left = null
               levelArr[j].right = null
             }
             leftCount+=2;
           }
         }
       }
       return NodeArr[0][0]
   }
   
   
   
   var arr =  [10,5,-3,3,2,null,11,3,-2,null,1]
   
   var root = createTreeNode(arr)
   pathSum(root,8)