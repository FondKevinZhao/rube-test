<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="goods in shopcart" :key="goods.id">
          <li class="cart-list-con1">
            <!-- 不使用v-model，因为数据是只读的，不能直接更新 -->
            <input
              type="checkbox"
              name="chk_list"
              :checked="goods.isChecked"
              @change="handleChange(goods.skuId, goods.isChecked)"
            />
          </li>
          <li class="cart-list-con2">
            <!-- 
              cartPrice:1
              couponInfoList:null
              createTime:"2021-05-06 08:33:05"
              id:10098
              imgUrl:"http://47.93.148.192:8080/group1/M00/00/44/rBHu8mBZTSyAMR1zAAATau81Dt885.jpeg"
              isChecked:1
              isOrdered:0
              operateTime:"2021-05-06 09:13:45"
              orderTime:null
              skuId:408
              skuName:"雀巢咖啡丑版"
              skuNum:3
              skuPrice:1
              sourceId:408
             -->
            <img :src="goods.imgUrl" />
            <div class="item-msg">
              {{ goods.skuName }}
            </div>
          </li>
          <!-- <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li> -->
          <li class="cart-list-con4">
            <span class="price">{{ goods.cartPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins">-</a>
            <input
              autocomplete="off"
              type="text"
              :value="goods.skuNum"
              minnum="1"
              class="itxt"
            />
            <a href="javascript:void(0)" class="plus">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ goods.cartPrice * goods.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="del(goods.skuId)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ checkedNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" @click="toTrade">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ShopCart",
  computed: {
    ...mapState({
      shopcart: (state) => state.shopcart.shopcart,
    }),
    totalPrice() {
      return this.shopcart.reduce((p, c) => p + c.cartPrice * c.skuNum, 0);
    },
    checkedNum() {
      return this.shopcart.reduce((p, c) => p + (c.isChecked ? 1 : 0), 0);
    },
  },
  methods: {
    ...mapActions("shopcart", ["getCartList"]),
    ...mapActions("shopcart", ["updateCartChecked"]),
    ...mapActions("shopcart", ["deleteCart"]),
    // 处理单选点击事件
    handleChange(skuId, isChecked) {
      this.updateCartChecked({ skuId, isChecked: isChecked === 1 ? 0 : 1 });
    },
    del(skuId) {
      this.deleteCart(skuId);
    },
    toTrade() {
      // 判断至少有一个选中的商品
      // 只要有一个返回true就是true，所有都是false才是false
      const isChecked = this.shopcart.some((goods) => goods.isChecked === 1);
      if (!isChecked) {
        alert("请选择至少一个商品下单");
        return;
      }
      this.$router.history.push("/trade");
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 6%;
        }

        .cart-list-con2 {
          width: 43%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>