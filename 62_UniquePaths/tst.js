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
*/

var uniquePaths = function(m, n) {
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


//超出时间显示
var uniquePaths = function(m, n) {
  if(m==1||n==1){
    return 1
  }else {
    return uniquePaths(m-1,n)+uniquePaths(m,n-1)
  }
}

//超出时间限制
var uniquePaths = function(m, n) {
  if(m==1||n==1){
    return 1
  }else {
    return uniquePaths(m-1,n)+uniquePaths(m,n-1)
  }
}
