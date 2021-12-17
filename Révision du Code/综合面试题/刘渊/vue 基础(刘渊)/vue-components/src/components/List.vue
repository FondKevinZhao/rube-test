<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <!-- :comment="comment" 这个表示，遍历一个，就把comment传给对应的 Item 组件 -->
      <Item v-for="comment in coms" :key="comment.id" :comment="comment"></Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  components: {
    Item
  },
  props: ['coms'] // 声明接收属性，而不是直接接收属性值
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>