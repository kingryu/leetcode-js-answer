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