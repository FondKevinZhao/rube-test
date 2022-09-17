## 面试题：通过 1 和 0 获取 0，-0，Infinity，-Infinity，NaN

```js
var num1 = 0 / 1; // 0
var num2 = 0 / -1; // -0
var num3 = 1 / 0; // Infinity
var num4 = -1 / 0; // -Infinity
var num5 = 0 / 0; // NaN
console.log(num1, num2, num3, num4, num5);
```



## 代码题

1. 

```js
console.log([1, 2] + [1, 2]); // “1,21,2”
```

2. 

```js
if (!(b in window)) {
    var b = 1;
}
console.log(b);
```

3. 

```js
let obj = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push
}
obj.push(1);
obj.push(2);
console.log(obj); // { '2': 1, '3': 2, length: 4, push: [Function: push] }
```

[视频详解(ctrl+左击)](https://www.bilibili.com/video/BV1Mf4y1r7xX?p=31&spm_id_from=pageDriver)

4. 输出下面代码运行结果：

```js
// example 1
var a = {}, b = '123', c = 123;
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); // c
// 因为: a['123'] == a[123]

// example 2
var a ={}, b = Symbol('123'), c = Symbol('123');
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); // b
// Symbol是ES6中新增的数据类型 typeof Symbol('123') === "symbol"
// 它创建出来的值是唯一值：Symbol('123') === Symbol('123') // false

// example 3
var a ={}, b = {key: '123'}, c = {key:'456'};
a[b] = 'b';
a[c] = 'c';
console.log(a[b]); // c
```



5. 





## 定时器

```js
var time = 1000;
setInterval(function () {
    console.log('a');
}, time); // 这里的time表示每隔1秒执行一次。

time = 2000;
// 注意：再次给定时器中的 time 赋值，time 是不会改变的，还是按照原来的1秒执行一次。
// setInterval 是 window 上的方法，也可以写成 window.setInterval
```



## eval()

`var a = 123; eval('console.log(a)')`：

1. eval 能把字符串当成 js 代码执行。
2. eval 能改变作用域，eval 还拥有自己独立的作用域，尽量少用。



## with 作用域链

with 可以改变作用域链(改作用域链，系统内部会消耗大量的性能，使程序变慢，不建议使用)，它可以让它里面的代码在作用域链的最顶端，变成 with 括号里的那个对象。

```js
 var obj = {
     name: 'obj'
 }
 var name = 'window';
 function test() {
     var name = 'scope';
     with(obj) {
         console.log(name);
     }
}
```

注意：with 在严格模式中是不能使用的。而`arguments.callee`也不能在严格模式中使用。



## 闭包题1



一：没闭包：

```js
var name = 'The Window';
var object = {
    name: 'My Object',
    getNameFunc: function () {
        return function() {
            return this.name;
        }
    }
}
alert(object.getNameFunc()());
```

二：有闭包：

```js
var name2 = 'The window';
var objcet2 = {
    name2: 'My Object',
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name2;
        }
    }
}
alert(object2.getNameFunc()());
```

## 闭包题2

```js
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); // 10,10,10,10,10,10,10,10,10,10
  }, 1000);
}
// 定时器执行时异步的，每一轮循环设置定时器，无需等定时器触发执行，继续下一轮循环(定时器触发的时候，循环已经结束了)
```

```js
// 通过块级作用域
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
  }, 1000);
} 
// let是块级作用域，每一次循环都会把当前循环的变量值i,存入块级作用域中
// 当定时器执行的时候，所使用的 i，就是所处作用域中的 i。
```

```js
// 通过 IIFE 自执行函数形成闭包
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }, 1000);
  })(i);
}
```

```js
// 箭头函数闭包写法：
for (var i = 0; i < 10; i++) {
  setTimeout(((i) => {
    return () => {
      console.log(i); // 0 1 2 3 4 5 6 7 8 9
    }
  })(i), 1000);
}

// 可以简写为：
for (var i = 0; i < 10; i++) {
  setTimeout((i => () => console.log(i))(i),1000); 
}
// 0 1 2 3 4 5 6 7 8 9
```



```js
// 匿名函数
// 1. 本应匿名的函数如果设置了函数名，在外面还是无法调用，但是在当前函数里面是可以使用的
// 2. 而且类似于创建常量一样，这个名字存储的值，不能被再修改。(非严格模式下，不会报错，但是不会有任何的效果，在严格模式下直接报错，我们可以把AAA理解为是用 const 创建出来的)

let fn = function AAA() {
  console.log(AAA);
};
console.log(fn())
```



## 作用域面试题

1. 

```js
var x = 10;
function fn() {
    console.log(x);
}
function show(f) {
    var x = 20;
    f();
}
show(fn);
```

2. 

```js
var fn = function( {
    console.log(fn)
})
fn()

var obj = {
    fn2: function () {
        console.log(fn2)
    }
}
obj.fn2()
```

3. 

```js
var b = 10;
(function b() {
  b = 20; // 这个名字存储的值，不能被再修改。
  console.log(b); // 函数
})();
console.log(b); // 10 
```

4. 

```js
var a = 10;
(function b(b) {
  b = 20;
  console.log(b); // 20 改为形参
})(a);
console.log(a); // 10 
```

5. 

```js
var b = 10;
(function b() {
  var b = 20;
  console.log(b); // 20 // 声明 b (前面加var)
})();
console.log(b); // 10 
```







## 递归面试题

1. 递归面试题：

   ```js
   console.log('gb:' + i);
   var i = 1;
   foo(1);
   function foo(i) {
       if (i == 4) {
           return;
       }
       console.log('fb:' + i);
       foo(i + 1);
       console.log('fe:' + i);
   }
   console.log('ge:' + i);
   ```

## 变量提升

```js
function a () {};
var a;
console.log(typeof a);
```



```js
var c = 1;
function c(c) {
   console.log(c);
};
c(2);
// 解析
/*
function c(c) {
  console.log(c);
};
var c;
c = 1;
c(2); // 报错，c i
*/
```



## 某公司 1 到 12 月份的销售额存在一个对象里面

如下：

```js
{
 1: 122,
 2: 123,
 5: 888
},
```



请把数据处理为如下结构：[222, 123, null, null, 888, null, null, null, null, null, null, null]

```js
// 方法一：
let obj = {
  1: 222,
  2: 123,
  5: 888
};

// 创建一个新数组，用null填充，循环这个新数组
let arr = new Array(12).fill(null).map((item, index) => {
  // 数组的索引是从0开始，1-12月是从1开始的，所以要index+1
  // index+1，能找到返回相对应的值，找不到用null代替
  return obj[index + 1] || null;
});
console.log(arr); // [222,  123,  null,null, 888,  null,null, null, null,null, null, null]
```

```js
// 方法二：
let obj = {
  1: 222,
  2: 123,
  5: 888
};

// 因为数组的索引从零开始，0是undefined，不符合要求，所以多出来一位数组
obj.length = 13;
// slice 从索引1开始截取，0为可以去掉不要
let arr = Array.from(obj).slice(1).map(item => {
  return typeof item === 'undefined' ? null : item;
});
console.log(arr); // [222,  123,  null,null, 888,  null,null, null, null,null, null, null]
```

```js
// 方法三：
let obj = {
  1: 222,
  2: 123,
  5: 888
};
// Object.keys(obj); 获取obj中所有的属性名，以数组方式返回
let arr = new Array(12).fill(null);
Object.keys(obj).forEach(item => {
  arr[item - 1] = obj[item];
});
console.log(arr);
```



## a 在什么情况下，能让下面的条件成立？

```js
// a 在什么情况下，能让下面的条件成立
// 方法一：
var a = {
  n: 0,
  toString: function () {
    return ++this.n;
  }
};
if (a == 1 && a == 2 && a == 3) {
  console.log(1); // 1
}
```

```js
// a 在什么情况下，能让下面的条件成立
// 方法二：
var a = [1, 2, 3];
a.toString = a.shift;
if (a == 1 && a == 2 && a == 3) {
  console.log(1); // 1
}
```



## 数组合并

```js
// 方法一：concat()
let arr1 = ['a1', 'a2', 'a3']
let arr2 = ['a', 'b']
let arr3 = arr1.concat(arr2)
console.log(arr3) // ['a1', 'a2', 'a3', 'a', 'b']

// 方法二：[...arr1, ...arr2]
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log('arr3', arr3) // [1, 2, 3, 4, 5, 6]

// 方法三：for-in
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
for (let i in arr2) {
  arr1.push(arr2[i])
}
console.log(arr1) // [1, 2, 3, 4, 5, 6]

// 方法四：push(…arr)
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
arr1.push(...arr2)
console.log(arr1) // [1, 2, 3, 4, 5, 6]
```

```js
// 需求：
// 1. 合并数组
// 2. a 到 a2的后面，b 到 b2 的后面, 一次类推
let ary1 = ['a1','a2','b1','b2', 'c1','c2'];
let ary2 = ['a','b','c'];
ary2 = ary2.map(item => item + 'Z'); // 这个Z只要大于2就行
// console.log(ary2) // [ 'aZ', 'bZ', 'cZ' ]
let arr = ary1.concat(ary2);
// console.log(arr); // ['a1', 'a2', 'b1','b2', 'c1', 'c2','aZ', 'bZ', 'cZ']
arr = arr.sort((a,b) =>a.localeCompare(b)).map(item => {
  return item.replace('Z','')
});
console.log(arr); // 返回：['a1', 'a2', 'a', 'b1', 'b2', 'b', 'c1', 'c2', 'c']
// 这种方法弊端：如果 'b1','b2' 在 'c1','c2' 的后面，那么会对数组的顺序产生影响
```



## 利用柯里化函数实现

(函数柯里化：预先处理的思想(利用闭包的机制)。)实现：

请实现一个 add 函数，满足以下功能：

 add(1); // 1

 add(1)(2); // 3

 add(1)(2)(3); // 6

 add(1)(2)(3)(4); // 10

 add(1)(2, 3); // 6

 add(1, 2)(3); // 6

 add(1, 2, 3); // 6

```js
function currying(fn, length) {
  length = length || fn.length;
  return function (...args) {
    if (args.length >= length) {
      return fn(...args);
    }
    return currying(fn.bind(null, ...args), length - args.length);
  };
}
function add(n1, n2, n3) {
  return n1 + n2 + n3;
}
add = currying(add, 3);
console.log(add(1)(2)(3)); 
```



## 旋转数组

 给定一个数组，将数组中的元素向右移动 K 个位置，其中 K 是非负数

 输入：[1, 2, 3, 4, 5, 6, 7] 和 K = 3 (数组中所有的数往后移动三位，从1开始。从5开始索引不够3位，那么就把移不了的整体全部提前)

 输入：[5, 6, 7, 1, 2, 3, 4]

 解释：

 向右旋转 1 步：[7, 1, 2, 3, 4, 5, 6]

 向右旋转 2 步：[6, 7, 1, 2, 3, 4, 5]

 向右旋转 3 步：[5, 6, 7, 1, 2, 3, 4]



 输入：[-1, -100, 3, 99] 和 k = 2

 输入：[3, 99, -1, -100]

 解释：

 向右旋转 1 步：[99, -1, -100, 3]

 向右旋转 2 步：[3, 99, -1, -100]

```js
// 方法一：
function rotate(k) {
  // 参数处理
  if (k < 0 || k === 0 || k === this.length) return this; // this表示原始数值
  if (k > this.length) k = k % this.length;
  // 旋转数组
  // slice支持负数作为索引，如果-k是3，那么久截取数组的最后3位
  return this.slice(-k).concat(this.slice(0, this.length-k));
}
Array.prototype.rotate = rotate;

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.rotate(3));
```

```js
// 方法二：
function rotate(k) {
  // 参数处理
  if (k < 0 || k === 0 || k === this.length) return this; // this表示原始数值
  if (k > this.length) k = k % this.length;
  // 旋转数组
  return [...this.splice(this.length - k), ...this];
}
Array.prototype.rotate = rotate;

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.rotate(3));
```

```js
// 方法三：
function rotate(k) {
  // 参数处理
  if (k < 0 || k === 0 || k === this.length) return this; // this表示原始数值
  if (k > this.length) k = k % this.length;
  // 旋转数组
  for(let i = 0; i < k; i ++) {
    this.unshift(this.pop());
  }
  return this;
}
Array.prototype.rotate = rotate;

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.rotate(3));
```

```js
// 方法四：
function rotate(k) {
  // 参数处理
  if (k < 0 || k === 0 || k === this.length) return this; // this表示原始数值
  if (k > this.length) k = k % this.length;
  // 旋转数组
  new Array(k).fill('').forEach(() => this.unshift(this.pop()));
  return this;
}
Array.prototype.rotate = rotate;

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.rotate(3));
```



## 给定两个数组，写一个方法计算它们的“交差并补”

```js
var a = [1, 2, 3, 4, 5]
var b = [2, 4, 6, 8, 10]
 
var sa = new Set(a);
var sb = new Set(b);
 
// 交集
let intersect = a.filter(x => sb.has(x));
 
// 差集
let minus = a.filter(x => !sb.has(x));
 
// 补集
let complement  = [...a.filter(x => !sb.has(x)), ...b.filter(x => !sa.has(x))];
 
// 并集
let unionSet = Array.from(new Set([...a, ...b]));
 
console.log("a与b的交集：", intersect);  // a与b的交集：[2, 4]
console.log("a与b的差集：", minus);      // a与b的差集：[1, 3, 5]
console.log("a与b的补集：", complement); // a与b的补集：[1, 3, 5, 6, 8, 10]
console.log("a与b的并集：", unionSet);   // a与b的并集：[1, 2, 3, 4, 5, 6, 8, 10]
```



## 给定两个数组，写一个方法计算它们的交集

```js
// 方法一：
let nums1 = [12, 23, 34, 45, 34, 25, 46, 35];
let nums2 = [10, 20, 23, 34];

let arr = [];
for (let i = 0; i < nums1.length; i++) {
  let item1 = nums1[i];
  for (let k = 0; k < nums2.length; k++) {
    let item2 = nums2[k];
    if (item1 === item2) {
      arr.push(item1);
      break;
    }
  }
}
let arr1 = Array.from(new Set(arr)); // 数组去重
console.log(arr); // [ 23, 34, 34 ]
console.log(arr1); // [ 23, 34 ]
```

```js
// 方法二：
let nums1 = [12, 23, 34, 45, 34, 25, 46, 35];
let nums2 = [10, 20, 23, 34];

let arr = [];
nums1.forEach(item=>{
  nums2.includes(item) ? arr.push(item) : null;
})
// 可以简写为下面的一行代码
// nums1.forEach(item=>nums2.includes(item) ? arr.push(item) : null);
console.log(arr); // [ 23, 34, 34 ]
```



## 原型题



```js
function Foo() {
  Foo.a = function () {
    console.log(1);
  }
  this.a = function () { // this 表示 obj
    console.log(2);
  }
}
// 把Foo当做类，在原型上设置实例公有的属性方法 =》实例.a();
Foo.prototype.a = function () {
  console.log(3);
}
// 把 Foo当做普通对象，设置成私有的属性方法 =》Foo.a();
Foo.a = function () {
  console.log(4); 
}
Foo.a(); // 4
let obj = new Foo(); // obj 可以调取原型上方法
obj.a(); // 2 私有属性中有 a
Foo.a(); // 1
```



## 在输入框中如何判断输入的是一个正确的网址

在输入框中如何判断输入的是一个正确的网址，例如：用户输入一个字符串，验证是否符合 URL 网址的格式。

```js
// 1. 协议:// http/https/ftp
// 2. 域名：
      // www.baidu.com
      // baidu.com
      // kbs.sports.qq.com
      // kbs.sports.qq.com.cn
//  端口号
// 3. 请求路径
      // /
      // /stu/index.html
      // /stu/
// 4. 问号传参(查询字符串)
      // ?xxx=xxx&xxx=xxx
// 5. 哈希值
      // #xxx
let str = "http://www.baidu.com/index.html?1x=1&from=wx#video";

let reg = /^(?:(http|https|hft):\/\/)?(([\w-]+\.)+[a-z0-9]+)((\/[^/]*)+)?(\?[^#])?(#.+)?$/i; // ?表示出现0-1次，可能出现可能不出现 +加号表示1到多次
console.log(reg.test(str))

```



## 实现一个字符串匹配算法

实现一个字符串匹配算法，从字符串 S 中，查找是否存在字符串 T，若存在返回所在位置，不存在返回-1！(如果不能基于 indexOf/includes 等内置的方法，你会如何处理？)

```js
(function () {
  /* 
    循环原始字符串中的每一项，让每一项从当前位置向后截取T.length个字符，然后和T进行比较，如果不一样，继续循环; 如果不一样返回当前索引即可(循环结束);
  */
  function myIndexOf(T) {
    // This是 字符串S
    let lenT = T.length,
      lenS = this.length, // this 是 S
      res = -1;
    for (let i = 0; i <= lenS - lenT; i++) {
      if(this.substr(i, lenT) === T) {
        res = i;
        break;
      }
    }
    return res;
  }
  String.prototype.myIndexOf = myIndexOf;
})();

let S = "xiaozhupeiqi",
  T = "pei";
console.log(S.myIndexOf(T)); // 7
```

```js
(function () {
  /* 正则处理 */
  function myIndexOf(T) {
    // This是 字符串S
    let reg = new RegExp(T),
      res = reg.exec(this);
    return res === null? -1 : res.index;
  }
  String.prototype.myIndexOf = myIndexOf;
})();

let S = "xiaozhupeiqi",
  T = "pei";
console.log(S.myIndexOf(T)); // 7
```



## 如何把一个字符串的大小写取反

如何把一个字符串的大小写取反(大写变小写，小写变大写)，例如：`"AbC"` 变成 `"aBc"`。

```js
let str = "AbcdEFg六六六！haha";
// replace 如果第一项是正则的话，它会去跟字符串进行匹配
str = str.replace(/[a-zA-Z]/g,content => {
    // content 是每一次正则匹配的结果
    // 验证是否为大写字母：第一种方法：把字母转换为大写后看和之前的是否一样，如果一样，之前的也是大写的。
    // 方法一：content.toUpperCase() === content;
    return content.toUpperCase() === content ? content.toLowerCase() : content.toUpperCase();
    
});
console.log(str); // aBCDefG六六六！HAHA
```

```js
let str = "AbcdEFg六六六！haha";
// replace 如果第一项是正则的话，它会去跟字符串进行匹配
str = str.replace(/[a-zA-Z]/g,content => {
    // content 是每一次正则匹配的结果第二种方法：在ASCII中找到大写字母的取值范围进行判断(65-90)。
    // 方法二：content.charCodeAt() >= 65 && content.charCodeAt() <= 90
    return content.charCodeAt() >= 65 && content.charCodeAt() <= 90 ? content.toLowerCase() : content.toUpperCase(); 
    
});
console.log(str); // aBCDefG六六六！HAHA
```



## 实现(5).add(3).minus(2)，5+3-2 使其输出结果为：6

实现`(5).add(3).minus(2)`，5+3-2 使其输出结果为：6

5用括号包起来的原因：因为变量不能是数字开头。

```js
arr.push();
arr 是 Array 的实例，可以调用 Array.prototype 上的方法，push就是其中一个。
```

```js
~function(){
    // 每一个方法执行完，都要返回Number这个类的实例，这样才可以继续调取Number类原型中方法(链式写法)
    function check(n) {
        n=Number(n);
        return isNaN(n)? 0 : n;
    }
    
    function add(n) {
        n = check(n);
        return this + n;
    }
    
    function minus(n) {
        n = check(n);
        return this - n;
    }
    
    // 方法1：
    Number.prototype.add = add;
    Number.prototype.minus = minus;
    /* ["add","minus"].forEach(item=>{
        Number.prototype[item] = eval(item);
    });*/
}();
console.log((5).add(3).minus(2));
```

```js
~function(){
    // 每一个方法执行完，都要返回Number这个类的实例，这样才可以继续调取Number类原型中方法(链式写法)
    function check(n) {
        n=Number(n);
        return isNaN(n)? 0 : n;
    }
    
    function add(n) {
        n = check(n);
        return this + n;
    }
    
    function minus(n) {
        n = check(n);
        return this - n;
    }
    
    // 方法2：
    ["add","minus"].forEach(item=>{
        Number.prototype[item] = eval(item);
    });
}();
console.log((5).add(3).minus(2));
```



## 斐波拉契数列

请实现一个 `fibonacci[ˌfɪbəˈnɑːtʃi] ` 函数，要求试下你一下的功能：

1. 斐波那契数列为：`[1, 1, 2, 3, 5, 8, 13, 21,...];`

2. `fibonacci(0) ->(返回) 1` 传入的 0 是索引

3. `fibonacci(4) ->(返回) 5` 传入的 4 是索引

   ```js
   function fb(n) {
   	if (n === 1 || n === 2) {
       return 1;
   	}
     return fb(n - 1) + fb(n - 2);
   }
   console.log(fb(3));
   console.log(fb(6));
   ```

   ```js
   function fibonacci(n) {
     // 如果索引小于等于1，那就等于1
     if (n <= 1) return 1;
   
     let arr = [1, 1];
     // i 存储的是我即将要创建多少个
     let i = n + 1 - 2;
     while (i > 0) {
       let a = arr[arr.length-2],
           b = arr[arr.length-1];
       arr.push(a+b);
       i--;
     }
     return arr[arr.length-1];
   }
   
   console.log(fibonacci(5));
   ```

   ```js
   // 这种方式比较难
   function fibonacci(count) {
       // curr 是当前项，next 是下一项
     function fn(count, curr = 1, next = 1) {
       if (count ==0) {
         return curr;
       } else {
         return fn(count -1, next, curr + next);
       }
     };
     return fn (count);
   }
   console.log(fibonacci(5));
   ```

   

## 数组扁平化的N种实现方案

```js
// 5层let arr = [  [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 使用 ES6中提供的 Array.prototype.flat 处理
arr = arr.flat(Infinity);
console.log(arr);
// 结果：[1,  2,  2, 3,  4,  5,  5, 6,  7,  8, 9, 11, 12, 12, 13, 14, 10]

注意：
	1. arr = arr.flat(); 括号中写数字，表示扁平化几层。如：
	2. arr = arr.flat(2); 表示扁平化两层。
	3. arr = arr.flat(200); 表示扁平化200层，如果数组只有5层，它也是可以实现。
```

```js
 // 5层
 let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
 
 // 循环验证是否为数组
 // 基于数组的some方法进行判断检测，验证数组中的某一项有没有符合函数中提供的规则的
 while (arr.some((item) => Array.isArray(item))) {
   arr = [].concat(...arr);
 }
 console.log(arr);
```



```js
// 5层let arr = [  [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// 用toString 把所有数组转成字符串 1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10
// 再用split用逗号分隔成数组, 这时候，数组里面的数字都是字符串类型的
// 用map方法再把数组里面的字符串变成数字
arr = arr.toString().split(",").map(item=>parseFloat(item)); 
console.log(arr);
```

 

```js
// 5层
let arr = [
  [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
];
// JSON + 正则 (不推荐时候，f)
arr = JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>parseFloat(item));

console.log(arr);
```



## 数组排序

### 冒泡排序

```js
let arr = [12, 23, 12, 15, 23, 25, 14, 12];
for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
console.log(arr);
```

```js
let arr = [2, 23, 12, 15, 23, 25, 14, 12]

function bubble(arr) {
  // 外层循环i 控制比较的轮数
  for (let i = 0; i < arr.length; i++) {
    // 里层循环控制每一轮比较的次数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // es6 交换两个变量
        [arr[j], arr[j+1]] = [arr[j + 1], arr[j]] 
      }
    }
  }
  return arr
}
console.log(bubble(arr))
```



### 插入排序

```js
var a = [4,3,9,2,6,1,7,2]
function insetSort(arr) {
  var index = 0
  for (let i = 1; i < arr.length; i++) {
    index = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        index = j
      }
    }
    arr.splice(index, 0, arr[i]) // 插入元素的位置
    arr.splice(i + 1, 1) // 从小到大排序，且i大于等于index，插入的元素原本在的位置后移一位
  }
}
insetSort(a)
console.log(a); // [1, 2, 2, 3, 4, 6, 7, 9]
```

```js
var ary = [4,3,9,2,6,1,7,2]
function insert(ary) {
  // 1. 准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
  let handle=[];
  handle.push(ary[0]);

  // 2. 猜第二项开始依次抓牌，一直到把台面上的牌抓光
  for (let i = 1; i < ary.length; i++) {
    // A是新抓的牌
    let A = ary[i];
    // 和HANDLE手里的牌依次比较(从后向前比)
    for (let j = handle.length-1; j >= 0; j--) {
      // 每一次要比较的手里的牌
      let B = handle[j];
      // 如果当前新牌A比要比较的牌B大了，把A放到B的后面
      if(A>B) {
        handle.splice(j+1,0,A);
        break;
      }
      // 已经比到第一项，我们把新牌放到手中最前面即可
      if(j===0) {
        handle.unshift(A);
      }
    }
  }
  return handle;
}
ary = insert(ary);
console.log(ary); // [1, 2, 2, 3, 4, 6, 7, 9]
```



### 快速排序

```js
var ary = [4,3,9,2,6,1,7,2]
function quick(ary) {
  // 4. 结束递归(当ARY小于等于一项，则不用处理)
  if (ary.length<=1) {
    return ary;
  }
  // 1. 找到数组中的中间项，在原有的数组中把它移除
  let middleIndex = Math.floor(ary.length/2);
  let middleValue = ary.splice(middleIndex,1)[0];
  // 2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组中
  let aryLeft=[];
      aryRight=[];
  for(let i = 0; i < ary.length; i++) {
    let item = ary[i];
    item<middleValue?aryLeft.push(item):aryRight.push(item);
  }
  // 3. 递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序位置(最后让左边+中间+右边拼接成为最后的结果)
  return quick(aryLeft).concat(middleValue,quick(aryRight));
}

ary = quick(ary);
console.log(ary);
```

























































































































































