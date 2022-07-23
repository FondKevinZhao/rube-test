### 1. 千位格式

在项目中，经常会遇到关于货币数量的页面显示。为了使金额的显示更加人性化和标准化，需要添加货币格式化，这就是所谓的千位数字格式。

123456789 => 123,456,789

123456789.123 => 123,456,789.123

```js
const formatMoney = (money) => {
  return money.replace(new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'), ',')  
}

formatMoney('123456789') // '123,456,789'
formatMoney('123456789.123') // '123,456,789.123'
formatMoney('123') // '123'
```



### 2. 解析URL参数

你一定经常会遇到这样的需要获取url的参数值，像这样：

```js
// url <https://qianlongo.github.io/vue-demos/dist/index.html?name=fatfish&age=100#/home>  
const name = getQueryByName('name') // fatfish 
const age = getQueryByName('age') // 100
```

通过规律性，`getQueryByName` 函数可以很容易地实现：

```js
const getQueryByName = (name) => {
  const queryNameRegex = new RegExp(`[?&]${name}=([^&]*)(&|$)`)
  const queryNameMatch = window.location.search.match(queryNameRegex)
  // Generally, it will be decoded by decodeURIComponent
  return queryNameMatch ? decodeURIComponent(queryNameMatch[1]) : ''
}

const name = getQueryByName('name')
const age = getQueryByName('age')

console.log(name, age) // fatfish, 100
```



### 3. 驼峰式字符串

JS 变量最好用 `camelCase` 编写，让我们看看如何编写一个将其他大小写格式转换为 `camelCase` 的函数。

```js
1. foo Bar => fooBar 
2. foo-bar---- => fooBar 
3. foo_bar__ => fooBar
```

```js
const camelCase = (string) => {
  const camelCaseRegex = /[-_\s]+(.)?/g
  return string.replace(camelCaseRegex, (match, char) => {
    return char ? char.toUpperCase() : ''
  })
}

console.log(camelCase('foo Bar')) // fooBar
console.log(camelCase('foo-bar--')) // fooBar
console.log(camelCase('foo_bar__')) // fooBar
```



### 4. 小写转大写

```js
const capitalize = (string) => {
  const capitalizeRegex = /(?:^|\s+)\w/g
  return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase())
}

console.log(capitalize('hello world')) // Hello World
console.log(capitalize('hello WORLD')) // Hello World
```



### 5. 实现trim()

trim() 方法用于去除字符串开头和结尾的空格，trim 可以用正则表达式模拟：

```js
const trim1 = (str) => {
  return str.replace(/^\s*|\s*$/g, '') // or str.replace(/^\s*(.*?)\s*$/g, '$1')
}

const string = '   hello boy   '
const noSpaceString = 'hello boy'
const trimString = trim1(string)

console.log(string)
console.log(trimString, trimString === noSpaceString) // hello boy true
console.log(string)
```

trim() 方法不会改变原始字符串，同样，trim1 的自定义实现也不会改变原始字符串。



### 6. HTML转义

防止XSS攻击的方法之一是进行HTML转义，转义符对应符号。

常规处理如下：

```js
const escape = (string) => {
  const escapeMaps = {
    '&': 'amp',
    '<': 'lt',
    '>': 'gt',
    '"': 'quot',
    "'": '#39'
  }
  // The effect here is the same as that of /[&amp;<> "']/g
  const escapeRegexp = new RegExp(`[${Object.keys(escapeMaps).join('')}]`, 'g')
  return string.replace(escapeRegexp, (match) => `&${escapeMaps[match]};`)
}

console.log(escape(`
  <div>
    <p>hello world</p>
  </div>
`))
/*
&lt;div&gt;
  &lt;p&gt;hello world&lt;/p&gt;
&lt;/div&gt;
*/
```



### 7. HTML转义

有正向转义，有逆向转义，操作如下：

```js
const unescape = (string) => {
  const unescapeMaps = {
    'amp': '&',
    'lt': '<',
    'gt': '>',
    'quot': '"',
    '#39': "'"
  }
  const unescapeRegexp = /&([^;]+);/g
  return string.replace(unescapeRegexp, (match, unescapeKey) => {
    return unescapeMaps[ unescapeKey ] || match
  })
}

console.log(unescape(`
  &lt;div&gt;
    &lt;p&gt;hello world&lt;/p&gt;
  &lt;/div&gt;
`))
/*
<div>
  <p>hello world</p>
</div>
*/
```



### 8. 检查24小时制

对于处理时间，经常使用规则的规则，比如常见的：检查时间格式是不是合法的 24 小时制：

```js
const check24TimeRegexp = /^(?:(?:0?|1)\d|2[0-3]):(?:0?|[1-5])\d$/
console.log(check24TimeRegexp.test('01:14')) // true
console.log(check24TimeRegexp.test('23:59')) // true
console.log(check24TimeRegexp.test('23:60')) // false
console.log(check24TimeRegexp.test('1:14')) // true
console.log(check24TimeRegexp.test('1:1')) // true
```



### 9. 检查日期格式

常见的日期格式有：yyyy-mm-dd、yyyy.mm.dd、yyyy/mm/dd。

如果出现乱用符号的情况，比如2021.08/22，就不是合法的日期格式，我们可以编写一个函数来检查这一点：

```js
const checkDateRegexp = /^\d{4}([-\.\/])(?:0[1-9]|1[0-2])\1(?:0[1-9]|[12]\d|3[01])$/

console.log(checkDateRegexp.test('2021-08-22')) // true
console.log(checkDateRegexp.test('2021/08/22')) // true
console.log(checkDateRegexp.test('2021.08.22')) // true
console.log(checkDateRegexp.test('2021.08/22')) // false
console.log(checkDateRegexp.test('2021/08-22')) // false
```



### 10. 匹配颜色

匹配字符串中的十六进制颜色值：

```js
const matchColorRegex = /#(?:[\da-fA-F]{6}|[\da-fA-F]{3})/g const colorString = '#12f3a1 #ffBabd #FFF #123 #586'  
console.log(colorString.match(matchColorRegex)) 
// [ '#12f3a1', '#ffBabd', '#FFF', '#123', '#586' ]
```



### 11. 确定HTTPS/HTTP

这个要求也很常见，判断请求协议是否为HTTPS/HTTP。

```js
const checkProtocol = /^https?:/  console.log(checkProtocol.test('https://google.com/')) // true console.log(checkProtocol.test('http://google.com/')) // true console.log(checkProtocol.test('//google.com/')) // false
```



### 12. 检查版本号

版本号必须是 x.y.z 格式，其中 XYZ 至少是一位数字，我们可以使用正则表达式来检查：

```js
// x.y.z const versionRegexp = /^(?:\d+\.){2}\d+$/  console.log(versionRegexp.test('1.1.1'))
// true
console.log(versionRegexp.test('1.000.1')) 
//true
console.log(versionRegexp.test('1.000.1.1'))
//false
```



### 13. 获取网页图片地址

这个需求可能更多被爬虫使用，使用正则获取当前网页所有图片的地址。

```js
const matchImgs = (sHtml) => {
  const imgUrlRegex = /<img[^>]+src="((?:https?:)?\/\/[^"]+)"[^>]*?>/gi
  let matchImgUrls = []
  
  sHtml.replace(imgUrlRegex, (match, $1) => {
    $1 && matchImgUrls.push($1)
  })
  return matchImgUrls
}

console.log(matchImgs(document.body.innerHTML))
```



### 14. 格式化电话号码

```js
let mobile = '18379836654'  
let mobileReg = /(?=(\d{4})+$)/g   console.log(mobile.replace(mobileReg, '-')) // 183-7983-6654
```



















































































