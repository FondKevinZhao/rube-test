<template>
  <el-card>
    <template #header>
      <h3 class="title">用户管理</h3>
    </template>

    <el-button type="primary" @click="$router.history.push('/users/save')"
      >添加</el-button
    >
    <el-button type="danger">批量删除</el-button>

    <el-table :data="users" border class="table" v-loading="loading">
      <el-table-column type="selection" width="50" align="center">
      </el-table-column>
      <el-table-column
        label="序号"
        width="50"
        type="index"
        align="center"
      ></el-table-column>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="用户昵称" prop="nickname"></el-table-column>
      <el-table-column label="操作">
        <el-button icon="el-icon-edit" size="mini" type="primary"></el-button>
        <el-button icon="el-icon-delete" size="mini" type="danger"></el-button>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[3, 6, 9, 12]"
      :page-size="limit"
      layout="prev, pager, next, jumper, total, sizes"
      :total="total"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Users",
  data() {
    return {
      loading: false,
      page: 1,
      limit: 3,
    };
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    // 当每页条数发生变化时触发
    handleSizeChange(limit) {
      this.limit = limit;
      this.setUsers(this.page, limit);
    },
    // 当当前页码发生变化时触发
    handleCurrentChange(page) {
      this.page = page;
      this.setUsers(page, this.limit);
    },
    // 封装一个可复用的方法
    async setUsers(page, limit) {
      this.loading = true;
      await this.getUsers({ page, limit });
      this.loading = false;
    },
  },
  computed: {
    ...mapState("users", ["users", "total"]),
  },
  async mounted() {
    this.setUsers(this.page, this.limit);
  },
};
</script>

<style>
.title {
  margin: 0;
}
.table {
  margin: 20px 0;
}
.el-pagination__total,
.el-pagination__sizes {
  float: right;
}
</style>