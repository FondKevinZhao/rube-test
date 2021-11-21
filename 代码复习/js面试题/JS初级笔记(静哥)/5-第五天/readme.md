#### 练习题

- 在数组后面增加元素

  ```js
  var colors = ['red','blue','green'];
  /* colors[3] = 'pink';
  console.log(colors); */
  
  /* colors[10] = 'black';
  console.log(colors); */
  
  /*  colors[3] = 'pink';
  colors[4] = 'yellow'; */
  colors[colors.length] = 'pink';//数组的length属性等于下一个元素下标的值。 [red,blue,green,pink]
  colors[colors.length] = 'yellow';
  console.log(colors);
  ```

  

- 获取数组里的元素

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  
  console.log(peiHuaF[2]); //常富
  ```



- 当数组中有表达式时，会自动进行运算。

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  
  console.log(peiHuaF[1-1]); // 杨洪波
  console.log(peiHuaF[1+1]); // 常富
  console.log(peiHuaF[1*2]); // 常富
  ```



- 获取数组中最后一个元素。

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  console.log(peiHuaF[peiHuaF.length - 1]);
  ```



- 打印数组长度。

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  console.log(peiHuaF.length); // 6
  ```



- 打印所有 `peiHuaF`数组中的元素。

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  for (var i = 0; i < peiHuaF.length; i++) {
      // console.log(i);
      console.log(peiHuaF[i]);
  }
  ```



- 倒序打印数组中的元素。

  ```js
  var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
  for (var i = peiHuaF.length - 1; i >=0 ;i--) {
      // console.log(i);
      console.log(peiHuaF[i]);
  }
  ```



- 用学过的代码**在数组的最刚开始处插入一个元素。**

  ```js
  // 数组添加用反向遍历，删除用正向遍历
  var colors = ['red', 'blue', 'green']; 
  //需求：用学过的代码在数组的最刚开始处插入一个元素。
  
  for (var i = colors.length ; i >= 0 ;i--) {//i=3 3>=0 true//2>=0 true//1>=0 true//0>=0 true
      /*
      colors[3] = colors[2];//colors[3] = green
      colors[2] = colors[1];//colors[2] = blue
      colors[1] = colors[0];//colors[1] = red
      colors[0] = colors[-1];//colors[0] = undefined
      */
      colors[i] = colors[i-1];
  }
  colors[0] = 'pink';
  console.log(colors);
  ```



- 在数组中任意位置添加元素。

  ```js
  var colors = ['red', 'blue', 'yellow','green']; 
  
  for (i = colors.length ; i >= 0 ; i--) {//4>=0 true//3>=0 true//2>=0 true
      if (i == 2) {//4==2 false//3==2 false //2==2 true
          break;//跳出循环。
      }
      /*
          colors[4] = colors[3];
          colors[3] = colors[2];
      */
      colors[i] = colors[i-1];
  }
  colors[2] = 'yellowgreen';
  
  console.log(colors);
  ```



- 求数组的和。

  ```js
  //数组的和
  var arr = [1,2,3,4,5,6,7,8,9,10];
  var num = 0;//用来存储数值的和的。
  for (var i = 0; i < arr.length ; i++) {
      // console.log(arr[i]);
      num += arr[i];
  }
  console.log(num);
  ```



- 求最小值

  ```js
  var arr = [1, 2, 3];
  
  //最小值
  var min = arr[0];//1
  for (var i = 0; i < arr.length; i++) {//0<3 true//1<3//2<3 true//3<3 false
      if (arr[i] < min) {//1<1 false//2<1 false//3<1 false
          min = arr[i];
      }
  }
  console.log(min);
  ```



- 求最大值

  ```js
  var arr = [1, 2, 3];
  //最大值
  var max = arr[0];//1
  for (var i = 0; i < arr.length; i++) {//0<3//1<3 true//2< 3 true//3<3 false
      if (arr[i] > max) {//1>1 false//2>1 true//3>2 true
          max= arr[i];//max = 2//max = 3;
      }
  }
  console.log(max);
  ```



- 反转数组（面试题）

  ```js
  //1. 将新数组作为容器。
   var arr = [1, 2, 3, 4, 5, 6];
   var newArr = [];//newArr.length=0;
  
  for (var i = arr.length - 1 ; i>=0 ; i--) {//i=1 1>=0 true//i=0 =>=0 true//i=-1 -1>=0 false
      //newArr[0]=arr[1]//newArr[0]=2;
      //newArr[1]=arr[0]//newArr[1]=1;
      newArr[newArr.length] = arr[i];
  
  }
  console.log(newArr);
  ```



- 合并数组

  ```js
  //合并数组
  var arr1 = [1];
  var arr2 = [6];
  
  //1. 新数组中合并
  var newArr = [];//newArr.length=0
  for (var i = 0 ; i < arr1.length ;i++) {//0<1 true//1<1 false
      //newArr[0] = arr1[0]
      newArr[newArr.length] = arr1[i];
  }
  for (var j = 0 ; j < arr2.length ;j++) {//0<1 true//1<1 false
      //newArr[1] = arr2[0]
      newArr[newArr.length] = arr2[j];
  }
  
  console.log(newArr);
  
  //2. 将arr2合并到arr1里面
  for (var i = 0 ; i < arr2.length; i++) {
      arr1[arr1.length] = arr2[i];
  }
  console.log(arr1);
  ```



- 数组去重(面试题)

  ```js
  //数组去重，面试题，新数组中去重，原数组中不动。
  var arr = [1,2,1];
  var newArr = [];//去重之后的数组。
  
  for (var i = 0 ; i < arr.length ; i++) {//i=0 0<3 true//i=1 1<3 true//2<3 true//3<3 false
  
      var flag = true;//一个标志位，默认的时候都往里面放//true//true//true
      /*
      j = 0 j < 2 true
  
      */
      for (var j = 0 ; j < newArr.length ; j++) {//j=0 j<0 false//j=0 j<1 true//j=1 1<1 false
          if (newArr[j] === arr[i]) {//这里已经有了//1===2 false//1===1 true
              flag = false;//不行，不能让你往里面放了。//现在flag设置为了false。
              break;
          }
      }
  
      if (flag) {//newArr[0] = 1//newArr[1]=2
          newArr[newArr.length] = arr[i];
      }
  }
  
  console.log(newArr);
  ```

  

#### 基本操作

操作数组首先要找的就是下标。

* 查看元素的值

  `数组[下标]`

  * 如果读取时超过了最大的下标，那么得到的值将为undefined。

    ```js
    var peiHuaF = ['杨洪波', '熊键', '常富', '罗电雷', '杨博超', '莹玉'];
    console.log(peiHuaF[100]);
    ```

  * 中括号中可以放置的是任何返回数值的东西。

    ```js
    console.log(peiHuaF[peiHuaF.length - 1]);
    ```

  * 数组遍历可以使用for循环来进行。

    ```js
    for (var i = 0; i < peiHuaF.length; i++) {
        // console.log(i);
        console.log(peiHuaF[i]);
    }
    ```

* 增加元素

  在不同的位置增加。

  * 在末尾添加

    * 直接使用下标添加

      ```js
      var colors = ['red','blue','green'];
      colors[3] = 'pink';
      console.log(colors);
      ```

      设置时超过了最大的下标，数组的最大下标就是最后的下标，同时数组的长度（length属性）也就变成了`最后的下标+1`

    * 使用length属性添加

      ```js
      var colors = ['red','blue','green'];
      /* colors[3] = 'pink';
      console.log(colors); */
      
      /* colors[10] = 'black';
      console.log(colors); */
      
      /*  colors[3] = 'pink';
      colors[4] = 'yellow'; */
      colors[colors.length] = 'pink';//数组的length属性等于下一个元素下标的值。 [red,blue,green,pink]
      colors[colors.length] = 'yellow';
      console.log(colors);
      ```

  * 我要在开始的地方添加

    ```js
    var colors = ['red', 'blue', 'green']; 
            //需求：用学过的代码在数组的最刚开始处插入一个元素。
    
    for (var i = colors.length ; i >= 0 ;i--) {//i=3 3>=0 true//2>=0 true//1>=0 true//0>=0 true
        /*
        colors[3] = colors[2];//colors[3] = green
        colors[2] = colors[1];//colors[2] = blue
        colors[1] = colors[0];//colors[1] = red
        colors[0] = colors[-1];//colors[0] = undefined
        */
        colors[i] = colors[i-1];
    }
    colors[0] = 'pink';
    console.log(colors);
    ```

  * 我要在指定的位置添加

    在下标2的地方添加。

    ```js
    var colors = ['red', 'blue', 'yellow','green']; 
    
    for (i = colors.length ; i >= 0 ; i--) {//4>=0 true//3>=0 true//2>=0 true
        if (i == 2) {//4==2 false//3==2 false //2==2 true
            break;//跳出循环。
        }
        /*
        colors[4] = colors[3];
        colors[3] = colors[2];
        */
        colors[i] = colors[i-1];
    }
    colors[2] = 'yellowgreen';
    
    console.log(colors);
    ```

  * 删除元素

    - 删除末尾元素

    数组长度属性是可以修改的。

    ```js
    var colors = ['red', 'blue', 'yellow','green']; 
    colors.length = 3;//将整个数组长度设置为3。
    console.log(colors);
    ```

    根据可以修改length的规则可以使用`length--`

    ```js
    var colors = ['red', 'blue', 'yellow','green']; 
    /* colors.length = 3; */
    colors.length--;
    console.log(colors);
    ```

* 删除开头的。
  
  ```js
      var colors = ['red', 'blue', 'yellow']; 
      ///这里写1的原因是不让他导致出现-1的下标出现。
      for (var i = 1;i < colors.length ;i++) {//1<3 true//2<3 true//3<3 false
          //colors[0] = colors[1]
          //colors[1] = colors[2]
          colors[i-1] = colors[i];//
      }
      colors.length--;
      console.log(colors);
  ```
  
* 删除指定下的
  
  ```js
      var colors = ['red', 'blue', 'green','yellow']; 
      //要删除下标为1的。
      for (var i = 3;i < colors.length ;i++) {//3<4 true//4<4 false
      
          colors[i-1] = colors[i];//colors[2] = colors[3]
      }
      colors.length--;
      console.log(colors);
  ```
  
#### 多维数组

数组中的每个元素的值可以存储任意类型的数据，将值存储为数组类型。

```js
  //判断是几维数组你就看最多有几层 中括号。
  var arr = [
      [1,2],
      [3,4,
       [5,6]
      ]
  ];
  
  // console.log(arr);
  
  console.log(arr[1][2][1]);
```

取多维数组的值的时候要一层一层的往里面进。不管是多少维的数组，都是一层一层的往里面找。我们用的最多的是一维、二维数组，三维用的都比较少。

```js
  var performeres = [
      //编号,演员姓名,饰演角色,性格
      [1,'孙红雷','何辅堂','为人正直不阿，欺强怜弱，善于机变。'],
      [2,'巍子','魏正先','鹰视狼顾，心狠手黑。'],
      [3,'陈数','程立雪','气质如兰，观之可亲，思想卓荦，才华压众。'],
      [4,'郭珍霓','刘二泉','动不便，但若论手段心机，十个健全人也不是她的对手。'],
      [5,'陈祉希','朱彩灵','刀马旦出身，水般柔美，火样性格。含威不露，顾盼神飞。']
  ];
```

```js
  //遍历表格
  var performeres = [
      //编号,演员姓名,饰演角色,性格
      [1, '孙红雷', '何辅堂', '为人正直不阿，欺强怜弱，善于机变。'],
      [2, '巍子', '魏正先', '鹰视狼顾，心狠手黑。'],
      [3, '陈数', '程立雪', '气质如兰，观之可亲，思想卓荦，才华压众。'],
      [4, '郭珍霓', '刘二泉', '动不便，但若论手段心机，十个健全人也不是她的对手。'],
      [5, '陈祉希', '朱彩灵', '刀马旦出身，水般柔美，火样性格。含威不露，顾盼神飞。']
  ];
  document.write('<table border="1" width="800"><tr><td>编号</td><td>演员姓名</td><td>饰演角色</td><td>性格</td></tr>');
  for (var i = 0 ; i < performeres.length ; i++){//0//1
      document.write('<tr>');
      /* console.log(performeres[i]);// */
      document.write('<td>'+performeres[i][0]+'</td>');
      document.write('<td>'+performeres[i][1]+'</td>');
      document.write('<td>'+performeres[i][2]+'</td>');
      document.write('<td>'+performeres[i][3]+'</td>');
      document.write('</tr>');
  }
  document.write('</table>');
```

  

案例：冒泡排序：冒泡排序  今天晚上自己先预习。

#### 函数

#### 什么是函数

在JS中函数是一等公民。

函数：完成指定任务并且已经命名的代码块，可以用来反复使用。

函数本质上也是数据，属于对象数据类型；函数也是值与其他变量的数据类型的值不同的是，函数中包含的是代码，这些代码是可以执行的。



#### 函数的作用

1. 解决代码冗余问题，形成代码复用。重复使用。
2. 封装代码，让函数内部的代码对外部不可见。
3. 把整个项目模块化。

#### 函数的种类

* 系统函数，系统已经定义好的一些函数，有很多，我们也学了不少。

  `alert()`、`parseInt()`、`parseFloat`、`Number()`

* 自定义函数，如果系统函数不能满足我们的需求那么我们就自己写。

如果系统函数能够实现你的需求，你自己又写了一个，你用谁的。一定要用系统的。

#### 函数自定义和调用

系统函数有很多，讲完自定义之后。

步骤：

1. 将你要写的代码写出来。（实现功能的代码）
2. 将他们用大括号包起来。
3. 使用关键字`function 函数名()`来声明这个函数。
4. ~~将功能代码中经常变的量提取出来作为参数。~~

```js
function printTable() {
    document.write('<table border="1" width="800">');
    for (var i = 0; i < 5; i++) {
        document.write('<tr>');
        for (var j = 1; j <= 5; j++) {
            document.write('<td>&nbsp;</td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}
printTable(); // 调用函数
```

**函数不调用不执行**，函数像手枪不扣扳机不发射子弹。调用函数使用`函数名()`

**注意：**

1. 函数名定义要有意义（名字要大概能让人明白你所写功能代码）。
2. 函数名定义的规则要遵守变量命名规则。
3. 这种函数声明方式声明的函数，它的名字可以重复（可以和系统的重复也可以和自定义的重复），一旦发生重复后面的覆盖前面的。（函数声明有3种方式）
4. 这种方式声明的函数调用可以放在函数声明之前也可以放在声明之后。

#### 其他声明方式

* 函数表达式声明

  ```js
  var fname = function(){
      ssssss
  };
  ```

  1. 使用函数表达式声明函数时，函数末尾应该加上一个分号。
  2. function后面可以有名字也可以没名字。
  3. 这种方式创建的函数调用必须在创建之后才能用（执行到这个表达式了才行。）

* 函数构造器声明 

  **函数是数据、是对象。**

  格式：`new Function('写语句')`（注意大小写）

  ```js
  var sayHi = new Function("alert('江鉴哲真英俊！')");
  
  sayHi();
  ```

  * 开发中不会使用这种方法声明函数，因为这种方法将会导致代码解释两次（1次是将ECMAScript中的代码解释，第2次将会把传入的代码的字符串再次转换为合法的JavaScript代码。）

#### 函数的其他注意点

函数是数据，是对象，函数名是这个数据的标识。

* 我要访问函数对应的数据而不执行函数的话，必须去掉函数名后面的那对圆括号。

* 函数是数据，函数名是标识，一个函数可以有多个标识。

  ```js
  function sayHi() {
      console.log('hello world！!!!!');
  }
  
  // console.log(sayHi); 函数未执行，输出的是整个函数的源码。
  
  var sayJiangJianZhe = sayHi;
  var sayHuaHua = sayHi;
  
  sayJiangJianZhe();
  sayHuaHua();
  ```

  

#### 函数的参数

#### arguments对象

#### 函数的返回值







提升

作用域 、作用娱链

原型链

闭包