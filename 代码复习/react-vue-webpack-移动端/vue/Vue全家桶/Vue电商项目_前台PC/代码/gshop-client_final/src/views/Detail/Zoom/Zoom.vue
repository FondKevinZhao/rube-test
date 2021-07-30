<template>
  <div class="spec-preview">
    <!-- 中图 -->
    <img :src="image.imgUrl" :alt="image.imgName" />
    <!-- 鼠标滚动区域 -->
    <div class="event" @mousemove="move"></div>
    <!-- 大图 -->
    <div class="big">
      <img
        :src="image.imgUrl"
        :alt="image.imgName"
        :style="{ left: bigLeft + 'px', top: bigTop + 'px' }"
      />
    </div>
    <!-- 遮罩层 -->
    <div
      class="mask"
      :style="{ left: maskLeft + 'px', top: maskTop + 'px' }"
    ></div>
  </div>
</template>

<script>
import throttle from "lodash/throttle";

export default {
  name: "Zoom",
  props: {
    image: {
      type: Object,
      // default: () => {
      //   return {};
      // },
      default: () => ({}),
    },
  },
  data() {
    return {
      maskLeft: 0,
      maskTop: 0,
      bigLeft: 0,
      bigTop: 0,
    };
  },
  methods: {
    move: throttle(function (event) {
      // 中图大小 400 * 400  遮罩层大小 200*200
      // 计算mask遮罩层的位置
      // mask遮罩层的位置 = 当前鼠标的位置 - 自身大小的一半
      const maskWidth = 200;

      let maskLeft = event.offsetX - maskWidth / 2;
      let maskTop = event.offsetY - maskWidth / 2;

      // 判断边界值 0 - 200
      if (maskLeft < 0) maskLeft = 0;
      if (maskLeft > maskWidth) maskLeft = maskWidth;
      if (maskTop < 0) maskTop = 0;
      if (maskTop > maskWidth) maskTop = maskWidth;

      // 计算大图的位置
      // 大图位置就是遮罩层的位置的 -2 倍
      const bigLeft = -2 * maskLeft;
      const bigTop = -2 * maskTop;

      this.maskLeft = maskLeft;
      this.maskTop = maskTop;
      this.bigLeft = bigLeft;
      this.bigTop = bigTop;
    }, 50),
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>