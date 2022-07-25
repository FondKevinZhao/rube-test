<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="del">删除</a>
    </div>
    <p class="user">
      <span>{{ comment.name }}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: Object,
  },
  methods: {
    del() {
      if (window.confirm(`您确认要删除${this.comment.name}的评论吗?`)) {
        this.$bus.$emit("delComment", this.comment.id);
      }
    },
  },
};
</script>

<style>
</style>