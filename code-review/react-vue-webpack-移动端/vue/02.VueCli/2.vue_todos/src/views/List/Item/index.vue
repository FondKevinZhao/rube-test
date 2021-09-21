<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <!-- <input type="text" :value="xx" @input="xxx"> -->
      <!-- <input type="checkbox" :checked="todo.checked" @change="handleChange" /> -->
      <!-- 
        v-model 数据双向绑定
          一上来input要显示checked的值，调用计算属性的get方法
          将点击input，修改checked的值，调用计算属性的set方法
       -->
      <input type="checkbox" v-model="checked" />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    updateTodo: Function,
    delTodo: Function,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    // handleChange() {
    //   this.updateTodo(this.todo.id);
    // },
    del() {
      if (window.confirm(`您确认要删除${this.todo.name}吗？`)) {
        this.delTodo(this.todo.id);
      }
    },
  },
  computed: {
    checked: {
      get() {
        return this.todo.checked;
      },
      set() {
        this.updateTodo(this.todo.id);
      },
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>