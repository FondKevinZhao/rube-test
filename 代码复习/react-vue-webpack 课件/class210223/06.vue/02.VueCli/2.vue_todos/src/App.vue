<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <!-- 以props方式传递数据 -->
      <List :todos="todos" :updateTodo="updateTodo" :delTodo="delTodo" />
      <Footer
        :total="todos.length"
        :checkedNum="checkedNum"
        :updateTodos="updateTodos"
        :delTodos="delTodos"
      />
    </div>
  </div>
</template>
<script>
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, name: "吃饭", checked: true },
        { id: 2, name: "睡觉", checked: false },
        { id: 3, name: "敲代码", checked: false },
      ],
    };
  },
  methods: {
    // 数据源在哪，更新数据的方法就定义在哪
    addTodo(name) {
      // 更新数据
      // 在React中，不能直接修改原数据
      // 在Vue中，可以直接更新原数据
      this.todos.unshift({
        id: Date.now(),
        name,
        checked: false,
      });
    },
    // 更新todo的checked属性
    updateTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      // 原数据会发生变化
      todo.checked = !todo.checked;
    },
    delTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选、全不选
    updateTodos(checked) {
      this.todos.forEach((todo) => {
        todo.checked = checked;
      });
    },
    // 批量删除
    delTodos() {
      this.todos = this.todos.filter((todo) => !todo.checked);
    },
  },
  computed: {
    // 已选中的数量
    checkedNum() {
      return this.todos.reduce((p, c) => {
        return p + (c.checked ? 1 : 0);
      }, 0);
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
};
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 20px auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>