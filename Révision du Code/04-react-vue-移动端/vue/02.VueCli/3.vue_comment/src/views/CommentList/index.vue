<template>
  <div>
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <CommentItem
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import CommentItem from "./CommentItem";

// 哪个组件需要数据展示，就定义在哪里
export default {
  name: "CommentList",
  data() {
    return {
      comments: [
        { id: 1, name: "peihua", content: "i love jingge" },
        { id: 2, name: "jingge", content: "i love peihua" },
      ],
    };
  },
  mounted() {
    // 绑定事件
    this.$bus.$on("addComment", this.addComment);
    this.$bus.$on("delComment", this.delComment);
  },
  beforeDestroy() {
    // 绑定事件
    this.$bus.$off("addComment", this.addComment);
    this.$bus.$off("delComment", this.delComment);
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
  components: {
    CommentItem,
  },
};
</script>

<style>
</style>