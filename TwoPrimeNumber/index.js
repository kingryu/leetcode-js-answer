/*
土生土长的北京妞儿，在胡同里长大，
房不多，就一个四合院和近郊的别墅。
不算美如天仙但还算标致，在清华读的
经管，现在在做基金经理（不想被人肉，就不暴露单位啦），
个人擅长基本面分析，价值投资。现在只想找个聪明 /靠谱的IT男。
硬性要求是年龄，不要超过88年，还有不要特别矮或胖〇。。 
^我对智商的要求比较高，下面就出个题 ^测试下。我的微信号是大写字母N丫后
面踉着两个质数，大的在前，小的在 是707829217,
可直接搜索 
外增个附加目，在签名微信数字中，从1开始到这个数字的数序列里，一共出现了多少个3,
如 加微信给我正确的答案，我将直接邀你见 待缘分降临-"
*/
function getTwoPrimeNumber(product){
  function isPrimeNumber(num){
    for(let i=2;i<num;i++){
      if(num%i == 0){
        return false
      }
    }
    return true
  }
  const sqrt = ~~Math.sqrt(product)
  for(let i=sqrt;i<product;i++){
    if(product%i == 0){
      if(isPrimeNumber(i)&&isPrimeNumber(product/i)){
        let j = product/i;
        return i+','+j
      }
    }
  }
}
const product = 707829217;
console.log(getTwoPrimeNumber(product))
//86627,8171
