<template>
  <!-- 商品分类导航 -->
  <div class="type-nav" @mouseleave="isShow = false">
    <div class="container">
      <h2 class="all" @mouseenter="isShow = true">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 
        显示&隐藏
          首页：都要显示
          搜索：默认时隐藏的，移入移出显示隐藏切换
       -->
      <div class="sort" v-show="$route.name === 'Home' || isShow">
        <div class="all-sort-list2" @click="goSearch">
          <!-- 一级分类 -->
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <!-- 一级分类名称 -->
              <!-- <router-link
                :to="{
                  name: 'Search',
                  query: {
                    categoryName: c1.categoryName,
                    category1Id: c1.categoryId,
                  },
                }"
                >{{ c1.categoryName }}</router-link
              > -->
              <!-- <a @click.prevent="goSearch(c1.categoryName, c1.categoryId, 1)">{{
                c1.categoryName
              }}</a> -->

              <a
                :data-categoryName="c1.categoryName"
                :data-categoryId="c1.categoryId"
                :data-level="1"
                >{{ c1.categoryName }}</a
              >
            </h3>
            <!-- 二级分类 -->
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <!-- 二级分类名称 -->
                    <a
                      :data-categoryName="c2.categoryName"
                      :data-categoryId="c2.categoryId"
                      :data-level="2"
                      >{{ c2.categoryName }}</a
                    >
                  </dt>
                  <!-- 三级分类 -->
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a
                        :data-categoryName="c3.categoryName"
                        :data-categoryId="c3.categoryId"
                        :data-level="3"
                        >{{ c3.categoryName }}</a
                      >
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  data() {
    return {
      // categoryList: [],
      isShow: false,
    };
  },
  computed: {
    // ...mapState(["categoryList"]),
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  mounted() {
    // this["home/getBaseCategoryList"]();
    this.getBaseCategoryList();
  },
  methods: {
    // ...mapActions(["getBaseCategoryList"]),
    // ...mapActions(["home/getBaseCategoryList"]),
    ...mapActions("home", ["getBaseCategoryList"]),

    // goSearch(categoryName, categoryId, level) {
    //   this.$router.history.push({
    //     name: "Search",
    //     query: {
    //       categoryName,
    //       [`category${level}Id`]: categoryId,
    //     },
    //   });
    // },

    goSearch(e) {
      // console.log(e.target);
      // e.target.dataset获取元素的自定义属性
      // 注意：自动转换成小写
      const { level, categoryname, categoryid } = e.target.dataset;

      if (!level) {
        // 说明点击的是空白区域
        return;
      }

      const location = {
        name: "Search",
        query: {
          categoryName: categoryname,
          [`category${level}Id`]: categoryid,
        },
      };

      const { keyword } = this.$route.params;
      if (keyword) {
        location.params = { keyword };
      }

      this.$router.history.push(location);
    },
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            margin: 0;

            a {
              display: block;
              padding: 0 20px;
              width: 100%;
              height: 100%;
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            background-color: pink;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
