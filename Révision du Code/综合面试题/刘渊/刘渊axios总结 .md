### 刘渊总结 axios

#### axios 一句话总结：

axios 是根据 xhr 和 promise 封装而来的一个 http 库(插件)

#### http 请求：

1. 普通 http 请求。
2. Ajax 请求。

今后我们用来发送 Ajax 请求最多的工具，就是 axios！

引入之后暴露给我们的是一个函数，axios 是一个函数 也是 函数对象。

#### axios 有两种用法，函数用法和对象用法：

1. `axios() // 函数用法(用法较难)`

2. `axios.get() // 函数对象的用法(用法简单)`

#### 请求方式：

1. 一般普通的 http 请求就是 get 和 post
2. 如果是 Ajax 请求：一般包含四种 get/post/put/delete

#### 现在的项目几乎都是前后端分离：

- 前端(搭页面、做交互(请求获取数据展示渲染)

- 后端(数据库的存储操作、接口的书写、服务器的部署)

#### restful API 接口规范：是现在目前最流行的书写后端接口的一个规范

- 资源化

- 每个数据都会被看作是一个资源(如：一个商品)，对于每一个资源来说操作数据库有 4 个情况，增、删、改、查

- 后端人员对数据库的每个操作，对应，前端人员 Ajax 的 4 个请求

- Ajax 请求：

  get(调用后端人员写的**查**的资源接口)

  post(调用后端人员写的**添加**的资源接口)

  put(调用后端人员写的**修改**的资源接口)

  delete(调用后端人员写的**删除**的资源接口)

#### axios 掌握好不好，关键是三种参数分得清不清：

1. params 参数：参数是路径的一部分，并且这个参数**只能在 url 路径当中出现**。如：

   ```js
   localhost:8080/users/info/1
   ```

   

2. query 参数：这个参数叫查询参数，这个参数可以出现在 url 路径当中，也可以在配置项当中配置，query 参数不属于路径的一部分。

   - 在 url 当中：是问号？后面的 `key=value&key=value`。如：

     ```js
     axios({
       // 配置对象
       url:'https://api.github.com/search/respositories?q=v&sort=stars',
       method:"get"
     })
     ```

     

   - 在配置项当中：配置项的名称叫 params。如：

     ```js
     axios({
       // 配置对象
       url:'https://api.github.com/search/respositories,
       method:"get",
       params: {
         q: 'v',
         sort: 'stars'
       }
     })
     ```

     

3. body 请求体参数：

   - 通常用在 post 和 put 当中(一般是增加或修改数据的时候使用)，只能在配置对象 data 当中配置。
   - data 这个配置项就是你的 body 请求体参数，这个数据必须是一个对象。

   ```js
   // 发送 POST 请求
   axios({
     method: 'post',
     url: '/user/12345',
     data: {
       firstName: 'Fred',
       lastName: 'Flintstone'
     }
   });
   ```

   

```js
// 函数写法
axios({
  // 配置对象
  url:'https://api.github.com/search/respositories?q=v&sort=stars',
  method:"get"
})
```



```js
// 对象写法
// 第一个参数永远是 url 地址
// 如果有 body 请求体参数：post 和 put，第一个参数也是 url 地址，第二个参数是请求体参数(一个对象)，第三个参数是配置对象
// get 和 delete 第二个参数不是请求体参数，代表是一个配置对象
axios.get('https://api.github.com/search/respositories?q=v&sort=stars')
axios.post('https://api.github.com/search/respositories?q=v&sort=stars',{请求体参数})
```



### axios 二次封装代码

```js
// 这个文件是对axios进行二次封装
// 额外的让axios发请求的时候，具有其它的功能
// 配置基础路径和超时限制
// 添加进度条信息 nprogress
// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 统一处理请求错误, 具体请求也可以选择处理或不处理
import axios from 'axios'
// 引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

// 以后只要是对axios二次封装，不会在axios身上直接去封装，而是创建一个新的axios实例进行封装
// axios.create()创建一个新的和axios具有相同功能的一个实例
const service = axios.create({
  // 配置基础路径和超时限制
  baseURL: '/api',  // 设置，当前项目当中所有接口路径的公共路径部分，基础路径
  timeout: 20000, // 当ajax请求超过设置的这个事件就会报错
});


// 添加进度条信息功能  nprogress
// 以后如果你想对axios添加额外的功能或者是给请求头添加额外的信息
// 必然用到axios的请求拦截器和响应拦截器

// 请求拦截器，每个ajax请求都要经过这个拦截器去拦截
service.interceptors.request.use(
  // 请求拦截器当中成功的回调
  (config) => {
    // config其实就是我们的请求报文
    // 这个请求报文，最后一定要返回去，因为还要继续往下走
    // 在这里我们可以添加额外的功能，也可以给请求头添加需要的数据
    NProgress.start(); // 开启进度条

    // 请求头内部需要添加临时标识，后期每个请求都会带上这个临时标识
    let userTempId = store.state.user.userTempId
    if(userTempId){
      config.headers.userTempId = userTempId
    }

    // 登录成功后，需要把token添加到请求头当中，从今往后所有的请求当中都要带上这个token
    let token = store.state.user.token
    if(token){
      config.headers.token = token
    }

    return config
  },
  // 请求拦截器当中失败的回调一般不写，因为失败了，也就没有下文了
  // () => {
  // }
);

// 响应拦截器
// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 统一处理请求错误, 具体请求也可以选择处理或不处理
service.interceptors.response.use(
  (response) => {
    // response其实就是我们的响应报文
    // 我们也是可以添加额外功能或者对响应报文进行处理
    NProgress.done(); // 停止进度条
    return response.data // 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
  },
  (error) => {
    NProgress.done(); // 停止进度条
    // 可以统一处理错误
    alert('发送ajax请求失败'+error.message||'未知错误')
    // 统一处理完成之后，这个错误可以让后面继续处理
    // return Promise.reject(new Error('发送ajax请求失败')) //后面想继续处理这个错误，返回失败的promise
    // 也可以不让后面继续处理这个错误，中断promise链
    return new Promise(() => {})  // 返回的是pending状态的promise，代表中断promise链，后期也就没办法处理了
  }
);

export default service  // 把封装好的axios实例，暴露出去，后面去用
```

