/*
62. Unique Paths
Medium

1359

91

Favorite

Share
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?


Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28
*/



/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if(!m||!n){
    return 0
  }else if(m==1||n==1){
    return 1
  }else if(m==2){
    return n
  }else if(n==2){
    return m
  }
  let max,min
  if(m>n){
    max = m;
    min = n;
  }else{
    max = n;
    min = m
  }
  let arr = []
  arr[2]=[]
  for(let i=2;i<=max;i++){
    arr[2][i]=i
    arr[i]=[]
    arr[i][2]=i
  }
  for(let x = 3; x<=max; x++){
      let len = x>min?min:x
    for(let y = 3; y<=len; y++){
      if(x==y){
        arr[x][y] = 2*arr[x][y-1]
      }else{
        arr[x][y] = arr[x-1][y]+arr[x][y-1]
      }
    }
  }
  return arr[max][min]
};

/*
	 1	2	  3	  4	  5   6   7
1	 2	3	  4	  5	  6	  7   8
2	 3	6	  10	15	21	28
3	 4	10	20	35	56	84
4	 5	15	35	70	126	210
5	 6	21	56	126	252	462
6	 7	28	84	210	462	924
7  8  

规律  m * n =>  (m-1)*n+m*(n-1)
      n * n => (n-1)*n*2
 
 二维数组
  已知 arr[1] = [2,3,4,5,6,7....]
      arr[1][1] = 2
      arr[2][1] = 3
      arr[3][1] = 4
      arr[4][1] = 5
      arr[5][1] = 6
      arr[6][1] = 7
      ....

  通过计算 arr[x][y] = arr[x-1][y]+arr[x][y-1] 
 

*/

var uniquePaths = function(pm, pn) {
  if(!pm||!pn){
    return 0
  }else if(pm==1||pn==1){
    return 1
  }else if(pm==2){
    return pn
  }else if(pn==2){
    return pm
  }
  let m = pm-1,  n = pn-1;
  let max = m>n?m:n
  let arr = []
  arr[1]=[]
  for(let i=1;i<=max;i++){
    arr[1][i]=i+1
    arr[i]=[]
    arr[i][1]=i+1
  }
  for(let x = 2; x<=max; x++){
    for(let y = 2; y<=x; y++){
      if(x==y){
        arr[x][y] = 2*arr[x][y-1]
      }else{
        arr[x][y] = arr[x-1][y]+arr[x][y-1]
      }
    }
  }
  if(m>n){
    return arr[m][n]
  }else{
    return arr[n][m]
  }
};


//递归方案超时
var uniquePaths = function(m, n) {
  let count =0
  function checkPath(x,y){
    if(x==m&&y==n){
      count++
    }else{
      if(x<m){
        checkPath(x+1,y)
      }
      if(y<n){
        checkPath(x,y+1)
      }
    }
  }
  return count;
};

//递归方案超时
var uniquePaths = function(m, n) {
  if(m==1||n==1){
    return 1
  }else {
    return uniquePaths(m-1,n)+uniquePaths(m,n-1)
  }
}


