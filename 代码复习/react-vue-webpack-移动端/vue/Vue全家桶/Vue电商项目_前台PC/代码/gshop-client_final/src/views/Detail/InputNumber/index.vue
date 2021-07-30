<template>
  <div class="controls">
    <input
      autocomplete="off"
      class="itxt"
      :value="currentValue"
      @blur="setCurrentValue"
      @keyup.enter="setCurrentValue"
      @keyup.up="currentValue++"
      @keyup.down="currentValue--"
    />
    <!-- <input autocomplete="off" class="itxt" v-model="currentValue" /> -->
    <button
      class="plus"
      @click="currentValue++"
      :disabled="currentValue >= max"
      :class="{ disabled: currentValue >= max }"
    >
      +
    </button>
    <button
      class="mins"
      @click="currentValue--"
      :disabled="currentValue <= min"
      :class="{ disabled: currentValue <= min }"
    >
      -
    </button>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    setCurrentValue(e) {
      this.currentValue = e.target.value;
    },
  },
  watch: {
    // 修正不正确的currentValue
    currentValue(newValue, oldValue) {
      /*
        需求：
          1. 最小值最大值
            最小值：一般是1
            最大值：商品库存大小
          2. 输入非数字内容，就变成之前的值
          3. 输入小数，就向下取整
      */
      // 1. 最小值最大值
      const { min, max } = this;
      if (newValue < min) {
        newValue = min;
      }

      if (newValue > max) {
        newValue = max;
      }

      // 2. 输入非数字内容，就变成之前的值
      const isNaN = Number.isNaN(Number(newValue));
      if (isNaN) {
        newValue = oldValue;
      }

      // 3. 输入小数，就向下取整
      newValue = Math.floor(newValue);

      this.$emit("input", newValue);
      this.currentValue = newValue;
    },
  },
};
</script>

<style lang="less">
.controls {
  width: 85px;
  position: relative;
  margin-right: 15px;

  .itxt {
    width: 70px;
    height: 39px;
    border: 1px solid #ddd;
    color: #555;
    float: left;
    text-align: center;
    outline: none;
  }

  .plus,
  .mins {
    width: 15px;
    text-align: center;
    height: 21px;
    line-height: 21px;
    background: #f1f1f1;
    color: #666;
    position: absolute;
    right: 0px;
    border: 1px solid #ccc;
    cursor: pointer;
    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .mins {
    height: 20px;
    top: 21px;
    border-top: 0;
  }
}
</style>