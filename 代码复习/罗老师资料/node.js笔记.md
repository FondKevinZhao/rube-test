1. npm: Node Package Manager(包管理工具)

2. npmjs.com  在 node.js 中安装包。

3. `package-lock.json`

   1. 速度快。
   2. 更安全。避免版本导致的错误。

4. 成员：指属性和方法。一种方便的叫法。

5. 只有数据库连接成功了，服务器连接才有意义。

6. 注册页面下载包：

   1. npm i nodemon 下载到全局
   2. npm i mongoose 下载到局部 server.js里面
   3. npm i express 下载到局部 server.js里面

7. 用node搭建服务器

   ```js
   // 1. 引入http模块
   const http = require('http');
   // 2. 创建服务器对象
   const server = http.createServer((request, response) => {
       // 当客户端发送请求过来的时候，这个回调函数会被调用
       // 当这个回调函数被调用的时候，会传过来两个对象，第一个是请求对象，第二个是响应对象
       // 请求对象(request)记录了请求信息
       // 响应对象(response)可以用来响应客户端
       // 利用response身上的end方法可以响应客户端
       // response.setHeader可以解决response.end中的内容乱码问题
       response.setHeader('content-type', 'text/html;charset=utf-8')
       resonse.end("ok");
   }); 
   // 3. 开启服务器
   server.listen(5000, (err) => {
       if (err) console.log('服务器启动失败', err)
       else console.log('服务器启动成功')
   })
   ```

8. 用express开启服务器：

   express 

   ```js
   const express = require('express') // 第一步 引入 express
   
   const app = express() // 第二步调用express
   // 处理请求：app.get专门处理get请求，只要是get请求，并且路径是指定的这一个，回调就会被调用
   app.get('/', (request, response) => {
       console.log('123')
   })
   
   // 第三步 监听 express
   app.listen(5000, (err) => { 
       if (err) console.log('服务器启动失败', err)
       else console.log('服务器启动成功')
   })
   ```

   

9. 绑定事件函数this指向的是事件源，这里指向email。

   ```js
   email.addEventListener('blur', function () {
           console.log('email失去焦点了')
           // 希望validator中的this指向的是事件源,所以使用call
           validator.call(this, emailReg, '请输入正确的邮箱格式', emailFlag)
   }) 
   ```

   

10. 中间件的代码 要写在路由之前。

11. 判断字符串为空的两种方式：

    1. length[0] === ''

    2. 字符串 === ''

12. DOM 转 jQuery `$(dom对象)`。

    jQuery 转 DOM：`jquery对象[0]`

13. 注意：原生的Ajax和jQuery的Ajax方法，在使用post请求方式发送请求的时候，上传的参数都是urlencode格式的 键=值

14. 只要修改了配置文件，一定要关闭服务器，然后重启服务器。

15. jsx的注释：`{/**/}`, 里面可以写任何的表达式。

    注意：插值表达式中，理论上可以传入任何的表达式，但是有一些特殊的情况，不要直接渲染对象，不要直接渲染函数。

16. 自定义的原型上的方法的this默认指向undefined。new出来的原型上的this指向的是实例化对象。

17. 编程的三个能力：

    1. 编程能力
    2. 调适能力
    3. 自学能力

18. js储存数据有三种方式：

    1. 变量
    2. 数组
    3. 对象

19. dependencies 里面的包是生产环境里面的包。

20. devDependencies 里面的包是开发环境里面的包。

21. 删除包的时候不要到node_modules里面去删除，而要通过指令`npm remove/r 包名`。

22. 数据库(MongoDB)：

    1. 保证数据库是连接的。
    2. 使用NoSQLBooster来操作。

23. 注意：如果一个新文件夹，初始化包(npm init)，初始化不出来，可以使用cls指令+回车

24. 用node搭建服务器

    ```js
    // 1. 引入http模块
    const http = require('http');
    // 2. 创建服务器对象
    const server = http.createServer(() => {});
    // 3. 开启服务器
    server.listen(5000, (err) => {
        if (err) console.log('服务器启动失败', err)
        else console.log('服务器启动成功')
    })
    ```

25. http 主要用于前后端进行交互的。

26. 禁止服务器响应后台的代码：`app.disable('x-powered-by')`

27. 定义中间件(`app.use()`)一般要在路由(`app.get/post()`)的前面去定义。

28. 路由里面的回调函数也属于一个中间件，当调用next()，那么对应的路由里面的回调函数就会执行。

29. next 其实就是这次请求，对应的那个路由的回调函数。

30. 路由中的中间件接收到的请求对象和响应对象和前面中间件的请求和响应对象是一样的。

31. `app.use('路径', (request, response, next) => {})` 里面也可以去写路径。

32. 内置的中间件：`app.use(express.urlencoded({extended: true}))`

     除了express的中间件，还有其他的中间件，用同样的方法下载引入即可。

33. 第三方中间件：body-parser

      1. 下载 npm i body-parser
      2. 引入 const bodyParser = require('body-parser')
      3. 使用 app.use(bodyParser.urlencoded({extended: true}))

     注意：这个body-parser即将弃用。

34. 搭建静态资源服务器

    ```js
    const express = require('express')
    const app = express()
    app.use(express.static('public'))//public表示文件夹名字
    app.listen(5000, () => {
        console.log('成功')
    })
    /*
    app.use(express.static('public'))这个中间件，帮助我们快速的搭建一个静态资源服务器，如果请求地址是一个文件，则直接进入public中根据指定路径查找这个文件，如果有，则直接响应
    */
    ```

    

35. get 和 post 的区别: 

    1. get上传的数据,会出现在浏览器的地址栏中. post存放在请求主体中 。
    2. get不安全,post相对安全。

    3. get请求的数据量有限制(浏览器地址栏有大小), post请求上传的数据理论上没有限制(实际上服务器会对上传的数据,进行限制)。

    4. get一般用于获取数据, 如果要给服务器上传数据使用post

36.   express 是线性模式。

37. npm 是在node中下载包的。

38. mongoose 是操作数据库的，连接数据库。

39. nodemon 是用来开启服务器的(下载一次就够了，因为下载在全局)。跟 node + 文件名是有区别的。

40. 从浏览器地址栏发出去的请求一定是get请求。

41. 创建路由器对象: 

    1. const express = require('express');
    2. const router = express.Router();
    3. module.exports = router;

42. model对象用来操作数据库，model对象来源于mongoose。它身上有增删改查四个方法，用来操作数据库。

43. cookie是浏览器当中存储数据的容器。主要用于解决HTTP登录无状态的问题。

44. cookie-parser 用于解析cookie里面的数据。

45. cookie的有效期：

    1. 如果没有指定的有效期，cookie默认是一个会话的时间。

       (会话时间：从在浏览器发出请求，直到关闭浏览器。)

    2. res.cookie(键，值，{maxAge: 有效期单位是毫秒})

46. cookie 与 session 配合是数据更加安全。

47. 静态资源服务器需要开启，才能够让HTML代码在网页中显示。

48. Postman 工具是用来测试get和post接口用的。

