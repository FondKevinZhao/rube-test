### 一、Pinia是什么？

官网介绍:

- Pinia在2019年11月左右开始尝试用Composition API(组合式 API)重新设计Vue Store(存储)的样子。
- Pinia适用于Vue 2和Vue 3，并且不需要你使用复合API。

- Pinia 是Vue的一个存储库，它允许你跨组件/页面共享状态(状态即数据)。

### 二、Pinia 和 Vuex有什么区别？

大致总结：

1. 支持**vue2选项式api** 和 **vue3组合式api**写法
2. Pinia没有mutations，只有：state、getters、actions
3. Pinia分模块不需要modules(vuex分模块需要modules)
4. TypeScript支持很好
5. 自动化代码拆分
6. Pinia体积更小，只有1kb左右(性能更好)。
7. Pinia可以在某个组件中直接修改Pinia中state中的数据(当然，通过方法修改数据也是可以的)。

### 三、Pinia的state、getters、actions

#### Pinia的使用之state

1. 安装下载

   ```js
   npm install pinia
   ```

   

2. main.js引入

   ```js
   import { createPinia } from 'pinia'
   app.use(createPinia())
   ```

   

3. 根目录新建store/index.js中写入

   ```js
   import { defineStore } form 'pinia'
   export const useStore = defineStore('storeId', {
       // 注意：state为一个箭头函数，返回一个对象
       state: ()=>{
           return {
               counter: 0,
               name: '张三',
               num: 1
           }
       },
       getters:{},
   	actions:{}
   }),
         
   // 这里的export也可以这样去写：注意，这个storeId不管是哪种写法，是不能重复的
   export const useStore = defineStore({
       id: 'storeId',
       state: ()=>{
           return {
               counter: 0,
               name: '张三',
               num: 1
           }
       },
       getters:{},
   	actions:{}
   }),
   ```

4. 组件使用

   - 使用跟vuex几乎一样，学习成本不高

   ```vue
   <script>
   // useStore 是因为你在store/index.js中暴露出去的名字就叫useStore
   import { useStore } from '../store'
   let store = useStore()
   console.log(store)
   // 使用时可以直接解构 --- 注意，这样解构使用它不是一个响应式数据
   let { name, num } = store
   console.log( name, num)
   // 此处假设有个按钮 --- 修改无效
   const btn = () => {
       num.value = 2 // 或者写成：store.num++ 也可以
   }
       
       
   // 这样解构使用数据就是响应式的了
   import { storeToRefs } from 'pinia' 
   let { name, num } = storeToRefs(store)   
   // 此处假设有个按钮 --- 修改有效
   const btn = () => {
       num.value = 2
   }
   </script>
   ```

   - Pinia中的`$reset`api重置数据，也就是回到初始值，如果num最开始等于1，后面改成了2，现在点击重置，就变回为1了。

   ```vue
   <script>
   // useStore 是因为你在store/index.js中暴露出去的名字就叫useStore
   import { useStore } from '../store'
   let store = useStore()
   
   import { storeToRefs } from 'pinia' 
   let { name, num } = storeToRefs(store)   
   // 此处假设有个重置按钮 --- 回到初始值
   const btn = () => {
       store.$reset()
   }
   </script>
   ```

   - 批量修改数据方法一：直接通过.value修改

   ```vue
   <script>
   // useStore 是因为你在store/index.js中暴露出去的名字就叫useStore
   import { useStore } from '../store'
   let store = useStore()
       
   import { storeToRefs } from 'pinia' 
   let { name, num } = storeToRefs(store)   
   // 此处假设有个按钮 --- 修改有效
   const btn = () => {
       num.value = 2
       name.value = '李四'
   }
   </script>
   ```

   - 批量修改数据方法二：通过`$patch` api修改

   ```vue
   <script>
   // useStore 是因为你在store/index.js中暴露出去的名字就叫useStore
   import { useStore } from '../store'
   let store = useStore()
       
   import { storeToRefs } from 'pinia' 
   let { name, num } = storeToRefs(store)   
   // 此处假设有个按钮 --- 修改有效
   const btn = () => {
       store.$patch(state=>{
           name.value = "李四"
       	age.value = 3
       })
   }
   </script>
   ```
#### Pinia的使用之getters

getters是有缓存的，使用几乎跟vuex一样

1. 根目录store/index.js中写入

```js
import { defineStore } form 'pinia'
export const useStore = defineStore('storeId', {
    // 注意：state为一个箭头函数，返回一个对象
    state: ()=>{
        return {
            counter: 0,
            name: '张三',
            num: 1
        }
    },
    getters:{
        changeNum() {
            return this.num + 100
        }
    },
	actions:{}
}),
```

2. 组件中使用

```vue
<template>
	<div>
        {{ changeNum }}
    </div>
</template>
<script>
import { useStore } from '../store'
let store = useStore()

import { storeToRefs } from 'pinia' 
    // 把getters中的changeNum解构出来
let { name, num, changeNum } = storeToRefs(store)   
// 此处假设有个重置按钮
const btn = () => {
    store.$reset()
}
</script>
```



#### Pinia的使用之actions

actions里面可以加同步方法和异步异步方法

根目录store/index.js中写入

```js
import { defineStore } form 'pinia'
export const useStore = defineStore('storeId', {
    // 注意：state为一个箭头函数，返回一个对象
    state: ()=>{
        return {
            counter: 0,
            name: '张三',
            num: 1
        }
    },
    getters:{
        changeNum() {
            return this.num + 100
        }
    },
	actions:{
        upNum(val) {
            this.num += val
        }
    }
}),
```

组件中使用

```vue
<template>
	<div>
        {{ changeNum }} - {{num}}
    </div>
	<button @click="add">
        按钮
    </button>
</template>
<script>
import { useStore } from '../store'
let store = useStore()

import { storeToRefs } from 'pinia' 
    // 把getters中的changeNum解构出来
let { name, num, changeNum } = storeToRefs(store)   

const add = () => {
    store.upNum(2)
}
</script>
```



### 四、Pinia分模块

在main.js中

```js
import store from './store/index.js'
createApp(App).use(store).use(router).mount('#app')
```

在store/index.js中

```js
import { createPinia } from 'pinia'
const store = createPinia()
export default store
```

直接在store下建文件，比如说有两个模块，user.js 和 shop.js

user.js 文件

```js
import { defineStore } from 'pinia'
export const user = defineStore({
    id: 'user',
    state: () => {
        return {
            nickName: '张三用户',
            age: 18
        }
    },
    actions: {
        changeAge(val) {
            this.age += val
        }
    }
})
```

shop.js 文件

```js
import { defineStore } from 'pinia'
export const shop = defineStore({
    id: 'shop',
    state: () => {
        return {
            shopList: ['a', 'b', 'c']
        }
    }
})
```

组件中使用

如：要用到user模块中的数据

```vue
<template>
	<div>
        <h1> A组件 </h1>
        姓名：{{ nickName }}
        年龄：{{ age }}
        <button @click="addAge">增加年龄</button>
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
// 暴露出来的名字叫user，那么引入也要叫user，这样就能准确的找到模块
import { user } from '../store/user.js'
    
let userStore = user()
let { nickName, age } = storeToRefs(userStore)

// 增加年龄方法一：
const addAge = () => {
    age.value += 2
}

// 增加年龄方法二：
const addAge = () => {
    userStore.changeAge(2)
}

</script> 
```

一个组件中，同时使用user.js模块和shop.js模块

```vue
<template>
	<div>
        <h1> A组件 </h1>
        姓名：{{ nickName }}
        年龄：{{ age }}
        <button @click="addAge">增加年龄</button>
        <br>
        shop模块：{{ shopList }}
    </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
// 暴露出来的名字叫user，那么引入也要叫user，这样就能准确的找到模块
import { user } from '../store/user.js'
// 引入shop模块
import { shop } from '../store/shop.js'
    
let userStore = user()
let { nickName, age } = storeToRefs(userStore)

let shopStore = shop()
let { shopList } = storeToRefs(shopStore)

// 增加年龄方法一：
const addAge = () => {
    age.value += 2
}

</script> 
```





### 五、Pinia持久化存储

为什么要做持久化？因为数据一刷新就回到了初始化的状态，希望能够保持数据的长久存储

方式一：自己手动去写，使用localStorage或者sessionStorage

方式二：使用插件，这里主要讲的是方式二

插件的持久化存储默认走的是sessionStorage

1. 安装插件

   ```js
   npm i pinia-plugin-persist --save
   ```

   

2. store/index.js

   ```js
   import { createPinia } from 'pinia'
   const store = createPinia()
   
   // 引入持久化存储插件
   import piniaPluginPersist from 'pinia-plugin-persist'
   // 使用插件
   store.use(piniaPluginPersist)
   
   export default store
   ```

   

3. store/user.js

   插件的持久化存储默认走的是sessionStorage

   ```js
   import { defineStore } from 'pinia'
   export const user = defineStore({
       id: 'user',
       state: () => {
           return {
               nickName: '张三用户',
               age: 18
           }
       },
       actions: {
           changeAge(val) {
               this.age += val
           }
       },
       
       // 开启数据缓存
       persist: {
           enabled: true
       }
   })
   ```

4. store/user.js

   插件的持久化存储让它走localStorage

   ```js
   import { defineStore } from 'pinia'
   export const user = defineStore({
       id: 'user',
       state: () => {
           return {
               nickName: '张三用户',
               age: 18
           }
       },
       actions: {
           changeAge(val) {
               this.age += val
           }
       },
       
       // 开启数据缓存 --- localStorage
       // 数据默认存在sessionStorage里，并且会以store的id作为key
       persist: {
           enabled: true,
           strategies: [{
               key: 'my_user',
               storage: localStorage,
               paths: ['age'] // 如果不写paths，默认当前模块全部做持久化存储，如果写了，表示数组内的state做持久化存储。大白话：这个模块只有age做持久化存储
           }]
       }
   })
   ```

   























































