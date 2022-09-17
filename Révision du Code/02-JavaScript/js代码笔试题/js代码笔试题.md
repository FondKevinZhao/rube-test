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

4. 





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
// 方法一：
let ary1 = ['a1','a2','a3'];
let ary2 = ['a','b'];
let ary3 = ary1.concat(ary2);
console.log(ary3)

// 方法二：
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log('arr3', arr3)

// 方法三：

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

























































































































































