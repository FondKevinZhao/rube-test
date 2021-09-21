<template>
  <p>Child</p>
  <p>{{ name }}</p>
  <p>{{ count }}</p>
  <p>{{ times }}</p>
  <!-- <p>{{ state.a }} -- {{ state.b }} -- {{ state.c }}</p> -->
  <p>{{ a }} -- {{ b }} -- {{ c }}</p>
  <button @click="handleClick">按钮</button>
  <button @click="$emit('hello')">按钮</button>
</template>

<script>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
} from "vue";

export default {
  name: "Child",
  props: ["name"],
  emits: ["hello"],
  setup() {
    // 相当于beforeCreate和created
    console.log("setup");

    // 定义生命周期函数
    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    // 定义响应式数据
    const count = ref(0);

    // 定义多个响应式数据
    const state = reactive({
      a: 1,
      b: 2,
      c: 3,
    });

    const handleClick = () => {
      count.value++;
      state.a++;
    };

    // 只读的计算属性
    // const times = computed(() => count.value + "次");
    // 可读可写的计算属性
    const times = computed({
      get() {
        return count.value + "次";
      },
      set(val) {
        count.value = val;
      },
    });

    const s = toRefs(state);

    // 监视属性
    watch(
      s.a,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      { immediate: true }
    );

    // 返回值是一个对象
    // 对象中的数据会数据代理，挂载到this上
    return {
      count,
      handleClick,
      // 展开就不是响应式数据
      // ...state,
      ...s,
      times,
    };
  },
};
</script>

<style>
</style>