/*
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶:

你是否可以在 O(1) 时间复杂度内完成这两种操作？

示例:

LRUCache cache = new LRUCache( 2  );//缓存容量 

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4。

*/


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.objMap = {}
  this.len = 0
  this.max = capacity
  this.start = null
  this.tail = null
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
if(this.objMap[key]){
  this.moveNode2Start(this.objMap[key])
  return this.objMap[key].value
}else{
  return -1
}
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if(this.objMap[key]){
    this.objMap[key].value = value
    this.moveNode2Start(this.objMap[key])
  }else{
    this.objMap[key]=this.createNode(value)
    if(this.len>=this.max){
      this.deleteTailNode()
    }
    this.addNewToStart(this.objMap[key])
  }
};

LRUCache.prototype.createNode = function(key,value){
return {
  key:key,
  pre:null,
  next:null,
  value:value
}
}

LRUCache.prototype.deleteTailNode = function(){
var temp = this.tail;
this.tail = this.tail.pre
this.tail.next = null;
delete this.objMap[temp.key]
}

LRUCache.prototype.addNewToStart = function(node){
if(this.start){
  var temp = this.start
  this.start = node;
  node.next = temp
  temp.pre = node;
}else{
  this.start = node
  this.tail = node
}
}

LRUCache.prototype.moveNode2Start = function(node) {
if(node.pre&&node.pre.next){
  node.pre.next = node.next
}else{
  //首个节点时处理
  return
}
if(node.next&&node.next.pre){
  node.next.pre = node.pre
}else{
  //尾部节点时处理
  this.tail = node.pre
  node.pre.next = null;
}
node.pre = null;
node.next = this.start
this.start = node
}


/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/