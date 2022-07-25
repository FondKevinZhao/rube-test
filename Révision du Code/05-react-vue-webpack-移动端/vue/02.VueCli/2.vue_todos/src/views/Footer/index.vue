<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="total !== 0 && checkedNum === total" /> -->
      <input type="checkbox" v-model="checked" />
    </label>
    <span>
      <span>已完成{{ checkedNum }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" v-show="!!checkedNum" @click="delTodos">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    total: Number,
    checkedNum: Number,
    updateTodos: Function,
    delTodos: Function,
  },
  computed: {
    checked: {
      get() {
        return this.total !== 0 && this.checkedNum === this.total;
      },
      set(val) {
        this.updateTodos(val);
      },
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>