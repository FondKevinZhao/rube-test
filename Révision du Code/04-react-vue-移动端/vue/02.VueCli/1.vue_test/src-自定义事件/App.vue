<template>
  <div>
    <h1>自定义事件</h1>
    <!-- <Child :count="count" :setCount="setCount" /> -->

    <!-- 给Child组件绑定一个自定义事件，事件名叫setCount -->
    <!-- <Child :count="count" @setCount="setCount" /> -->
    <Child :count="count" ref="child" />
    <!-- 
      给组件绑定的事件，默认都是自定义事件 
      如果希望直接给组件绑定原生DOM事件 @click.native
    -->
    <!-- <Child :count="count" @click.native="setCount(2)" /> -->
    <button @click="$emit('setCount', 3)">按钮111</button>
  </div>
</template>

<script>
/*
  原生DOM事件
    特点：
      1. 事件名称是固定
      2. 触发事件满足要求（用户界面等）就会自动触发
  自定义事件
    特点：
      1. 事件名称是任意的
      2. 手动触发事件 this.$emit(事件名称, ...事件回调函数的参数)
      通常给组件绑定自定义事件

    使用：
      绑定自定义事件
        1. <Child @setCount="setCount" />
        2. <Child ref="child" />
           mounted() {
             this.$refs.child.$on('setCount', this.setCount)
           }
      触发自定义事件
         this.$emit(事件名称, ...事件回调函数的参数)

      总结：
        $on   绑定持久性事件
        $once 绑定一次性事件
        $off  解绑事件
        $emit 触发事件
      特点：给哪个组件绑定，就只有这个组件可以触发
*/
import Child from "./Child";

export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    setCount(num) {
      this.count += num;
    },
  },
  mounted() {
    console.log(this, "App");
    // 绑定自定义事件
    // this.$refs.child 组件实例对象
    this.$refs.child.$on("setCount", this.setCount);
  },
  beforeDestroy() {
    this.$refs.child.$off("setCount", this.setCount);
  },
  components: {
    Child,
  },
};
</script>

<style>
</style>