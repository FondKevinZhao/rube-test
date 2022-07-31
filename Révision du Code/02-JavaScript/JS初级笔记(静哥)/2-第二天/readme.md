在JavaScript中不管是用单引号声明或双引号声明的字符串都可以解释转义字符。

`\r`，回车。表示打印头归位。

`\n`，换行。纸张移动一行。



#### Boolean类型

Boolean类型用来做开关、条件的处理。

只有两个值，true 和 false，而且严格区分大小写。

真：true  1 on

假：false 0  off

```js
var bool1 = true; // 布尔值
var bool2 = false;
console.log(bool1); // true
console.log(bool2); // false

var str1 = 'true'; // 字符串
var str2 = 'false';
console.log(str1); // true
console.log(str2); // false
```





#### undefined类型

undefined类型只有一个值就是undefined。**表示声明了变量但是没有初始化(没有给值)。**

```js
var str;
console.log(str); // undefined
```



#### null类型

定义变量并且赋值时直接赋值null，就是null类型。**null数据类型只有一个值就是null。**

```js
var test = null;
console.log(test); // null
console.log(typeof test); // object
```

> null 一般在对象中使用。如：对象初始化中或删除对象。

**注意：**

```js
document.write('123\r\n456'); // 123 456  这里的换行以空格来表示。
console.log('123\r\n456'); // 123
						  // 456 这一个在控制台中，实现了换行。
// 以上的两行代码都是字符串才行。
document.write('<h1>闫海静真英俊！</h1>'); // h1的效果会在页面中出现。
```





#### 获得类型

`typeof 值/变量` 最终得到的结果字符串。返回的是`数据类型名`的小写形式。

* boolean，布尔值

  ```js
  var bool1 = true;
  console.log(typeof bool1); // boolean
  ```

* string，字符串

  ```js
  var str1 = '太虚真人';
  console.log(typeof str1); // string
  ```

  ```js
  var test = 1;
  test = '呵呵';
  console.log(typeof test); // string
  ```

  

* number，数值

  ```js
  var num1 = 1;
  console.log(typeof num1); // number
  ```

  
  
* undefined

  * 未声明这个变量或变量未初始化都会返回undefined，这个时候可以认为这个变量不能真正使用。

    ```js
    console.log(typeof xiaoshuageshilipeihua); // undefined
    
    var taiXu;
    console.log(typeof taiXu); // undefined
    ```

  * 变量在没有声明时将会报错，变量没有声明只能进行一种操作就是 typeof

    ```js
    console.log(typeof taiXu); // undefined
    console.log(taiXu); // 报错
    ```

* object，对象或null。

  千万要注意，typeof null 时虽然结果返回的是object但是null依然是基本数据类型。

  不要认为null是引用类型（是对象），null就是基本数据类型。

  ```js
  var obj1 = null;
  var obj2 = {}; // 这个意思是声明了一个空对象。
  console.log(typeof obj1); // object
  console.log(typeof obj2); // object
  ```

  ```js
  console.log(typeof ‘null’); // string 字符串
  console.log(typeof null); // object
  ```

  

* 还有其他的返回值后面再说。



#### 类型转换

JavaScript是弱类型语言，弱在哪里。

1. 强类型语言在声明变量的时候必须指定对应数据类型。

   ```c
   int test = 1;
   
   test = '哈哈';
   ```

2. 弱类型语言首先不会在定义时指定变量的类型，变量的类型可以随着值的变化而变化。

   ```js
   var test = 1; // 这时候test是数字类型
   
   test = '呵呵'; // 这时候test变成了字符串类型
   console.log(typeof test); // string
   ```
   
   ```js
   var t1 = 1;
   var t2 = '1';
   console.log(t1 + t2); // 11
   ```

因为不限制具体类型就会有一种情况：两种或多种不同类型的变量进行相互操作。这个时候就涉及到了类型转换。

类型转换分为两种类型：

1. 强制类型转换，我们自己强制让某个值进行转换。
2. 隐式类型转换，这种转换方式会配合着运算符，是在运算的时候自动发生的转换。



#### 强制类型转换

* `Boolean()`小工具：将指定的值转换为布尔值，总是返回true或false。

  * 任何非空字符串都转换为true，空字符串转换为false。

    ```js
    var str1 = '';
    var str2 = '    '; // 空白串
    var str3 = '刚才的铃声真刺激！';
    var str4 = '123456789';
    // 通过Boolean强制的把 str1、str2、str3、str4转为布尔值。
    console.log(Boolean(str1)); // false 
    console.log(Boolean(str2)); // true
    console.log(Boolean(str3)); // true
    console.log(Boolean(str4)); // true 
    ```

  * 任何的**非零数值转换为true**，**0**和**NaN**转换为**false**。

    ```js
    var num1 = 0;
    var num2 = 1;
    var num3 = -1;
    var num4 = NaN;
    console.log(Boolean(num1)); // false
    console.log(Boolean(num2)); // true
    console.log(Boolean(num3)); // true
    console.log(Boolean(num4)); // false
    ```

    ```js
    var a = b;
    console.log(Boolean(a)); // 报错 // b is not defined
    ```

    

    NaN（Not a Number），是一个特殊的数值，用来表示本来要返回的值是数值但是没有返回数值的情况。

    ```js
    // undefined表示可以认为这个变量不能真正使用，所以没有办法进行运行。
    var unde = undefined;
    console.log(unde + 1); // NaN 要得到结果应该是数值，但是没办法，我得不到，所以只能用NaN表示。
    ```

    ```js
    // 这个NaN比较恶心
    console.log(NaN + 1); // NaN
    console.log(NaN - 1); // NaN
    ```

    ```js
    // 判断NaN是否等于NaN
    console.log(NaN == NaN); // false
    ```

  * undefined，将会转换为false。

    ```js
    console.log(Boolean(undefined)); // false
    ```
  
* 任何**对象**都会被转换为**true**，**null**转换为**false**。
  
  ```js
    var obj1 = {}; // {}表示一个空对象
    var obj2 = null;
    console.log(Boolean(obj1)); // true
    console.log(Boolean(obj2)); // false
    console.log(Boolean(null)); // false
  ```
  
* `Number()`小工具，将非数值转换为数值。

  * true转换为1，false转换为0。

    ```js
    var bool1 = true;
    var bool2 = false;
    console.log(Number(bool1)); // 1
    console.log(Number(bool2)); // 0
    ```

    > 这个Number其实是比较霸道的，不是0就是1。
    >
    > 所以我们在用的时候一般不会用它，而是用parseInt()。

  * null转换为0。

    ```js
    var nu1 = null;
    console.log(Number(nu1)); // 0
    ```

    ```js
    // undefined 是"未定义"，是使用不了的，这时候如果转换成数值，返回就是NaN。
    var unde = undefined;
    console.log(Number(unde)); // NaN
    ```

    

  * 字符串遵循如下规则：
    * 字符串只包含数字，则原样转换。
    * 如果是空串和空白串转换为0。
    * 除了上述的这两种情况剩下全转NaN。

    ```js
    var str1 = '123456789';
    var str2 = 'haha123456789';
    var str3 = '';
    var str4 = ' ';
    
    console.log(str1); // 123456789
    console.log(str2); // haha123456789
    console.log(str3); // 结果为空，啥也没有
    console.log(str4); // 结果为空，啥也没有
    ```

    ```js
    var str1 = '123456789';
    var str2 = 'haha123456789'; // 不管这个haha放在前面还是中间都已经不是纯数字了，所以也会返回NaN。
    var str3 = '';
    var str4 = ' ';
    
    console.log(Number(str1)); // 123456789
    console.log(Number(str2)); // NaN 这里面不是纯数字，所以转为NaN
    console.log(Number(str3)); // 0
    console.log(Number(str4)); // 0
    ```

    

* `parseInt()`小工具：将字符串转换为整数。

  它会忽略字符串前面的空格，找到第一个字符，如果第一个字符不是数字或负号则返回NaN，如果第一个字符是数字或负号继续往下找直到解析完所有的后续的字符或者遇到一个非数字字符串。

  ```js
  var str1 = '123456';
  var str2 = 'a123456';
  var str3 = '     123456';
  var str4 = '     -123456';
  var str5 = '12px';
  
  console.log(Number(str1)); // 123456  这个用Number也没有问题，因为是纯数字。
  console.log(Number(str2)); // NaN
  console.log(Number(str3)); // 123456
  console.log(Number(str4)); // -123456
  console.log(Number(str5)); // NaN
  ```

  ```js
  var str1 = '123456';
  var str2 = 'a123456';
  var str3 = '     123456';
  var str4 = '     -123456';
  var str5 = '12px';
  
  console.log(parseInt(str1)); // 123456
  console.log(parseInt(str2)); // NaN
  console.log(parseInt(str3)); // 123456
  console.log(parseInt(str4)); // -123456
  console.log(parseInt(str5)); // 12
  ```

  ```js
  // parseInt 里面的Int 全称是integer [ˈɪntɪdʒə(r)] 表示整数，所以它的取值只会是整数，后面的小数会直接忽略掉。
  console.log(parseInt(1.23456abcdefg)); // 1
  ```

  

* `parseFloat()`小工具：将字符串转换为小数。

  ```js
  var str1 = '1.23456abcdefg';
  console.log(parseFloat(str1)); // 1.23456
  ```

  ```js
  var str = '1abcdefg';
  console.log(parseFloat(str)); // 1
  ```

  

* `toString()`小工具：将传入的值转换为字符串。

  数值将会原样转换，只不过变为了字符串。

  布尔值true转换为字符串true，false转换为字符串false。

  **如果是undefined和null将会直接报错。**

  ```js
  var str = '太虚真人说要不抽烟了！'；
  var num = 250;
  var bool = false;
  
  // 加了typeof我们可以看到他们是属于什么类型的。
  console.lg(typeof str.toString()); // string
  console.lg(typeof num.toString()); // string
  console.lg(typeof bool.toString()); // string
  ```

  ```js
  var str = '太虚真人';
  var num1 = 222;
  var bool = false;
  
  // toString后面的小括号不用写东西。
  console.log(str.toString());
  console.log(num1.toString());
  console.log(bool.toString());
  ```

  ```js
var str = '太虚真人说要不抽烟了！'；
  var num = 250;
  var bool = false;
  
  // 把typeof去掉后，我们可以看到：
  console.lg(str.toString()); // 太虚真人说要不抽烟了！
  // str默认就是字符串了，返回也是字符串，所有没有必要再转成字符串。
  console.lg(num.toString()); // 250 数值型转换成字符串了
  console.lg(bool.toString()); // false 布尔值，最后转换成字符串
  ```
  
  ```js
var und = undefined;
  var nul = null;
  
  // 如果是undefined和null将会直接报错。
  console.log(und.toString()); // 报错
  console.log(nul.toString()); // 报错
  ```
  
  ```js
var b = 我不饿; // 这里的值不是数字的话，要加引号，不然会报错。
  console.log(b.toString()); // 报错
  ```
  
  

* `String()`小工具。

  * 如果能够直接使用toString()则在内部调用toString。
  * 如果值是null则直接返回null。
  * 如果值是undefined，则返回undefined。

  ```js
  var und = undefined;
  var nul = null;
  
  console.log(String(und)); // undefined
  console.log(String(null)); // null
  ```
  
  ```js
  // 加了typeof我们可以看到他们是属于什么类型的。
  var und = undefined;
  var nul = null;
  
  // 如果是undefined和null将会直接报错。
  console.log(typeof String(und)); // string
  console.log(typeof String(null)); // string
  ```

> toString 和 String 我们一般用 String。因为很多时候，我们不能确定当前变量中的值是什么。



```js
// 现场题目：

var a = true;

console.log(parseInt(a)); // NaN 
// 解析：parseInt是将字符串转换成什么什么整数，但是这里传进来的是true布尔值，类型就不一样。这时候parseInt调用String。parseInt(String(true))，返回字符串的“true”。你是一个字符串的true，这时候我再运行，它会先找第一位是不是数值，如果不是，那最后的结果就是NaN了。

console.log(Number(a)); // 1
// 解析：Number里面传的是布尔值，不是1就是0，传的是true，所以返回的是1。
```

```js
console.log(parseInt('123abc456')); // 123
// 解析：从第一位开始找，找到第一个非数值的地方，就会停止，不会再往下找。
```

```js
var a true;
/* 
	a = true; 是一个布尔值 boolean
	parseInt(); // 传入的参数必须是字符串。也就是说a现在得是个字符串才行。但是现在不是，这个时候 a 就调用了 String 把 a 扔进去了。String(a);
	a = Sring(a) // a = 'true';
	parseInt('true'); // NaN
*/
console.log(parseInt(a)); // NaN
```



#### 隐式类型转换

隐式类型转换和上面的规则是相同的，但是要和运算符相关联。



### 运算符

* 表达式：将数据用运算符按照对应的规则连接起来的式子叫表达式（可以被求值的代码）

  ```js
  var a = 100;
  var b = 200;
  console.log(a + b);
  // 这里面有三个表达式，前两个有等号，最后一个有加号。
  ```

* 现代的计算机的运算符是按照功能来进行划分的。

  1. 算数运算符
  2. 赋值运算符
  3. 复合运算符
  4. 比较运算符
  5. 相等运算符
  6. 逻辑运算符
  7. 三元运算符（三目运算符）

* 算数运算符

  * `+`

    * 如果两个操作数都是字符串，则第二个操作数和第一个操作数拼接起来。
    * 如果只有一个操作数是字符串，则将另外一个操作数转换为字符串。
    * 其他类型调用`Number()`进行转换。**(如果相加的值都是数值或布尔值，那就可以直接调用Number()相加，不会转换成字符串)**
    * `+`放在一个数值前面表示的是正号，如果后面的操作数不是数值则会自动调用Number()进行转换。

    ```js
    console.log(1 + 1); // 2  // 返回的是数值
    console.log(1 + '1'); // 11 // 返回的是字符串
    // 解析：这个例子 因为有字符串的'1'所以我要将另外一个数值的1转换为字符串。那这个时候会在内部自动调用String(1)，将数值的1转换为字符串1，转换完成之后再进行拼接。
    
    console.log('1' + '1'); // 11 // 返回的是字符串
    ```

    ```js
    console.log(true + '1'); // true1
    // 解析：true 不是一个字符串，要先将true变为字符串。String(true) + '1'  --> 'true' + '1' --> true1
    ```
    
    ```js
    console.log(true + 1); // 2
    console.log(true + true); // 2 // 数值型的2
    ```
    
    ```js
    var a = true;
    console.log(a); // true 数字型的true。
    
    var a = true;
    console.log(+a); // 1
    // 解析：这个+a在内部执行了一个 +Number(a);
    ```
  
    
  
    > 有字符串那最终结果为字符串，如果都是Number，那最终结果为数值。如果有一个是字符串型，那么其他值会转换成字符串再拼接。
    >
    > 
    >
    > +（加法）的作用：
    >
    > ① 拼接字符串 
    >
    > ② 进行数学运算
  
  * `-`
  
    * 如果一个操作数是字符串、布尔值、null、undefined则直接调用Number进行转换。
  
      ```js
      var num1 = 1;
      var num2 = true;
      
      console.log(num1 - num2); // 0
      // 因为这个true 现在被转换为了1
      ```
  
      ```js
      var num1 = '1';
      var num2 = '2';
      console.log(num1 - num2); // -1
      ```
      
      ```js
      var num3 = true; // 经过Number()转换之后，为1。
      var num4 = null; // 经过Number()转换之后，为0;
      
      console.log(num3 - num4); // 1
      ```
      
      ```js
        // 题目：快速将字符串转换为数值
        var str = '99';
        // 想办法转换成数值型。
        // 方法一：
        console.log(Number(str)); // 99
        // 方法二：
        console.log(parseInt(str)); // 99
        // 方法三：
        console.log(parseFloat(str)); // 99
        // 方法四：
        console.log(str - 0); // 99 // str 会调用Number()转换为99。
        // 方法五：
        console.log(+str); // 99
      ```
  
      
  
      > - 加、减、乘、除肯定会进行数学运算，如果不是数值的情况下，肯定会转换为数值。
      >
    > - 但是**加号**是一个特殊的存在，它可以在遇到字符串的时候，作为拼接来使用。
      > - 加号遇到字符串，字符串优先，如果没有字符串那就是数值。
  
  * `*`，乘法在计算中使用`*`不是用`X`
  
    * 如果操作数不是数值，则在后台调用Number()

  * `/`，`被除数/除数=商`

    * 被除数如果为0，结果为0。

    * 除数为0结果为Infinity。

      Infinity参与运算结果还是Infinity。

    * 被除数和除数都为0，结果是NaN。

    * 如果操作数不是数值，则在后台调用Number()进行转换。

      ```js
      console.log(0 / 0); // NaN
      console.log(0 / 1); // 0 // 0 除以 1
      console.log(1 / 0); // Infinity // 1 除以 0
      
      
      console.log(1 / 0 + 1); // Infinity // 无穷再+1还是无穷。
      console.log(true * true / null); // Infinity
      console.log(true * true / 1); // 1
      ```
      
      

  * `%`，余数，求模。

    * `console.log(3 % 5); // 3` 
  
       第一个数小于第二个数则求模的结果为第一个数。
    
      ```js
      console.log(5 % 3); // 2
      console.log(3 % 5); // 3 
      // 第一个数小于第二个数则求模的结果为第一个数。
      ```

      
  
    * 求模的结果的正、负由第一个数决定。(第一个数是正数结果就是正数，第一个数是负数，结果就是负数)
    
      ```js
      // 求模的结果的正、负由第一个数决定。
      console.log(-5 % 3); // -2
      console.log(5 % -3); // 2
      console.log(-5 % -3); // -2
      console.log(-5 % 5); // -0
    console.log(-5 % -5); // -0
      ```
  
      
    
    * 第二个数不能为`0`，如果为`0`结果为`NaN`。
  
    * 任何涉及到NaN操作都会返回NaN。
      * NaN与任何值都不相等，包括NaN本身。
    
      ```js
      console.log(-5 % 0); // NaN
      ```



求100以内的奇数：


    // 求100以内的奇数
    for (i = 1; i <= 100; i++) {
        if (i % 2 != 0) 
        console.log(i);
    }

 求100以内的偶数：

```js
for (j = 1; j <= 100; j++) {
    if (j % 2 == 0)
    console.log(j);
}
```



```js
/* 第一个作用：获得奇偶数 */
var x = 101;
console.log(x % 2 == 0); // false

/* 第二个作用：获得一个范围内的数 */
var x = 104;
console.log(x % 8); // 不管x是多少获得的都是0~7之间的数。

// 现在我有一个数是678
// 我想算出来个位数是多少，十位数是多少，百位数是多少。
var x = 678;
console.log(parseInt(x / 100));
console.log(parseInt(x / 10 % 10));
console.log(parseInt(x % 10)); // 任何数字模上10，都得它的个位数

//  数 / 要求的位数 % 10
var  y = 6789;
console.log(parseInt(y / 1000 % 10)); // 千位
console.log(parseInt(y / 100 % 10)); // 百位
console.log(parseInt(y / 10 % 10)); // 十位
console.log(parseInt(y / 1 % 10)); // 个位

console.log(parseInt(y / 1000)); // 千位
console.log(parseInt(y / 100 % 10)); // 百位
console.log(parseInt(y / 10 % 10)); // 十位
console.log(parseInt(y % 10)); // 个位
```

> 余数：
>
> 第一个数是正数，那结果就是正数，第一个数是负数，那结果就是负数。

  * 自增、自减

    `++`、`--`，在自身的基础上`+1`或`-1`

    ++或--放在操作数的前面或后面只对本行有一些区别。运算完成之后都要完成+1或-1。

    * 如果放在操作数的后面**先用后加。**
    * 如果放在操作数的前面**先加后用。**

    如果操作数不是数值则内部调用 Number()工具进行转换，__会改变原变量的值。__
    
    ```js
    var num = 1;
    num++;
    console.log(num); // 2
    
    var num = 1;
    console.log(num++); // 1
    ```
    
    ```js
    var num = 1;
    num--;
    console.log(num); // 0
    ```
    
    ```js
    var num = 1;
    ++num;
    console.log(num); // 2
    
    var num = 1;
    num++;
    console.log(num); // 2
    ```
    
    ```js
    var num = 1;
    console.log(num++); // 1 // 这里是先用后加，给谁用呢？给console.log 用。
    console.log(num); // 2
    ```
    
    ```js
    var num = 1;
    console.log(++num); // 2 // 这里是先加后用
    console.log(num); // 2 
    ```
    
    ```js
    // 视频位置：在第18天的第五个视频，10分钟处。
    var a = 2;
    var b = 3;
    var c = a + b++; // a = 2, b = 4, c = 5
    c = ++a + b++; // a = 3, b = 5, c = 7
    c = a + b--; // a = 3, b = 4, c = 8
    console.log(a);
    console.log(b);
    console.log(c);
    ```
    
    ```js
    // 加或减
    var str1 = 'abc';
    var str2 = 1;
    console.log(str1 + str2); // abc1
    console.log(typeof str2); // number
    // strs 为啥不是string，不是在上面运算时已经转换成了string了吗？因为虽然自动类型转换了，但是只是转换了变量的值，变量本身并没有改变。
    ```
    
    ```js
    // 自增或自减 如果操作数不是数值则内部调用 Number()工具进行转换，会改变原变量的值。
    var a = true;
    a++;
    console.log(a); // 2
    
    var a = true;
    a++;
    console.log(typeof a); // number
    // 加加 或 减减本来是要对数值进行操作，所以我就认为你是要操作数值。整个的操作数值。
    ```
    
    ```js
    a++; 等于 a = a + 1; 一样吗？
    
    var a = '1';
    a++;
    console.log(a); // 2
    
    var b = 'a';
    var b = b + 1;
    console.log(b); // 11
    // a++ 不一定 等于 a = a + 1;
    ```
    
    

* 复合运算符

  * `+=`，`a+=b`完全等价于`a = a + b;`

  * `-=`，`a-=b`完全等价于`a = a - b;`

  * `*=`，   `a*=b`完全等价于`a = a * b;`

  * `/=`，`a/=b`完全等价于`a = a / b;`

  * `%=`，`a%=b`完全等价于`a = a % b;`

  

* 赋值运算符

  `=`，将等号右边的值或表达式的结果给到变量。

  左边肯定是个**容器**（变量、对象属性），右边肯定是**值**或有值的东西。

  ```js
  var a = 7;
  var b = 9;
  a = b;
  ```

* 比较运算符

  比较后的结果是布尔值，true或false。

  * `>`，大于
  * `<`，小于
  * `>=`，大于等于
  * `<=`，小于等于

  比较规则：

  * 如果是两个数值直接执行数值比较。

    ```js
    var num1 = 1;
    var num2 = 2;
    
    console.log(1 > 2); // false
    ```

    

  * 如果两个操作数都是字符串，则比较对应的字符编码（不常用）

    从第一个字符的编码开始比较，如果第一个字符的编码能够比较出大小则后面的不比较，如果不能则继续比较第二位依次类推，一直到最后都没有比较出来，位数多的获胜。

    ```js
    var num1 = '234';
    var num2 = '123456789';
    
    console.log(num1 > num2); // true
    ```

    

  * 其他类型的值比较使用Number()进行转换。

    ```js
    var num1 = 234;
    var num2 = '123456789';
    
    console.log(num1 > num2); // false
    
    var num1 = '123';
    var num2 = 234;
    
    console.log(num1 < num2); // true
    ```

    

  * 任何数和NaN比较都为false。包括NaN自己。

    ```js
    console.log(1 > NaN); // false
    console.log(1 >= NaN); // false
    console.log(1 < NaN); // false
    console.log(1 <= NaN); // false
    console.log(NaN >= NaN); // false
    console.log(NaN <= NaN); // false
    consle.log(NaN == NaN); // false
    ```

  

* 相等操作符

  * `==`，等于，如果两个操作数相等，则返回true。

  * `!=`，不等于，如果两个操作数不相等，则返回true。

    ```js
    var var1 = true;
    var var2 = 1;
    console.log(var1 != var2); // false
    ```

    

  比较规则：

  1. 如果类型相同直接比较值是否相等。

     ```js
     var num1 = 1;
     var num2 = 2;
     
     console.log(num1 == num2); // true
     ```

     ```js
     var str1 = '1';
     var str2 = '2';
     
     console.log(str1 == str2); // false
     ```

     

  2. 类型不同，只要有一个操作数是数值就先调用Number()。

     ```js
     var str1 = '1';
     var str2 = 1;
     
     console.log(str2 == str1); // true
     ```

     ```js
     var var1 = true;
     var var2 = 1;
     console.log(var1 == var2); // true
     ```

     

  3. 基本数据类型 Number、String、Boolean 和基本数据类型 Number、String、Boolean 相互比较时会先转换为数值型，也就是说会先调用Number(数据)。

  4. NaN和NaN不相等。

     ```js
     console.log(NaN == NaN); // false
     console.log(NaN != NaN); // true
     ```

     ```js
     console.log(Infinity == Infinity); // true
     ```

     

  5. null和undefined是相等的。

     ```js
     console.log(null == undefined); // true
     ```

     

* 全等、全不等

  * `===`，全等于，如果两个操作数没有经过转换就相等的情况下返回true。

    ```js
    var str1 = '1';
    var str2 = 1;
    console.log(str2 == str1); // true
    ```

    ```js
    var str1 = '1';
    var str2 = 1;
    console.log(str2 === str1); // false
    // 在没有转换的情况下它们的值是不相等的。
    ```

    

  * `!==`，不全等，在两个操作数未经转换就不相等的情况下返回true。

