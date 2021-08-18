#### 第一题
1. **数据的特点**：

   1. 可传递。`var a = 3; var b = a;`
   2. 可运算。`var a = 3; var b = a + 2;`
   
2. 问题：`var a = xxx;`，a 内存中到底保存的是什么？
   1. xxx是基本数据，保存的就是这个数据。
   2. xxx是对象，保存的是对象的地址值。
   3. xxx是一个变量，保存的xxx的内存内容(可能是基本数据，也可能是地址值)。
   
3. 关于引用变量的赋值问题：

   - 两个或多个引用变量指向同一个对象，通过一个变量修改对象内部数据，其他所有变量看到的是修改之后的数据。
   - 两个或多个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象。

   ```js
   var obj1 = {name: 'Tom'};
   var obj2 = obj1;
   obj1.name = 'Jack';
   console.log(obj2.name); // 'Jack'
   ```

   ```js
   var obj1 = {name: 'Tom'};
   var obj2 = obj1;
   obj2.age = 12;
   console.log(obj1.age); // 12
   function fn(obj) {
       obj.name = 'A';
   }
   fn(obj1);
   console.log(obj2.name); // 'A'
   ```

   ```js
   var a = {age: 12};
   var b = a;
   a = {name: 'Bob', age: 13};
   console.log(b.age, a.name, a.age); // 12 'Bob' 13
   ```

   ```js
   var a = {age: 12};
   var b = a;
   a = {name: 'Bob', age: 13};
   b.age = 14;
   console.log(b.age, a.name, a.age); // 14 'Bob' 13
   function fn2 (obj) {
       obj = {age: 15}; // 注意：这里是obj 等于一个新对象，而不是obj.age，这个一个对象会成为垃圾对象。
   }
   fn2(a);
   console.log(a.age); // 13
   ```

   

4. 问题：在js调用函数时传递变量参数时，是值传递还是引用传递？

   理解一：都是值(基本值/地址值)传递。

   理解二：可能是值传递，也可能是引用传递(地址值)。

   ```js	
   var a = 3;
   function fn(a) {
       a = a + 1;
   };
   fn(a);
   console.log(a); // 3
   ```

5. 问题：js引擎如何管理内存？

   1. 内存生命周期：
      - 分配小内存空间，得到它的使用权。
      - 存储数据，可以反复进行操作。
      - 释放当前的小内存空间。
   2. 释放内存：
      - 局部变量：函数执行完自动释放。
      - 对象：称为垃圾对象→垃圾回收机制回收。

6. 什么是对象？

   1. 多个数据的封装体。
   2. 用来保存多个数据的容器。
   3. 一个对象代表现实世界中的一个事物。

7. 为什么要用对象？

   统一管理多个数据。

8. 对象的组成：

   1. 属性：属性名(本质上都是字符串)和属性值(任意类型)。
   2. 方法：一个特别的属性(属性值是函数)。
   
9. 什么是函数？

   1. 实现特定功能的n条语句的封装体。
   2. 只有函数是可以执行的，其他类型的数据不能执行。

10. 为什么要使用函数？

    1. 提高代码复用。
    2. 便于阅读交流。

11. 如何调用(执行)函数？

    1. test()：直接调用。
    2. obj.test()：通过对象调用。
    3. new test()：new调用。
    4. test.call/apply(obj)：临时让test成为obj的方法进行调用。

    ```js
    var obj = {};
    function test2 () {
        this.xxx = 'baidu';
    };
    test2.call(obj);
    console.log(o);
    ```

    

12. 是否加分号是编码风格问题，没有应不应该，只有自己喜欢不喜欢。

    在下面2中情况下不加分号会有问题：

    1. 小括号开头的前一条语句。

       ```js
       var a = 3
       ;(function () {
           
       })
       // 不加分号报错：var a = 3(function () {})
       ```

       

    2. 中方括号开头的前一条语句。

       ```js
       var b = 4
       ;[1, 3].forEach(function () {
           
       })
       // 报错的理解：var b = 4[1, 3].forEach(function () {})
       ```

       解决办法：在行首加分号

13. 读取对象的属性值时：会自动到原型链中查找。

    设置对象的属性值时：不会查找原型链，如果当前对象中没有此属性，直接添加此属性并设置其值。

    ```js
    function Fn () {
        
    }
    Fn.prototype.a = 'xxx';
    var fn1 = new Fn();
    console.log(fn1.a, fn1);
    
    var fn2 = new Fn();
    fn2.a = 'yyy';
    console.log(fn1.a, fn2.a, fn2);
    ```

    

14. 方法一般定义在原型中，属性一般通过构造函数定义在对象本身上。

15. 原型链测试题1：

    ![无标题](js高级课堂笔记  .assets/无标题.png)

    ```js
      function A () {
        
      }
      A.prototype.n = 1;
      var b = new A();
      A.prototype = {
        n: 2,
        m: 3
      };
      var c = new A();
      console.log(b.n, b.m, c.n, c.m)
    
    
    
    
    
    // 1 undefined 2 3
    ```

    

    原型链测试题2：

    ```js
      var F = function () {
         Object.prototype.a = function () {
             console.log('a()')
         }
         Function.prototype.b = function(){
             console.log('b()')
    	}
      }
      var f = new F()
      f.a()
      f.b()
      F.a()
      F.b()
    ```

16. 递归面试题：

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

17. ```js
    function a () {};
    var a;
    console.log(typeof a);
    ```

18. ```js
    if (!(b in window)) {
        var b = 1;
    }
    console.log(b);
    ```

19. ```js
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

20. 隔离变量：不同作用域下同名变量不会被冲突。

21. 所有的字符串的方法都是返回一个新的字符串。

22. 注意：三元运算符中不能写 return。

23. 作用域和执行上下文的区别：

    作用域是静态的，只要函数定义好了就一直存在，且不会再改变。

    执行上下文是动态的，调用函数时创建，函数调用结束时会自动释放。

24. 作用域面试题：

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

    

25. 函数执行完后，函数内部声明的局部变量是否还存在？

    一般是不存在，存在于闭包中的变量才可能存在。

26. 在函数外部能直接访问函数内部的局部变量吗？

    不能，但我们可以通过闭包让外部操作它。

27. 面试题：

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

    

28. 内存溢出与内存泄露

    内存溢出：

    1. 一种程序运行出现的错误。
    2. 当程序运行需要的内存超过了剩余的内存时，就会抛出内存溢出的错误。

    内存泄露：

    1. 占用的内存没有及时释放。
    2. 内存泄露积累多了就容易导致内存溢出。
    3. 常见的内存泄露：
       - 意外的全局变量。
       - 没有及时清理的计时器或回调函数。
       - 闭包

29. 闭包使用场景：

    1. 删除某一条数据，通过 ID 或 index去删除的时候，会使用到闭包。
    2. 发送 Ajax 请求成功或失败的回调。
    3. setTimeout 的延时回调。

30. 节流的使用场景：

    1. 滚动加载更多。
    2. 搜索框搜索的联想功能。
    3. 高频点击。
    4. 表单重复提交。

31. 防抖的使用场景：

    1. 搜索框搜索输入，并在输入完以后自动搜索。
    2. 手机号，邮箱验证输入检测。
    3. 窗口大小 resize 变化后，再重新渲染。

32. 浏览器内核：支撑浏览器运行的最核心的程序。

33. `JSON.stringify(jsObj/jsArr)` // 传 js 对象或 js 数组。js对象/数组→转JSON的字符串。

    `JSON.parse(jsonString)` // 传 JSON 字符串。是JSON字符串→转js对象/数组。

34. property：操作属性为布尔值的属性。

    attribute：操作属性为非布尔值的属性。

35. Ajax技术可以：

    1. 点击地图某个地方，会放大，使用的是局部刷新。
    2. 输入文本框内容后，失去焦点，会自动检测是否正确。

36. es6中的字符串新方法：(可以用来代替判断，做时间不够补零)

    `String.prototype.padStart(maxlength, fillString="");` 或 `String.prototype.padEnd(maxLength, fillString="");`

    第一个参数表示填充的长度，第二个参数表示用什么东西来填充。

37. `try{}catch{}` 所对应的error：

    Error.name 的六种值对应的信息：

    1. EvalError：`eval()` 的使用与定义不一致。
    2. RangeError：数值越界。
    3. ReferenceError：非法或不能识别的引用数值(如：变量未声明就使用; 函数未声明就调用)。
    4. SyntaxError：发生语法解析错误。
    5. TypeError：操作数类型错误(如：数组方法操作对象)。
    6. URIError：`URI`处理函数使用不当。

38. with 可以改变作用域链(改作用域链，系统内部会消耗大量的效率，使程序变慢，不建议使用)，它可以让它里面的代码在作用域链的最顶端，变成 with 括号里的那个对象。

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

39. `var a = 123; eval('console.log(a)')`eval 能改变作用域，eval 还拥有自己独立的作用域，尽量少用。

40. 所有对象都是实例对象。都是 new 某个东西产生的。

41. react 中使用 `<button></button>`

    如果你指定了 button 的 type 属性，要么不指定，要么指定 submit，不要指定为`type = ‘button’`。

42. 定时器：

    ```js
    var time = 1000;
    setInterval(function () {
        console.log('a');
    }, time); // 这里的time表示每隔1秒执行一次。
    
    time = 2000;
    注意：再次给定时器中的time赋值，time 是不会改变的，还是按照原来的1秒执行一次。
    // setInterval 是 window 上的方法，也可以写成 window.setInterval
    ```

    

43. 脚本化CSS: 脚本化 css 即控制 css，通过 dom 操作来控制 css。dom 不能直接操作 css，但是可以间接操作。

44. 原型链：查找变量的过程。由多级父对象，逐级继承，形成的链式结果。

45. `console.log(0 == -0); // true`

46. `Object.is(val1, val2)` 判断2个数据是否完全相等。

    如：`console.log(Object.is(0, -0)); // false`

    `console.log(Object.is(NaN, NaN)); // true`

    > 注意：这个 `Object.is(val1, val2)` 的底层是用字符串的形式来判断的。
    >
    > 在字符串中：`console.log("NaN" == "NaN"); // true`

47. `Object.assign(target, source1, source2..)` 将源对象的属性复制到目标对象上。

    ```js
    let obj = {};
    let obj1 = {username: "anverson", age: 42};
    Object.assign(obj, obj1)
    console.log(obj); // {username: "anverson", age: 42};
    
        
    let obj = {};
    let obj1 = {username: "anverson", age: 42};
    let obj2 = {sex: 'man'}
    Object.assign(obj, obj1, obj2)
    console.log(obj); // {username: "anverson", age: 42, sex: "man"}
    ```

    

48. 拷贝数据的方法：

    1. 直接赋值给一个变量。如：`var a = 1; var b = a`
    2. `Object.assign()`  // 浅拷贝
    3. `Array.prototype.concat()` // 浅拷贝
    4. `Array.prototype.slice() ` // 浅拷贝
    5. `JSON.parse(JSON.stringify())` // 深拷贝

    > 浅拷贝/浅复制：值类型是直接复制，而引用类型是改变指向，没有真正复制。
    >
    > 深拷贝/深复制：值类型是直接复制，引用类型也是直接复制，并不是改变指向(函数除外)。

49. 面试题：通过 1 和 0 获取 0，-0，Infinity，-Infinity，NaN

    ```js
    var num1 = 0 / 1; // 0
    var num2 = 0 / -1; // -0
    var num3 = 1 / 0; // Infinity
    var num4 = -1 / 0; // -Infinity
    var num5 = 0 / 0; // NaN
    console.log(num1, num2, num3, num4, num5);
    ```

    

50. 对象拓展 is

    全等判断有两个问题：

    1. 0 和 -0 在进行全等判断的时候，得到的是 true。
    2. NaN 和 NaN 在进行全等判断的时候，得到的是 false。

    ```js
    console.log(0 === -0); // true
    console.log(NaN === NaN); // false
    ```

    

    对象拓展 is 方法：

    1. 0 和 -0 在进行全等判断的时候，得到的是 false。
    2. NaN 和 NaN 在进行全等判断的时候，得到的是 true。

    ```js
    console.log(Object.is(0, -0)); // false
    console.log(Object.is(NaN,  NaN)); // true
    ```

    > 除此之外，is 方法 和 === 是一样的。

51. 创建数组的四种方式：

    1. 字面量 `[]`
    2. 构造函数 `new Array()`
    3. 工厂方法 `Array();`
    4. `Array.of()`

52. for 循环用于遍历数组

    for in 循环用于遍历对象

    for of  循环遍历实现了迭代器接口的对象(包括数组)

    迭代器接口对象一旦遍历完成，就无法再遍历了。

    > for in 循环遍历数组的时候，会改变索引值类型。

#### 第五十题

50. 解构赋值，解构出来的数据会创建全局变量，因此工作中，常常配合模块化开发去使用(这时相当于局部变量了)。

    数组依赖的是索引，对象依赖的是属性名。

    解构语法不会影响原来的数组。

51. 代理(proxy)：就是通过一个对象来保护另一个对象。

52. es6 set 对象 去重

    ```js
    var arr = [1, 2, 2, 3, 5, 3, 5];
    var set1 = new Set(arr);
    console.log([...set1])
    ```

    ```js
    // 数组去重
    var arr = [1, 2, 2, 3, 5, 3, 5];
    console.log([...new Set(arr)])
    ```

    ```js
    // 字符串去重
    let str = 'aaaabbeeaaddcbc'
    console.log([...new Set(str)].join(''));
    ```

    

53. 无论客户关闭了浏览器还是电脑，只要还在 `maxAge`秒之前，登录网站时该 Cookie 仍然有效。

54. 枚举、迭代、遍历。

55. alert 弹出来的结果都会进行内部 toString 转换，输出为字符串。

56. 代码题：

    ```js
    console.log([1, 2] + [1, 2]); // “1,21,2”
    ```

    

57. 怎样优化网页性能？

    1. 尽量减少 HTTP 请求次数
    2. 减少 DNS 查找次数
    3. 资源合并与压缩
    4. CSS Sprites
    5. Inline Images
    6. 将外部脚本置底
    7. 缓存

58. 自己实现性能测试(只供参考，不能作为参考标准)：

    1. 任何的代码性能测试都是和测试的环境有关系的，例如CUP、内存、GPU等电脑当前性能不会有相同的情况。

    2. 不同浏览器也会导致性能上的不同。

    3. ```js
       测试A所用的时间
       // console.time 可以测试出一段程序执行的时间
       console.time('A'); // 括号里不写东西，控制台上什么也不会出现
       for (let i = 0; i < 10000; i++) {
           
       }
       console.timeEnd('A'); // 打印开始的A到结束的A所用的时间
       ```

    4. `console.profile()` 在火狐浏览器中安装`FireBug`，可以更精准的获取到程序每一个步骤所消耗的时间。

59. 编写一条正则，用来验证此规则：一个 6~16位的字符串，必须同时包含有大小写字母和数字。(一般用于密码)

     ```js
      let reg = /^(?![a-zA-Z]+$)(?![a-z0-9]+$)(?![A-Z0-9]+$)[a-zA-Z0-9]{6,10}$/;
     console.log(reg.test('aaabbb')); // false
     console.log(reg.test('111aaa')); // false
     console.log(reg.test('111AAA')); // false
     console.log(reg.test('111aaaBBB')); // true
     ```

    

60. 1-10为必须包含数字、字母、下划线。必须以下划线开头。

    ```js
    let reg = ^/(?=_)\w{1,10}$/;
    console.log(reg.test('_aaabbb2_')); // true
    console.log(reg.test('111aaa')); // false
    console.log(reg.test('_3')); // true
    ```

    

61. 实现一个`$attr(name, value)`遍历

    属性为 name

    值为 value 的元素集合

    例如下面示例：

    `let ary = $attr('class','box');` // 获取页面汇总给所有 class 为 box 的元素。

    ```js
    function $attr(property, value) {
        // 获取当前页面中所有的标签
        let elements = document.getElementsByTagName('*'),
            arr = [];
        // 循环elements中的每一项
        // [].forEach.call(elements,item => {}); // 方法一：借用数组原型上的forEach方法遍历
        elements = Array.from(elements); // 把非数组转化为数组
        elements.forEach(item=>{
            // 存储的是当前元素property对应的属性值
            let itemValue=item.getAtribute(property);
            if(itemValue===value) {
                // 获取的值和传递进来的值校验成功：当前就是我们想要的
                arr.push(item);
            }
        });
        
        return arr;
    };
    console.log($attr('class','box'));
    ```

    

62. 英文字母汉字组成的字符串，用正则给英文单词前后加空格

    ```js
    let str = "no作no死，你能你can，不能no哔哔！",
        reg = /\b[a-z]+\b/ig;
    // value 就是str里的内容和当前正则匹配到的结果
    str = str.replace(reg, value => {
        return " " + value + " ";
    }).trim();
    // trim()去掉开头和结尾的空格
    console.log(str); //no 作 no 死，你能你 can ，不能 no 哔哔！
    // String.prototype.trim()/.trimLeft()/.trimRight() 去除前后，去除左边，去除右边的空格
    ```

    

63. 写一个函数，输入任意值，输出格式为 xx:xx:xx, 满60往前进一，不足10往前面添0。

    ```js
    function formatTime(time) {
      let h = 0;
      let m = 0;
      let s = 0;
    
      m = Math.floor(time / 60);
      s = Math.floor(time / 60);
      h = Math.floor(m / 60)
    
      if (m < 10) m = "0" + m;
      if (h < 10) h = "0" + h;
      if (s < 10) s = "0" + s;
    
      return h + ":" + m + ":" + s
    }
    
    console.log(formatTime(1000)); // 00:16:16
    ```

    

64. promise 和 async/await 的区别

    1. promise 是 ES6，async/await 是 ES8。
    2. async/await 相对于 promise 来讲，写法更加优雅。
    3. reject 状态：
       - promise 错误可以通过 catch 来捕捉，建议尾部捕捉错误。
       - async/await 既可以通过 .then 也可以用 try-catch 来捕捉。

65. 异步函数返回的结果也是一个成功的 promise对象。

66. axios 为什么要二次封装？

    api 统一管理，不管接口有多少，所有的接口都可以非常清晰，容易维护。

    通常我们的项目会越做越大，页面也会越来越多，如果页面非常的少，直接用 axios 也没有什么大的影响，那页面组件多了起来，上百个接口呢,这个时候后端改了接口，多加了一个参数什么的呢？那就只有找到那个页面，进去修改。整个过程很繁琐不易于项目的维护和迭代。

    [博客地址](https://zhuanlan.zhihu.com/p/87985178)

67. 如何改变 this 指向：

    - 使用 ES6 的箭头函数。

      箭头函数没有 this，所以也不能用 call()、apply()、bind() 方法改变 this 的指向。

      需要通过查找作用域链来确定 this 的值，如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。

    - 在函数内部使用 _this = this。

      先将调用这个函数的对象保存在变量 _this 中，然后在函数中都使用这个 _this

    - 使用 call、apply、bind。

    - new 实例化一个对象。

      用 new 调用函数，改变指向 new 的实例对象。

68. Promise 的缺点是什么：

    1. promise 一旦新建就会立即执行，无法中途取消。
    2. 当处于pending 状态时，无法得知当前处于哪一个状态，是刚刚开始还是刚刚结束。
    3. 如果不设置回调函数，promise 内部的错误就无法反映到外部。
    4. promise 封装 ajax 时，由于 promise 是异步任务，发送请求的三步会被延后到整个脚本同步代码执行完，并且将响应回调函数延迟到现有队列的最后，如果大量使用会大大降低了请求效率。

69. localStorage 的使用场景：

    1. 缓存一般信息，如搜索页的出发城市，达到城市，非实时定位的信息。
    2. 缓存城市列表数据，这个数据往往比较大。
    3. 每条缓存信息需要可跟踪，比如服务器通知城市数据更新，这个时候在最近一次访问的时候要自动设置过期。
    4. **localStorage 常用于长期登录+判断用户是否已经登录。**

70. sessionStorage 的使用场景：

    1. 游客/敏感账号一次性登录的。

71. cookie 一般要配合 session一起使用，session 的使用场景：

    1. 商城中的购物车。
    2. 保存用户登录信息。
    3. 将某些数据放入 session 中，供同一用户的不同页面使用。
    4. 方式在用户非法登录。

72. 请求体参数有两种编码形式：

    1. urlencoded

       概念：

       - **urlencoded** 格式，又叫 **form** 格式、**x-www-form-urlencoded** 格式。
       - 它是一种**表单格式**。

       组成格式：

       - **键值对**组成
       - 键和值之间用 **=** ：name=poloyy
       - 多个键值对之间用 **&** ：name=poloyy&age=19

       实际例子：

       浏览器百度搜索：`baidu.com/s?ie=UTF-8&wd=baidu`

    2. JSON：这个 JSON 太厉害了，看详解。

       [详解链接](https://www.cnblogs.com/poloyy/p/13138536.html)

73. xhr 和 fetch 都是 window 身上的方法，Ajax 请求只在浏览器端发送，服务器端不行(服务器端，没页面，也没有 window)。服务器端可以发 HTTP 请求。而 axios 可以满足浏览器端和服务器端都可以发送 Ajax 请求。

74. jQuery 在发送请求的时候，如果成功再发送第二次，会有回调地狱。因为它是完全靠回调函数跟你沟通的，是纯回调的形式。

    用 axios 就不会有这个问题，因为使用了 promise，可以用.then 或者 async + await 的写法，捕获错误就可以使用 try catch 把可能出错的代码放到 try 里面。这就完全避免了回调地狱。

75. axios 完整版：

    ```js
    btn1.onclick = () = {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/get_persons',
        }).then(
        	response => console.log(response.data),
            error => console.log(error)
        )
    }
    ```

    axios 精简版：

    ```js
    btn1.onclick = () = {
        axios.get('http://localhost:3000/get_persons').then(
        	response => console.log(response.data),
            error => console.log(error)
        )
    }
    ```

    

76. 坑：用 jQuery 发 Ajax 请求：get 和 post 携带的参数都是放在 data 数据中。`data: {id: 1}`

    用 axios 发送 Ajax 请求：get 携带的参数放在 params 中，携带的其实是 query 参数。`params: {id: 1}`。是真的坑。

    用 axios 发送 Ajax 请求：post 携带的参数放在 data 中，携带其实是 params 参数。`data: {name:'zs',age:18}`。默认以 JSON 的形式携带过去的(会接收不到数据)，并不是 urlencoded 方式，jQuery 默认是 urlencoded 方式。解决：

    1. 服务器中加上 `app.use(express.json())`，就可以解决，需要后端配合。
    2.  在 axios 配置中加上：`headers:{'Content-Type':"application/x-www-form-urlencoded"}`并且 data 中的数据需要这样写：`data:'name=zs&age=18`。
    3. 在 React/Vue 脚手架中的写法：`headers:{'Content-Type':"application/x-www-form-urlencoded"}`并且 data 中的数据需要这样写：`data:{name:'zs',age:18}`。

77. slice, substr 和 substring 的区别：

    [解析地址](https://www.cnblogs.com/dannyxie/p/5643860.html)

78. 请求拦截器：在请求还没有发出去之前：

    1. 把请求拦截住。
    2. 根据具体业务逻辑，决定是否放行。

    定义：在真正发请求前执行的一个回调函数。

    作用：

    1. 对请求的配置做一些处理：data、header，界面 loading 提示。

       界面 loading 提示：在发请求的时候，我可以在请求拦截器里面加载一个页面，一直加载中，然后等着数据回来的时候，要经过响应拦截器，在响应拦截器中把 loading 取消掉。这样就可以展示一个比较好的 loading 效果。这样做有个比较大的优势就是，我只要写了一个请求拦截器和一个响应拦截器，在我这个项目里面，只要我敢发请求，以后都走这个请求拦截器和这个响应拦截器，所有请求都加上了 **loading** 或者 **进度条** 的效果。

    2. 对请求进行检查，根据具体的条件决定是否真正发送请求。

    多个请求拦截器(`axios.interceptors.request.use()`)：后指定的拦截器先工作，先指定的拦截器后工作。实际工作中，一般只会配置一个请求拦截器。

79. 多个响应拦截器(`axios.interceptors.response.use()`)：先指定的拦截器先工作，后指定的拦截器后工作。

    定义：得到响应之后执行的一个回调函数。

    作用：

    1. 若请求成功，对成功的数据进行处理。
    2. 若请求失败，对失败进行进一步操作。

80. 































































