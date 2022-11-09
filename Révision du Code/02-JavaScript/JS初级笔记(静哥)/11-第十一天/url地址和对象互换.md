## 已知一个url地址



```js
/* 
  已知一个url地址：
  http://www.baidu.com?user=laowang&pass=123456&sex=nan;
  请把查询字符串的内容以对象的形式表示出来，得到：
  {
    user:"laowang",
    pass:"123456",
    sex:"nan"
  }
*/

var url = 'http://www.baidu.com?user=laowang&pass=123456&sex=nan'
var obj = {}
// 第一步：
// url.split("?")[1] // user=laowang&pass=123456&sex=nan

// 第二步：
// url.split("?")[1].split("&") // ['user=laowang','pass=123456','sex=nan']
url.split('?')[1].split('&').forEach(function (item, index) {
  // 第三步：
  // item.split("=")//['user',"laowang"]
  var newArr = item.split('=')

  obj[newArr[0]] = newArr[1]
})

console.log(obj)
```





## 已知一个查询字符串对象

```js
/* 
    已知一个查询字符串对象
    {
        user:"laowang",
        pass:"123456",
        sex:"nan"
    }
    已知url地址是http://www.baidu.com;
    请把url地址和查询字符串组合 形成真正的地址：
    http://www.baidu.com?user=laowang&pass=123456&sex=nan;
*/

var url = 'http://www.baidu.com'
var obj = {
  user: 'laowang',
  pass: '123456',
  sex: 'nan'
}

var str = ''
for (var key in obj) {
  //得到一个查询字符串
  str += key + '=' + obj[key] + '&'
}
console.log(s)
url = url + '?' + str.slice(0, -1)
console.log(url)
```











