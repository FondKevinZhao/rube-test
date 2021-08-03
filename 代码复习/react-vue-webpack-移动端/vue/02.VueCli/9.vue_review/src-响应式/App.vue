<template>
  <div id="app">
    <ul>
      <li v-for="(value, key) in person" :key="key">
        {{ key }} -- {{ value }}
      </li>
    </ul>
    <button @click="update">update</button>

    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }} -- {{ person.age }} -- {{ person.sex }}
      </li>
    </ul>
    <button @click="updatePersons">update</button>
  </div>
</template>

<script>
// import Vue from "vue";
/*
  响应式：更新数据，数据会发生变化，同时用户界面也会更新
  响应式数据：data
  到底data中什么数据才是响应式的？
    data中原有属性都是响应式的，新添加的属性不是响应式（原有的是，新增的不是）
      1. 如果想给对象添加新属性，并确保是响应式的
        Vue.set(对象, key, value)
        this.$set(对象, key, value)
      2. 如果想给数组添加新数据并确保是响应式的
        使用数组的变更方法 push、unshift等
        https://cn.vuejs.org/v2/guide/list.html#%E5%8F%98%E6%9B%B4%E6%96%B9%E6%B3%95
        原因：Vue对数组的部分方法进行重新封装，将其定义成响应式的方法
*/
export default {
  name: "App",
  data() {
    return {
      person: {
        name: "jack",
        age: 18,
        // sex: "女",
      },
      persons: [
        {
          id: 1,
          name: "jack",
          age: 18,
        },
        {
          id: 2,
          name: "rose",
          age: 20,
        },
      ],
    };
  },
  methods: {
    update() {
      // data中原有的数据、属性都是响应式的，新添加的数据或属性不是响应式的
      // this.person.age++;
      // this.person.sex = "男";
      // Vue.set(this.person, "sex", "男");
      this.$set(this.person, "sex", "男");
    },
    updatePersons() {
      // this.persons[0].age++;
      // this.persons[0].sex = "男";
      this.$set(this.persons[0], "sex", "男");
      // this.persons[2] = { id: 3, name: "tom", age: 22 };
      // this.persons.push({ id: 3, name: "tom", age: 22 });
    },
  },
};
</script>

<style>
</style>
