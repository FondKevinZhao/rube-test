### JS初级第一次错题

1. ```js
   分析下面的代码，输出的结果是( )
   
   var arr=new Array(5);
   arr[1]=1;
   arr[5]=2;
   console.log(arr.length);
   
   A、2
   B、5
   C、6
   D、报错
   【参考答案】: C
   ```
   
2. ```js
   以下 ECMAScript 变量命名格式正确的是( )
   
   A、_125dollor
   B、1207A
   C、-dollor
   D、this
   【参考答案】: A
   ```
   
3. ```js
   下面代码的输出是什么?( )
   
   +true;
   !"Lydia";
   
   A、1 false
   B、false NaN
   C、false false
   【参考答案】: A
   ```
   
5. ```js
   下面代码的输出是什么?( )
   
   var number = 0;
   console.log(number++);
   console.log(++number);
   console.log(number);
   
   A、1 1 2
   B、1 2 2
   C、0 2 2
   D、0 1 2




   【参考答案】: C
   ```
   
6. ```js
   下面代码的输出是什么?( )
   
   var num = 8;
   var num = 10;
   console.log(num);
   
   A、8
   B、10
   C、SyntaxError
   D、ReferenceError



   【参考答案】: B
   ```
   
7. ```js
   请问一下代码运行后的结果是
   
   function funcSwitch(sFlag){
   switch(sFlag) { 
   case 'Test1': alert('Test1');
   break;
   case 'Test2': alert('Test2'); 
   break; default:; 
   	} 
   } 
   funcSwitch('Test2');
   
   A、Test2
   B、Test1
   C、undefined
   D、"null"



   【参考答案】: A
   ```
   
8. ```js
   请选择结果为真的选项（  ）
   
   A、null == undefined
   B、null === undefined
   C、undefined == false
   D、NaN == NaN



   【参考答案】: A
   ```
   
9. ```js
   以下代码运行后弹出的结果是(   )
   
   var a = 888;
   ++a;
   alert(a++);
   
   A、888
   B、889
   C、890
   D、891



   【参考答案】: B
   ```
   
10. ```js
    下列的哪一个表达式将返回值为假（  ）
    
    A、!(3<=1)
    B、(4>=4)&&(5<=2)
    C、(“a”==“a”)&&(“c”!=“d”)
    D、(2<3)||(3<2)



    【参考答案】: B
    ```
    
11. ```js
    以下不属于JS基本数据类型的选项是 ()
    
    A、undefined
    B、number
    C、interface
    D、string



    【参考答案】: C
    ```
    
12. ```js
    如何编写当 i 不等于 5 时执行一些语句的条件语句？
    
    A、if(i != 5)
    B、if(i >< 5)
    C、if =! 5 then
    D、if >< 5



    【参考答案】: A
    ```
    
13. ```js
    在JavaScript中，有多少种不同类型的循环？
    
    A、三种。for循环、while循环和do...while循环
    B、一种。for循环
    C、四种。for循环、while循环、do...while循环以及loop...until循环



    【参考答案】: A
    ```
    
14. ```js
    for循环如何开始？
    
    A、for(i=0;i<=5)
    B、for(i=0;i<=5;i++)
    C、for(i<=5;i++)
    D、for i=1 to 5



    【参考答案】: B
    ```
    
15. ```js
    以下哪个值放在if中被隐式类型转换后不会变为false
    
    A、数字 -1
    B、数字 0
    C、null
    D、空字符串



    【参考答案】: A
    ```
    
16. ```js
    以下程序运行结束正确的是：
    
    var a = 3;
    var b = 4;
    var c = 5;
    console.log(a>b && c>b || a < c)
    
    A、1
    B、true
    C、false
    D、报错



    【参考答案】: B
    ```
    
17. ```js
    下面关于typeof的表述中，错误的是
    
    A、typeof ‘123’ 返回 number
    B、typeof true 返回 boolean
    C、typeof null 返回 object
    D、typeof undefined 返回undefined



    【参考答案】: A
    ```
    
18. ```js
    下面这段代码，控制台会打印什么
    
    var age = 35;
    
    if (age >= 20 && age <= 29) {
      console.log('期货');
    } else if (age >= 30 && age <= 39) {
      console.log('抢手货');
    }else if (age >= 40 && age <= 49) {
      console.log('现货');
    }else {
      console.log('不在讨论范围内!');
    }
    
    A、期货
    B、抢手货
    C、现货
    D、不在讨论范围内



    【参考答案】: B
    ```
    
19. ```js
    下面关于函数的说法错误的是
    
    A、函数内部如果没有写return，则该函数的返回值是 undefined
    B、函数内部的arguments对象用来存储传入到函数中的实参
    C、函数的形参和实参的个数必须相等
    D、函数会在执行完return语句之后停止并立即退出



    【参考答案】: C
    ```
    
20. ```js
    下面代码的打印值，哪个是正确的？
    
    var a = 1;
    var b;
    if (true) {
      a = 2;
    } else {
      b = 3;
    }
    
    console.log(a);
    console.log(b);
    
    A、1 3
    B、1 undefined
    C、2 undefined
    D、undefined undefined


    
    【参考答案】: C
    ```
    
    
    
