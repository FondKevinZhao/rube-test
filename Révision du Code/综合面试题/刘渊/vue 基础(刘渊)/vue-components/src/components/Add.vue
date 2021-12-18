<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          placeholder="用户名"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          placeholder="评论内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button
            type="button"
            class="btn btn-default pull-right"
            @click="addC"
          >
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      content: "",
    };
  },
  props: ["addComment"], // props 接收到的数据，最终也会混入到 vm 身上，在使用的时候，前面要加 this，this.addComment
  methods: {
    addC() {
      // 1. 拿到用户输入的数据
      let { username, content } = this;
      if (username.trim() || content.trim()) {
        // 2. 把数据给变为一个对象
        let id = Date.now();
        let obj = {
          id,
          username,
          content,
        };
        // 3. 把对象数据给添加到 comments 数组当中
        // 数据在哪里，操作数据的方法就要定义在哪里(这里是定义在App.vue中)，哪里需要数据，我们是把操作数据的方法传递过来，让其调用
        // 在这里我们是把App当中操作添加评论的方法addComment传递给Add这个组件去调用添加评论
        this.addComment(obj)
        this.username = ''
        this.content = ''
      } else {
        alert("请输入合法的用户名和内容！");
      }
    },
  },
};
</script>

<style>
</style>