<template>
  <div class="pagination">
    <div class="pagination-btns">
      <button
        @click="myCurrentPage = myCurrentPage - 1"
        :disabled="myCurrentPage === 1"
        :class="{ 'pagination-disabled-btn': myCurrentPage === 1 }"
      >
        <span class="iconfont icon-arrow-left-bold"></span>
      </button>
      <button
        :class="{ active: myCurrentPage === 1 }"
        @click="myCurrentPage = 1"
      >
        1
      </button>
      <button v-show="startEnd.start > 2">
        <span class="iconfont icon-elipsis"></span>
      </button>
      <!-- 
        startEnd.end - startEnd.start + 1 要遍历按钮的数量
          为什么不写死为 pagerCount - 2 === 5?
          原因：中间按钮数量可能小于5
       -->
      <button
        v-for="(num, index) in startEnd.end - startEnd.start + 1"
        :key="num"
        :class="{ active: myCurrentPage === startEnd.start + index }"
        @click="myCurrentPage = startEnd.start + index"
      >
        {{ startEnd.start + index }}
      </button>
      <button v-show="startEnd.end < totalPages - 1 && totalPages > pagerCount">
        <span class="iconfont icon-elipsis"></span>
      </button>
      <button
        :class="{ active: myCurrentPage === totalPages }"
        @click="myCurrentPage = totalPages"
        v-show="totalPages > 1"
      >
        {{ totalPages }}
      </button>
      <button
        @click="myCurrentPage = myCurrentPage + 1"
        :disabled="myCurrentPage >= totalPages"
        :class="{ 'pagination-disabled-btn': myCurrentPage >= totalPages }"
      >
        <span class="iconfont icon-arrow-right-bold"></span>
      </button>
    </div>
    <select class="pagination-select" v-model="myPageSize">
      <option :value="size" v-for="size in pageSizes" :key="size">
        每页 {{ size }} 条
      </option>
    </select>
    <span class="pagination-total">共 {{ total }} 条</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    // 总数
    total: {
      type: Number,
      default: 0,
    },
    // 每页条数
    // 声明属性是 - 命名，最终数据代理到this时，会自动转换成小驼峰命名
    "page-size": {
      type: Number,
      default: 5,
    },
    // 最大按钮数量
    "pager-count": {
      type: Number,
      default: 7,
      validator(val) {
        return val >= 5 && val <= 21 && val % 2 === 1;
      },
    },
    "page-sizes": {
      type: Array,
      default: () => [5, 10, 15, 20],
    },
    "current-page": {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      // 原因：pageSize数据是props数据，是只读不能修改
      // 而我们需要修改，定义新数据来使用
      myPageSize: this.pageSize,
      myCurrentPage: this.currentPage,
    };
  },
  watch: {
    myPageSize(newVal) {
      // 触发size-change事件
      this.$emit("size-change", newVal);
    },
    myCurrentPage(newVal) {
      // 触发current-change事件
      this.$emit("current-change", newVal);
    },
  },
  computed: {
    // 总页数
    totalPages() {
      return Math.ceil(this.total / this.myPageSize);
    },
    // 计算中间按钮的开始和结束的值
    startEnd() {
      /*
        已知：
          当前页码 myCurrentPage
          每页显示按钮的数量 pagerCount
          总页数 totalPages

        需求：
          start
          end

          1. 理想情况
            1 ... 3 4 [5] 6 7 ... 10

          // pagerCount总按钮数量 - 3（首页、结束页和当前页）
          start = myCurrentPage - (pagerCount - 3) / 2
    
          end = myCurrentPage + (pagerCount - 3) / 2
          end = start + pagerCount - 3
          start = end - (pagerCount - 3)

          2. 特殊情况1
            计算开始值不正确
            [1] 2 3 4 5 6 ... 10
            1 [2] 3 4 5 6 ... 10
            1 2 [3] 4 5 6 ... 10

            当前页码从4开始才是正确的
            1 2 3 [4] 5 6 ... 10

            解决：
              必须保证：start的值最小为2
              if (start < 2) start = 2;

          2. 特殊情况2
            计算开始值不正确
            1 ... 5 6 7 8 9 [10]
            1 ... 5 6 7 8 [9] 10
            1 ... 5 6 7 [8] 9 10

            当前页码从7开始才是正确的

            解决：
              先解决end，在解决start
              原因：start一旦出错了，end就一定出错（end出错，说明start也错了）

          3. 特殊情况3
            1 2 [3] 4
            
            判断总页数是否小于pagerCount
              start = 2
              end = totalPages - 1
          
          4. 特殊情况4
              [1] 
              [1] 2
      */

      const { myCurrentPage, pagerCount, totalPages } = this;

      // end最大值
      const MAX_END_VALUE = totalPages - 1;
      // 中间按钮数量减1
      const MIDDLE_BTNS_COUNT = pagerCount - 3;

      // 特殊情况4
      if (totalPages <= 2) {
        return {
          start: 0,
          end: -1,
        };
      }

      // 特殊情况3
      if (totalPages <= pagerCount) {
        return {
          start: 2,
          end: MAX_END_VALUE,
        };
      }

      // 计算开始
      let start = myCurrentPage - MIDDLE_BTNS_COUNT / 2;

      // 特殊情况1
      if (start < 2) {
        start = 2;
      }

      // 计算结束
      let end = start + MIDDLE_BTNS_COUNT;

      // 特殊情况2
      if (end >= totalPages) {
        end = MAX_END_VALUE;
        start = end - MIDDLE_BTNS_COUNT;
      }

      return {
        start,
        end,
      };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
  .pagination-disabled-btn {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
.pagination-btns {
  display: flex;
  align-items: center;
}

.pagination-btns button {
  color: #333;
  width: 35px;
  height: 30px;
  border: none;
  background-color: #f4f4f5;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 3px;
  &.active {
    color: #fff;
    background-color: #409eff;
  }
}
.pagination-select {
  height: 30px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 5px;
  color: #333;
  margin: 0 10px;
}
.pagination-total {
  font-size: 14px;
  color: #333;
}
</style>