<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!-- 显示搜索条件 -->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 分类 -->
            <li class="with-x" v-if="$route.query.categoryName">
              {{ $route.query.categoryName }}
              <span class="iconfont icon-close" @click="delCategory"></span>
            </li>
            <!-- 关键字 -->
            <li class="with-x" v-if="$route.params.keyword">
              {{ $route.params.keyword }}
              <span class="iconfont icon-close" @click="delKeyword"></span>
            </li>
            <!-- 品牌 -->
            <li class="with-x" v-if="options.trademark">
              {{ options.trademark.split(":")[1] }}
              <span class="iconfont icon-close" @click="delTrademark"></span>
            </li>
            <!-- 属性 -->
            <li class="with-x" v-for="prop in options.props" :key="prop">
              <!-- 属性id:属性值:属性名 -> 属性名:属性值 -->
              {{ formatProp(prop) }}
              <span class="iconfont icon-close" @click="delProp(prop)"></span>
            </li>
          </ul>
        </div>

        <!-- 商品品牌和商品属性 -->
        <SearchSelector
          :search="search"
          :trademark="options.trademark"
          :props="options.props"
        />

        <!-- 排序、商品列表、分页器 -->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li
                  :class="{ active: order[0] === '1' }"
                  @click="setOrder('1')"
                >
                  <a
                    >综合<span
                      v-show="order[0] === '1'"
                      :class="[
                        'iconfont',
                        `icon-direction-${order[1] === 'asc' ? 'up' : 'down'}`,
                      ]"
                    ></span
                  ></a>
                </li>
                <li>
                  <a>销量</a>
                </li>
                <li>
                  <a>新品</a>
                </li>
                <li>
                  <a>评价</a>
                </li>
                <li
                  :class="{ active: order[0] === '2' }"
                  @click="setOrder('2')"
                >
                  <a
                    >价格<span
                      v-show="order[0] === '2'"
                      :class="[
                        'iconfont',
                        `icon-direction-${order[1] === 'asc' ? 'up' : 'down'}`,
                      ]"
                    ></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link
                      :to="{
                        name: 'Detail',
                        params: {
                          id: goods.id,
                        },
                      }"
                      ><img :src="goods.defaultImg"
                    /></router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{ goods.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a :title="goods.title">{{ goods.title }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="fr page">
            <!-- 
              @current-change 当current-page发生变化时触发事件
              @size-change    当page-size发生变化时触发事件
              :total          总数
              :page-size      每页条数
              :current-page   当前页码
              :page-sizes     可选择每页条数的值
              :pager-count    显示按钮的数量

              $event
                handleClick 默认回调函数的参数就是event
                handleClick(1) 回调函数的参数就是 1
                handleClick(1, $event) 回调函数的参数就是 1 event

                $event代表事件的真正参数
                  绑定的是click，change事件，参数event
                  绑定的自定义事件，自定义事件的参数看触发事件传入的参数
                    触发事件传入的参数就是$event
             -->
            <!-- <Pagination
              @current-change="search({ pageNo: $event })"
              @size-change="search({ pageSize: $event })"
              :total="total"
              :page-size="5"
              :current-page="1"
              :page-sizes="[5, 10, 15, 20]"
              :pager-count="7"
            /> -->
            <Pagination
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
              :total="total"
              :page-size="5"
              :current-page="1"
              :page-sizes="[5, 10, 15, 20]"
              :pager-count="7"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// 问题：引入所有函数，体积太大了
// import _ from "lodash";
// 只引入 debounce 方法
import debounce from "lodash/debounce";

import SearchSelector from "./SearchSelector/SearchSelector";

export default {
  name: "Search",
  components: {
    SearchSelector,
  },
  computed: {
    ...mapState({
      goodsList: (state) => state.search.goodsList,
      total: (state) => state.search.total,
    }),
    order() {
      return this.options.order.split(":");
    },
  },
  data() {
    return {
      // 剩下搜索条件
      // 为什么不存储 categoryName, category1Id, category2Id, category3Id keyword?
      // 可以直接通过this.$route获取
      options: {
        // 属性列表  属性id:属性值:属性名
        props: [],
        // 品牌  tmId:tmName
        trademark: "",
        // 排序
        // 1：综合   2:价格
        // asc: 升序（从小到大）  desc:降序
        order: "1:desc",
        // 当前页码
        pageNo: 1,
        // 每页条数
        pageSize: 5,
      },
    };
  },
  methods: {
    ...mapActions("search", ["searchProductList"]),
    // 搜索
    search(newOptions = {}) {
      /*
        搜索是要基于上一次的搜索条件(options)，加上最新的搜索条件(newOptions)，再去搜索
        所以：在每次搜索的时候，要保存搜索条件
      */
      const { params, query } = this.$route;

      const options = {
        // 利用对象同名属性后面会覆盖前面的
        ...this.options, // 旧的
        ...newOptions, // 新的
      };

      // 追加prop数据，其他数据上面都覆盖了~
      if (newOptions.prop) {
        options.props.push(newOptions.prop);
        delete options.prop;
      }

      // 更新options：为了下次搜索保留当前搜索条件
      this.options = options;

      this.searchProductList({
        // keyword
        ...params,
        // categoryName, category1Id, category2Id, category3Id
        ...query,
        // props trademark order pageNo pageSize
        ...options,
      });
    },
    // 格式化props数据
    formatProp(prop) {
      // 属性id:属性值:属性名 -> 属性名:属性值
      const arr = prop.split(":");

      return `${arr[2]}:${arr[1]}`;
    },
    // 删除搜索条件
    delCategory() {
      // 删除$route.query数据
      // 解决: 再push一次，push时不要添加query参数
      const location = {
        name: "Search",
      };

      const { keyword } = this.$route.params;

      if (keyword) {
        location.params = { keyword };
      }

      this.$router.history.push(location);
    },
    delKeyword() {
      // 删除$route.params数据
      this.$router.history.push({
        name: "Search",
        query: this.$route.query,
      });
    },
    delTrademark() {
      this.options.trademark = "";
      this.search();
    },
    delProp(prop) {
      this.options.props = this.options.props.filter((p) => p !== prop);
      this.search();
    },
    setOrder(orderName) {
      // 之前的值 this.order[0]   当前点击的值 orderName
      const [oldOrderName, oldOrderType] = this.order;

      let orderType;

      if (oldOrderName === orderName) {
        // 说明：连续点击的是同一个排序  切换排序方式
        orderType = oldOrderType === "asc" ? "desc" : "asc";
      } else {
        // 说明：连续点击的是不同排序  默认是降序
        orderType = "desc";
      }

      this.options.order = `${orderName}:${orderType}`;

      this.search();
    },
    handleCurrentChange: debounce(
      function (currentPage) {
        this.search({
          pageNo: currentPage,
        });
      },
      300,
      {
        // 2秒至少触发一次
        maxWait: 2000,
        // 一上来触发一次
        leading: true,
      }
    ),
    handleSizeChange(pageSize) {
      this.search({
        pageSize,
      });
    },
  },
  watch: {
    // 1. 可以通过全局事件总线方式将search方法传递给其他组件，其他组件调用search方法搜索
    // 问题：太麻烦了
    // 2. 观察发现，以上这些搜索方式都会改变浏览器历史记录
    $route() {
      this.search();
    },
  },
  mounted() {
    this.search();
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        overflow: hidden;
      }
    }
  }
}
.icon-close {
  font-size: 12px;
  margin-left: 5px;
}
</style>