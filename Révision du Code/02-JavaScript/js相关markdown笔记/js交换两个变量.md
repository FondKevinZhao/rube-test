1. js交换两个变量

   1. 使用第三方变量

      ```js
      var a = 10;
      var b = 20;
      var c;
      
      c = a
      a = b
      b = c
      console.log(a);
      console.log(b);
      ```

      

   2. 通过自身加减的方式

      ```js
      var a = 10;
      var b = 20;
      
      a = a + b;
      b = a - b;
      a = a - b;
      console.log(a);
      console.log(b);
      ```

      

   3. C语言底层的方式

      ```js
      var a = 10;
      var b = 20;
      
      a = a ^ b;
      b = a ^ b;
      a = a ^ b;
      console.log(a);
      console.log(b);
      ```

      

   4. es6的方法

      ```js
      var a = 10;
      var b = 20;
      
      [b, a] = [a, b];
      console.log(a);
      console.log(b);
      ```

      

   