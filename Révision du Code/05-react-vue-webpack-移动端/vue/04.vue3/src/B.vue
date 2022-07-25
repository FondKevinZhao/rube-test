<template>
  <p>B....</p>
  <p>{{ count }}</p>
  <button @click="handleClick">按钮</button>

  <p>{{ state.a }} -- {{ state.b }}</p>
  <p>{{ name }}</p>
  <button @click="$emit('hello')">按钮</button>

  <C />
</template>

<script setup>
// setup 语法糖：能让我们更加简单使用setup
import {
  ref,
  reactive,
  defineProps,
  defineEmit,
  // onMounted,
  // onBeforeUnmount,
} from "vue";

import C from "./C.vue";

// defineProps(["name"]);
defineProps({
  name: String,
});
defineEmit(["hello"]);

const count = ref(0);

const handleClick = () => {
  count.value++;
};

const state = reactive({
  a: 1,
  b: 2,
});
</script>

<style>
</style>