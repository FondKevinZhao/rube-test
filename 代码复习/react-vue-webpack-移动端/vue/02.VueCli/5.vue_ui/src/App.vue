<template>
  <div>
    <el-button type="primary" @click="handleClick">主要按钮</el-button>
    <el-button icon="el-icon-search" circle @click="visible = true"></el-button>

    <el-dialog title="标题~~~" :visible.sync="visible" width="30%">
      <!-- 默认插槽: 展示内容 -->
      <div>
        <p>内容区</p>
        <span>内容区</span>
      </div>
      <!-- 命名插槽 -->
      <template #footer>
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.$message({
        message: "错误信息",
        type: "error",
      });
    },
  },
};
</script>

<style>
</style>