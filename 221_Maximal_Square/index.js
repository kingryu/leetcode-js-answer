/*
Medium

1719

41

Favorite

Share
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/


/**
 * @param {character[][]} matrix
 * @return {number}                                                                                                                                                                                                 
 */

var maximalSquare = function(matrix) {
  let len = matrix.length
    for(let y=0;y<len;y++){
       let line = matrix[y]
       let lenH = matrix[y].length
       for(let x=0;x<lenH;x++){
          if(matrix[y][x]==1){ 
            if(checkSq(x,y,2)){

            }
          }
       }
    }
    function checkSq(x,y,n){
      let isSquare = true
      for(let i=x;i<=x+n;i++){
        for(let j=y;j<=y+n;j++){
          if(matrix[i][j]!=1){
            isSquare = false;
              break;
          }
        }
      }
      return isSquare;
    }
    function outerSq(x,y,n){
      let isSquare = true
      for(let i=x;i<=n;i++){
        for(let j=y;j<=n;j++){
          if(matrix[i][j]!=1){
            isSquare = false;
              break;
          }
        }
      }
    }
};


