/**
 * Definition for a binary tree node.
 */

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



var arr =  [5,4,8,11,null,13,4,7,2,null,null,5,1]


var root = createTreeNode(arr)
// console.dir(createTreeNode(arr))
//var arr =  [10,5,-3,3,2,null,11,3,-2,null,1]
// var arr = [1,2,3,4,null,5,6,7,8,9,10,11,12,13,14,15]
// var arr = [5,4,5,1,1,5]