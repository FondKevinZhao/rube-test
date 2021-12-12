<template>
  <div>
    <!-- 
      插槽 slot：
        作用：父子组件通信，通信的内容是 带数据的标签

     -->

    <!-- 
      需求：将p元素传递给A组件，A组件进行显示 

      默认插槽
    -->
    <A>
      <p>{{ msg }}</p>
      <p>{{ msg }}</p>
      <p>{{ msg }}</p>
    </A>

    <!-- 具名/命名插槽 -->
    <B>
      <!-- template标签不会生成额外的结构 -->
      <template v-slot:header>
        <header>header BBBBBBB</header>
      </template>

      <p>{{ msg }}</p>
      <!-- 
        新语法：v-slot:header
        旧语法：slot="footer"
       -->
      <footer slot="footer">footer BBBBBBB</footer>
    </B>

    <!-- 作用域插槽：子组件向父组件传递数据 -->
    <C>
      <!-- v-slot="xxx" 声明接受子组件传递过来的数据，是一个对象结构 -->
      <template v-slot="data">
        <p>{{ data.msg }} - {{ data.age }}</p>
      </template>
    </C>

    <!-- 混合使用 -->
    <D>
      <!-- <template v-slot:header> -->
      <template #header>
        <p>1111</p>
      </template>
      <!-- 
        正常写：v-slot="slotScoped" 
        正常使用： slotScoped.a

        现在写：v-slot="{ a }"
        使用： a
       -->
      <template v-slot="{ a }">
        <p>{{ a }}</p>
      </template>
      <!-- <template v-slot:footer="{ b }"> -->
      <template #footer="{ b }">
        <p>{{ b }}</p>
      </template>
    </D>
  </div>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
import D from "./D.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "hello AAAAA",
    };
  },
  components: {
    A,
    B,
    C,
    D,
  },
};
</script>

<style>
</style>