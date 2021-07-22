### JS初级第二次考试

1. ```js
   以下关于 Array 数组对象的说法不正确的是( )
   
   - A、对数组里数据的排序可以用 sort 函数，如果排序效果非预期，可以给 sort 函数加一个排序函数的参数
   - B、数组元素的索引都是连续的
   - C、向数组的最后位置加一个新元素，可以用 pop 方法
   - D、unshift 方法用于向数组删除第一个元素
   
   【参考答案】: CD
   ```
   
   
2. ```js
   以下代码运行的结果是输出( )
   
   var a = b = 10;
   (function(){
   var a=b=20
   })();
   console.log(b);
   
   - A、10
   - B、20
   - C、报错
   - D、undefined
   
   【参考答案】: B
   ```
   
   
   
3. ```js
   以下代码运行后的结果是输出( )
   
   var a=[1, 2, 3];
   console.log(a.join());
   
   - A、123
   - B、1,2,3
   - C、1 2 3
   - D、[1,2,3]
   
   【参考答案】: B
   ```
   
   
   
4. ```js
   [1,2,3,4].join('0').split('') 的执行结果是( )
   
   - A、'1,2,3,4'
   - B、[1,2,3,4]
   - C、[“1”,“0”,“2”,“0”,“3”,“0”,“4”]
   - D、'1,0,2,0,3,0,4'
   
   【参考答案】: C
   ```
   
   
   
5. ```js
   下面关于数组的描述正确的是( )
   
   - A、数组的 length 既可以获取，也可以修改
   - B、调用 pop() 方法，不会修改原数组中的值
   - C、shift() 方法的返回值是新数组的长度
   - D、调用 concat() 方法，会修改原数组的值
   
   【参考答案】: A
   ```
   
   
   
6. ```js
   下列程序中alert按顺序分别弹出( )
   
   var a = 10;
   function test() {
   a = 100;
   alert(a);
   alert(this.a);
   var a;
   alert(a);
   }
   
   test();
   
   - A、10 100 10
   - B、100 10 100
   - C、10 10 100
   - D、程序报错
   
   【参考答案】: B
   ```
   
   
   
7. ```js
   分析下面的代码，输出的结果是( )
   
   var arr=new Array(5);
   arr[1]=1;
   arr[5]=2;
   console.log(arr.length);
   
   - A、2
   - B、5
   - C、6
   - D、报错
   
   【参考答案】: C
   ```
   
   
   
8. ```js
   下面代码的输出是什么?( )
   
   function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
   }
   var lydia = new Person("Lydia", "Hallie");
   var sarah = Person("Sarah", "Smith");
   console.log(lydia);
   console.log(sarah);
   
   - A、Person{firstName:"Lydia",lastName:"Hallie"} , undefined
   - B、Person {firstName: "Lydia", lastName: "Hallie"} , Person {firstName: "Sarah", lastName: "Smith"}
   - C、Person {firstName: "Lydia", lastName: "Hallie"} , {}
   - D、Person{firstName:"Lydia",lastName:"Hallie"} , ReferenceError
   
   【参考答案】: A
   ```
   
   
   
10. ```js
    下面代码的输出是什么?( )
    
    var obj = { a: "one", b: "two", a: "three" };
    console.log(obj);
    
    - A、{ a: "one", b: "two" }
    - B、{ b: "two", a: "three" }
    - C、{ a: "three", b: "two" }
    - D、SyntaxError
    
    【参考答案】: C
    ```
    
    
    
11. ```js
    分析下面的 JavaScript 代码段，输出的结果是( )
    
    function employee(name,code)
    {
    this.name="wangli";
    this.code="A001";
    }
    
    var newemp = new employee("zhangming",'A002');
    document.write("雇员姓名:"+ newemp.name+ " ");
    document.write("雇员代号:"+ newemp.code +" ");
    
    - A、雇员姓名:wangli 雇员代号:A001
    - B、雇员姓名:zhangming 雇员代码:A002
    - C、雇员姓名:null, 雇员代码:null
    - D、代码有错误，无输出结果
    
    【参考答案】: A
    ```
    
    
    
12. ```js
    关于js中apply()和call()的说法错误的是( )
    
    - A、apply()和call()，两者用途都是在特定的作用域中调用函数，等于重新设置了函数体内this对象的值
    - B、apply()和call()可以传递参数，两者接收参数方式不同
    - C、apply()和call()都是用来调用函数，而且是立即调用
    - D、apply()和call()参数不能是数组
    
    【参考答案】: D
    ```
    
    
    
13. ```js
    指定对象的属性以下方式正确的是（  ）
    
    - A、obj["age"] = 25
    - B、obj(age) = 25
    - C、obj(@"age") = 25
    - D、obj("age") = 25
    
    【参考答案】: A
    ```
    
    
    
14. ```js
    var foo = 1;
    (function(){
     console.log(foo);
     var foo = 2;
     console.log(foo);
    })();
    
    - A、undefined 2
    - B、undefined undefined
    - C、2 undefined
    - D、2 2
    
    【参考答案】: A
    ```
    
    
    
15. ``` js 
    有以下JS代码：
    
     var User = {   
      count:1,   
      getCount:function(){
       return this.count;   
      }   
     }  
     console.log(User.getCount()); 
     var func = User.getCount; 
     console.log(func());
     以上代码的打印结果分别是（  ）
    
    - A、1,1
    - B、1,2
    - C、1,undefined
    - D、程序报错
    
    【参考答案】: C
    ```
    
    
    
16. ```js
    有以下代码：
     var x = 5;
    
     (function () { 
      console.log(x); 
      var x = 10; 
      console.log(x); 
     }());
    
     上面的代码，输出的两个值是（ ）
    
    - A、没有输出，抛出ReferenceError：x没有定义
    - B、undefined 10
    - C、5 10
    - D、10 10
    
    【参考答案】: B
    ```
    
    
    
17. ```js
    以下代码运行后，arr的结果为（ ），arr2的结果为（ ）
    
    var arr = [1,2];
    
    var arr2 = arr.concat();
    
    arr2.push( arr.splice(1,0) );
    
    - A、[1,2]
    - B、[1,2,[2]]
    - C、[1,2,[]]
    - D、[1,2,3]
    
    【参考答案】: AC
    ```
    
    
    
18. ```js
    阅读以下代码，输出true的是function Person(){};
    
    var person = new Person;
    
    - A、person.__proto__ === Person.prototype
    - B、person.__proto__ !== Person.prototype
    - C、person.__proto__.constructor === Person
    - D、 person.__proto__.constructor !== Person
    
    【参考答案】: AC
    ```
    
    
    
19. ```js
    // 1
    console.log(a); // ?
    var a;
    function a() {}
    
    // 2
    function b() {}
    var b;
    console.log(b); // ?
    
    // 3
    
    var c = 1;
    function c() {}
    console.log(c); // ?
    
    - A、ƒ a(){} ƒ b(){} 1
    - B、undefined undefined f c(){}
    - C、ƒ a(){} undefined 1
    - D、undefined ƒ b(){} f c(){}
    
    【参考答案】: A
    ```
    
    
    
20. ```js
    var b = 1;
    
    function fn1() {
     console.log(b); // ?
    }
    b=3;
    
    function fn2() {
     var b = 2;
     fn1();
    }
    
    fn2();
    
    - A、2
    - B、undefined
    - C、1
    - D、3
    
    【参考答案】: D
    ```