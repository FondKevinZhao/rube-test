<template>
  <!-- swiper最外层容器 -->
  <div
    ref="container"
    class="swiper-container"
    @mouseenter="swiper.autoplay.stop()"
    @mouseleave="swiper.autoplay.start()"
  >
    <!-- 轮播图容器 -->
    <div class="swiper-wrapper">
      <!-- 轮播图 -->
      <div class="swiper-slide" v-for="img in carouselList" :key="img.id">
        <img :src="img.imgUrl" :alt="img.title" />
      </div>
    </div>
    <!-- 左右翻页按钮 -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <!-- 小圆点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// 引入swiper js和css
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "Carousel",
  props: {
    carouselList: Array,
  },
  watch: {
    carouselList: {
      handler(newVal) {
        // 来到这里，说明数据回来了，但是数据还未渲染成DOM元素

        // 第一个轮播图会触发两次，去掉第一次（因为第一次没有数据，new Swiper没有意义）
        if (!newVal.length) return;
        console.log(111);

        // 等待数据渲染成DOM元素
        // this.$nextTick接受一个回调作为参数，会等待DOM元素渲染完成再触发回调
        this.$nextTick(() => {
          this.swiper = new Swiper(this.$refs.container, {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            pagination: {
              el: ".swiper-pagination",
            },
            loop: true, // 开启无缝轮播
            autoplay: {
              // 自动轮播
              delay: 1000, // 时间
            },
          });
        });
      },
      immediate: true, // 第一次生效
    },
  },
  mounted() {
    // 等待DOM元素生成，才能new Swiper
    // 其他功能看API文档：https://www.swiper.com.cn/api/
    // this.swiper = new Swiper(".swiper-container", {
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    //   loop: true, // 开启无缝轮播
    //   autoplay: {
    //     // 自动轮播
    //     delay: 1000, // 使劲
    //   },
    // });
    // console.log(this.swiper);
  },
};
</script>

<style>
</style>