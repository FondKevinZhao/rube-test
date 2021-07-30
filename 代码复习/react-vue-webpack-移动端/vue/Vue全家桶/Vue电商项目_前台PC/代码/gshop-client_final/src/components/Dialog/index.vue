<template>
  <div class="dialog" v-show="visible">
    <div class="dialog-container">
      <div class="dialog-header">
        <span
          class="iconfont icon-close"
          @click="$emit('update:visible', false)"
        ></span>
      </div>
      <div class="dialog-main">
        <!-- 使用命名插槽 -->
        <slot name="main"></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  // data() {
  //   return {
  //     isDialogShow: this.visible,
  //   };
  // },
  watch: {
    visible(value) {
      if (value) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    },
  },
  beforeDestroy() {
    if (this.visible) {
      document.documentElement.style.overflow = "auto";
    }
  },
  methods: {
    preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    },
  },
};
</script>

<style lang="less" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.dialog-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 200px;
  padding: 20px 15px;
  background-color: #fff;
}
.dialog-header {
  text-align: right;
  .icon-close {
    font-size: 20px;
    cursor: pointer;
  }
}
.dialog-main {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>