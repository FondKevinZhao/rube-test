<template>
  <div>
    <h2>Child...</h2>
    <p>{{ name }} -- {{ age }}</p>
    <p>{{ count }}</p>
    <button @click="update">按钮</button>
  </div>
</template>
<script>
export default {
  name: "Child",
  // 声明接受
  // 声明接受的属性会自动进行数据代理，可以通过this直接使用
  // props: ["name", "age"],
  // props: {
  //   name: String,
  //   age: Number,
  // },
  props: {
    update: {
      type: Function,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 20,
      validator(val) {
        // val就是检查的属性值
        return val >= 18 && val <= 60;
      },
    },
  },
};
</script>
<style></style>