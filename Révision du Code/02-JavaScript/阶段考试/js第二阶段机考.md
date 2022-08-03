1. Math.ceil(-3.14)和Math.floor(-3.14)的结果分别是( )

   

   - A、-3.14 -3
   - B、-3 -3
   - C、-4 -3
   - D、-3 -4

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   【参考答案】: D

   【您的答案】: D

2. 哪个选项是不正确的?( )

   var bird = {

    	size: "small"

   };

   var mouse = {

   ​	 name: "Mickey",

    	small: true

   };

   - A、mouse.bird.size
   - B、mouse[bird.size] // 运算符优先级：先做括号里面的，再做括号外面的。
   - C、mouse[bird["size"]] // 运算符优先级：先做括号里面的，再做括号外面的。

   

   

   

   

   

   【参考答案】: A

   【您的答案】: C

   第二题出的有问题，B和C都可以的

3. 下面代码的输出是什么?( )

   var c = { greeting: "Hey!" };

   var d;

   d = c;

   c.greeting = "Hello";

   console.log(d.greeting);


   - A、Hello
   - B、undefined
   - C、报错











   【参考答案】: A

   【您的答案】: A

4. 下面代码的输出是什么?( )

   function Person(firstName, lastName) {

   ​	 this.firstName = firstName;

    	this.lastName = lastName;

   }

   var lydia = new Person("Lydia", "Hallie");

   var sarah = Person("Sarah", "Smith");

   console.log(lydia);

   console.log(sarah);

   

   - A、Person{firstName:"Lydia",lastName:"Hallie"} , undefined
   - B、Person {firstName: "Lydia", lastName: "Hallie"} , Person {firstName: "Sarah", lastName: "Smith"}
   - C、Person {firstName: "Lydia", lastName: "Hallie"} , {}
   - D、Person{firstName:"Lydia",lastName:"Hallie"} , 报错

   

   

   

   

   

   【参考答案】: A

   【您的答案】: A

5. 指定对象的属性以下方式正确的是（  ）

   - A、obj["age"] = 25
   - B、obj(age) = 25
   - C、obj(@"age") = 25
   - D、obj("age") = 25

   

   

   

   

   

   【参考答案】: A

   【您的答案】: A

6. 有以下代码：

   function Dog(){

    	this.name = “小黑”

   }；

   var dog1 = new Dog();

   请问此时this代表的是（  ）

   - A、Dog
   - B、function Dog(){}
   - C、dog1
   - D、window

   

   

   

   

   

   【参考答案】: C

   【您的答案】: A

7. 有以下JS代码：

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

   【您的答案】: A

8. 下列的哪一个表达式将返回值为假（ ）

   - A、!(3<=1)
   - B、(4>=4)&&(5<=2)
   - C、(“a”==“a”)&&(“c”!=“d”)
   - D、(2<3)||(3<2)

   

   

   

   

   

   【参考答案】: B

   【您的答案】: B

9. 有以下代码：

   var x = 5;

   (function () { 

   ​	console.log(x); 

   ​	var x = 10; 

   ​	console.log(x); 

   }());

   上面的代码，输出的两个值是（ ）

   - A、没有输出，报错：x没有定义
   - B、undefined 10
   - C、5 10
   - D、10 10

   

   

   

   

   

   【参考答案】: B

   【您的答案】: B

10. 下列选项中对基本类型和复杂类型理解正确的是( )

    - A、基本类型之间是引用传递
    - B、复杂类型之间传递的是地址
    - C、基本类型的值存储在堆中
    - D、复杂类型的对象在栈中存储

    

    

    

    

    

    【参考答案】: B

    【您的答案】: B

11. 以下代码输出正确的是（）?

     function f1(num){

     ​    function f2(){

     ​      console.log(num);

     ​    }

     ​    return f2;

       }

       var fa = f1(10);

       var fb = f1(20);

       var fc = f1(30);

       fa();

       fb();

     fc(); 

     - A、10 20 30
     - B、10 10 10
     - C、undefined undefined undefined
     - D、num is not defined

     

     

     

     

     

     【参考答案】: A

     【您的答案】: A

12. 阅读以下代码，正确打印顺序结果为（）?

    


    console.log(1)
    
    setTimeout(function(){
    
    	console.log(2)
    
    })
    
    setTimeout(function(){
    
    	console.log(3)
    
    }, 100)
     
     setTimeout(function(){
    
     console.log(4)
    
    }, 0)
    
     console.log(5)
    
    - A、1 2 3 4 5
    - B、1 5 2 4 3
    - C、1 5 2 3 4
    - D、1 2 4 3 5
    
    
    
    
    
    
    
    【参考答案】: B
    
    【您的答案】: B

13. 阅读以下代码，正确打印顺序结果为（）?

    console.log(1)

    setTimeout(function(){

     console.log(2)

    }, 300)

     setTimeout(function(){

     console.log(3)

    }, 200)

     setTimeout(function(){

     console.log(4)

    }, 100)

     setTimeout(function(){

     console.log(5)

    }, 0)

     setTimeout(function(){

     console.log(6)

    }, 100)

     console.log(7)

    

    

    

    

    

    

    - A、1 2 3 4 5 6 7
    - B、1 7 5 4 6 3 2
    - C、1 7 2 3 4 5 6
    - D、1 5 7 4 6 3 2

    【参考答案】: B

    【您的答案】: B

14. 下列表述不正确的选项是（   ）

    - A、var a = 10;function fuc(){ a = 5 }; fuc(); 此时a = 5;
    - B、btn.onclick = function(){ alert(this)}; 函数里面的this代表btn
    - C、function Car(){this.name = “王五”}; var car1 = new Car(); var result = car1.name;result的值为undefined
    - D、我们可以将一个函数作为另一个函数的结果返回

    

    

    

    

    

    【参考答案】: C

    【您的答案】: C

15. 下面哪个不属于面向对象的特点

    - A、原型
    - B、封装
    - C、继承
    - D、多态

    

    

    

    

    

    【参考答案】: A

    【您的答案】: D

16. 阅读以下代码，输出true的是（）?

    function Person(){};

    var person = new Person;

    - A、`person.__proto__.__proto__` === Object.prototype
    - B、`person.__proto__.__proto__` !== Object.prototype
    - C、`person.__proto__.__proto__.constructor.__proto__` === Function.prototype
    - D、`Object.prototype.__proto__` === null

    

    

    

    

    

    【参考答案】: ACD

    【您的答案】: A

17. 下面关于typeof的表述中，错误的是
    - A、typeof ‘123’ 返回 number
    - B、typeof true 返回 boolean
    - C、typeof null 返回 object
    - D、typeof undefined 返回undefined

    

    

    
    
    
    
    
    
    【参考答案】: A
    
    【您的答案】: A
    
18. 对以下Javascript代码运行结果的描述正确的是:()

     var a = {},

     b = { key: 'b' },

     c = { key: 'c' };

     a[b] = 123;

     a[c] = 456;

    - A、变量 `a` 有两个属性
    - B、`console.log(a[b])` 输出 `123`
    - C、`console.log(a[c])` 输出 `456`
    - D、`console.log(a[a])` 输出 `undefined`

    

    

    

    

    

    【参考答案】: C

    【您的答案】: C

19. 以下JavaScript程序输出什么()

    ﻿var x="undefined";

    var y="false";

    var z="";

    function assert(xVar) {

     	if(xVar)  {

    ​		console.log(true);

    ​	}  else {

    ​		console.log(false);

    ​	}

    }

    assert(x);

    assert(y);

    assert(z);
    
    - A、true，true，true
    - B、true，true，false
    - C、false，false，true
    - D、false，false，false

    
    
    
    
    
    
    
    
    
    
    【参考答案】: B
    
    【您的答案】: C