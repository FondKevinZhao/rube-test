![logo](images\logo.png)

# 项目：livegoods房屋海选平台_第一天

**主要内容**

* 项目搭建
* 路由配置
* 首页搜索区域
* 首页轮播区域

**学习目标**

 知识点| 要求 
 -| :- 
 项目搭建 | 掌握 
 路由配置 | 掌握 
 首页搜索区域 | 掌握 
 首页轮播区域 | 掌握 




## 一、项目搭建

### 1.1 项目介绍

​	这是一个租房项目一级包含了房屋家具家电的买卖的设置的一个移动端的项目。

react技术实现，这个项目是一个租房系统，进行房屋的出租和销售等信息。

React全家桶技术：React + React-router + Redux + fetch(jquery/axios) + 三方库（antd）

​	

### 1.2 项目安装

1. npx create-react-app react-good

   create-react-app react-good 

2. npm i react-router-dom@4.x -S 

3. npm i axios -S 

4. Antd库：  npm i antd -S 配置按需加载 

   1. 安装配置：babel-plugin-import (推荐) 

   ​     gitHub：https://github.com/ant-design/babel-plugin-import

   2. npm run eject 暴露webpack.config.js 

      3. npm install babel-plugin-import --save-dev

      4. 配置一个根目录文件  (注：暴露了webpack后需要删除package.json文件里面的babel配置)

   ​     .babelrc

         ```js
         {
             "presets": [
                 "react-app"
             ],
                 "plugins": [["import", {
                     "libraryName": "antd",
                     "style": "css"
                 }]]
         }
         ```

   

5.安装redux: 

1. npm i redux -S

2. npm i react-redux -S

3. 安装插件:npm i redux-logger -S

6.安装其他的需要的三方库

### 1.3 项目初始化

1. 删除无用的组件 或者文件

2. css初始化

3. 导入iconfont图标 

4. 移动端配置

   ```css
   html{
       /* 100/750*100 */
       font-size:13.333333vw;
   }
   @media(min-width:750px){
       html{
           font-size: 100px;
       }
   }
   /* 也得给body设置字体大小，否则导致字体特别大 */
   body{
       font-size:12px
   }
   
   /* 所有字体，都是 /100 转成rem*/
   ```

5. 支持less

   ```bash
   npm i less less-loader@7.x -S 
   ```

   



## 二、路由配置

### 2.1 路由配置

```js
//配置路由
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
//导入组件
import Layout from '../views/Layout/Layout'
import Home from '../views/Home/Home'
import Shop from '../views/Shop/Shop'
import Life from '../views/Life/Life'
import About from '../views/About/About'
import Login from '../views/Login/Login'

function App() {
  return (
    <Router>
      <Switch>
        {/* 登录界面 */}
        <Route path='/login' component={Login}/>
        {/* 布局界面 */}
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/shop' component={Shop}/>
              <Route path='/life' component={Life}/>
              <Route path='/about' component={About}/>
            </Switch>
          </Layout>
      </Switch>
    </Router>
  );
}

export default App;

```

### 2.2 路由效果图

​	![logo](images\bottom.png)



### 2.3 组件代码

Layout组件

```jsx
import React from 'react'
import MyBottom from '../../components/MyBottom/MyBottom'
export default function Layout(props) {
    return (
        <div>
            {/* 路由出口 */}
           <div className='content'>
                {
                    props.children
                }
           </div>
            {/* 公共的底部 */}
            <MyBottom/>

       
        </div>
    )
}

```

MyBottom组件

```jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
export default function MyBottom() {
    return (
        <div className='footer'>
            <ul>
                <li>
                    <NavLink exact to='/'>
                        <i className='iconfont icon-iconindexnor1'></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/shop'>
                        <i className='iconfont icon-shangcheng2'></i>
                        商城
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/life'>
                        <i className='iconfont icon-shenghuo-'></i>
                        生活服务
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/about'>
                        <i className='iconfont icon-wode'></i>
                        我的
                    </NavLink>

                </li>
            </ul>
        </div>
    )
}

```



## 三、首页搜索区域

### 3.1 搜索效果展示

​	![logo](images\header.png)

### 3.2 代码演示

Home组件

```jsx
import React from 'react'
import HomeHeader from './HomeHeader/HomeHeader'
export default function Home() {
    return (
        <div>
            {/* 顶部区域组件 */}
            <HomeHeader/>

            {/* 轮播区域组件 */}
        </div>
    )
}

```

HomeHeader组件

```jsx
import React from 'react'
import styles from './style.module.less'
import MyInput from '../../../components/MyInput/MyInput'
export default function HomeHeader() {
    return (
        <div>
           <div className={styles.header}>
                <div className={styles.city}>北京<i className='iconfont icon-jiantou'></i> </div>
                <div className={styles.search}>
                   <MyInput/>
                </div>
                <div className={styles.shop}>
                    <i className='iconfont icon-gouwucheman'></i>
                </div>
           </div>
        </div>
    )
}

```

组件样式

```less
.header{
    height: 0.86rem;
    background: #ff5555;
    display: flex;
    align-items: center;
    .search{
        width: 6rem;
        background: #fff;
        height: 0.56rem;
        border-radius: 0.1rem;
    }
    .shop{
        flex: 2;
        text-align: center;
        color: #fff;
    }
    .city{
        flex: 3;
        text-align: center;
        color: #fff;
    }
}

```

input组件

```jsx
import React,{useState} from 'react'
import './style.less'
export default function MyInput() {
    const [val,setVal] = useState('')
    function getInput(e){
        // console.log('输入的内容',e);
        setVal(e.target.value)
    }
    return (
        <div>
            <input type='text' value={val} onChange={getInput} className='myInput' placeholder='请输入内容'/>
        </div>
    )
}

```



## 四、首页轮播区域

### 4.1 效果展示

​	![logo](images\swiper.png)



### 4.2 antd库轮播

轮播组件：

```jsx
import React from 'react'
import { Carousel } from 'antd';
export default function AntdSwiper(props) {
    return (
        <div>
            <Carousel autoplay>
                {
                    props.banner.map((ele,index)=>{
                        return <div key={index}>
                                    <img src={ele} width='100%' alt="" />
                                </div>
                    })
                }
            </Carousel>
        </div>
    )
}

```



### 4.3 React框架中swiper使用

官网：https://swiperjs.com/react

代码演示

轮播组件：

```jsx
import React from 'react'
import { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function MySwiper(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            // navigation
            pagination={{ clickable: true }}  
            autoplay={{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }}
            loop
        >
          {
              props.banner.map((ele,index)=>{
                  return  <SwiperSlide key={index}>
                            <img src={ele} width='100%' alt="" />
                        </SwiperSlide>
              })
          } 
          
        </Swiper>
    )
}
```



### 4.4 后台接口

```js

//首页轮播接口
router.get('/banner', (req, res) => {
    const data = Mock.mock({
        status: 200,
        "banner|3": [{
            "id|+1": 1,
            "imgUrl|+1": [
                'http://iwenwiki.com/api/livable/banner/banner1.png',
                'http://iwenwiki.com/api/livable/banner/banner2.png',
                'http://iwenwiki.com/api/livable/banner/banner3.png'
            ]
        }]
    })
    res.send(data)
})

```

### 4.5 动态轮播数据

```jsx
import React from 'react'
import { Navigation, Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function MySwiper(props) {
    return (
        <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            // navigation
            pagination={{ clickable: true }}  
            autoplay={{
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            }}
            loop
        >
          {
              props.banner.map((ele)=>{
                  return  <SwiperSlide key={ele.id}>
                            <img src={ele.imgUrl} width='100%' alt="" />
                        </SwiperSlide>
              })
          } 
          
        </Swiper>
    )
}

```

