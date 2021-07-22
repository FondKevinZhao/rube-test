<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div
        class="address clearFix"
        v-for="user in userAddressList"
        :key="user.id"
        @click="selectUserAddress(user)"
      >
        <span :class="{ username: true, selected: user.isDefault === '1' }">{{
          user.consignee
        }}</span>
        <p>
          <span class="s1">{{ user.userAddress }}</span>
          <span class="s2">{{ user.phoneNum }}</span>
          <span class="s3" v-if="user.isDefault === '1'">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left: 5px">货到付款</span>
      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul
          class="list clearFix"
          v-for="goods in detailArrayList"
          :key="goods.id"
        >
          <li>
            <img :src="goods.imgUrl" alt="" class="goods-img" />
          </li>
          <li>
            <p>
              {{ goods.skuName }}
            </p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{ goods.orderPrice }}</h3>
          </li>
          <li>X{{ goods.skuNum }}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea
          placeholder="建议留言前先与商家沟通确认"
          class="remarks-cont"
          v-model="orderComment"
        ></textarea>
      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b
            ><i>{{ totalNum }}</i
            >件商品，总商品金额</b
          >
          <span>¥{{ totalAmount }}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">
        应付金额: <span>¥{{ totalAmount }}</span>
      </div>
      <div class="receiveInfo">
        寄送至:
        <span>{{ selectedAddress.userAddress }}</span>
        收货人：<span>{{ selectedAddress.consignee }}</span>
        <span>{{ selectedAddress.phoneNum }}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <button class="subBtn" @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trade",
  data() {
    return {
      // 总价
      totalAmount: 0,
      // 用户地址列表
      userAddressList: [],
      // 订单号
      tradeNo: "",
      // 总数量
      totalNum: 0,
      // 商品详情列表
      detailArrayList: [],
      // 订单备注 、买家留言
      orderComment: "",
      // 支付方式
      paymentWay: "ONLINE",
    };
  },
  async mounted() {
    const result = await this.$API.pay.reqGetTradeInfo();

    this.totalAmount = result.totalAmount;
    this.userAddressList = [
      {
        id: 1,
        userAddress: "广东省深圳市宝安区后瑞洗脚城",
        consignee: "静哥",
        phoneNum: "15011111111",
        isDefault: "1",
      },
      {
        id: 2,
        userAddress: "广东省深圳市宝安区后瑞网吧",
        consignee: "华哥",
        phoneNum: "16011111111",
        isDefault: "0",
      },
      {
        id: 3,
        userAddress: "广东省深圳市宝安区后瑞酒吧",
        consignee: "雷哥",
        phoneNum: "17011111111",
        isDefault: "0",
      },
    ];
    this.tradeNo = result.tradeNo;
    this.totalNum = result.totalNum;
    this.detailArrayList = result.detailArrayList;
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    if (from.name === "ShopCart") {
      next();
    } else {
      next({ name: "Home" });
    }
  },
  methods: {
    selectUserAddress(user) {
      this.userAddressList.forEach((user) => (user.isDefault = "0"));
      user.isDefault = "1";
    },
    async submitOrder() {
      const {
        tradeNo,
        paymentWay,
        orderComment,
        detailArrayList,
        totalAmount,
      } = this;
      const { consignee, phoneNum, userAddress } = this.selectedAddress;

      const orderId = await this.$API.pay.reqSubmitOrder({
        tradeNo,
        consignee,
        consigneeTel: phoneNum,
        deliveryAddress: userAddress,
        paymentWay,
        orderComment,
        orderDetailList: detailArrayList,
      });

      this.$router.history.push(
        `/pay?orderId=${orderId}&orderPrice=${totalAmount}`
      );
    },
  },
  computed: {
    selectedAddress() {
      return this.userAddressList.find((user) => user.isDefault === "1") || {};
    },
  },
};
</script>

<style lang="less" scoped>
.goods-img {
  width: 150px;
  height: 100px;
}
.trade-container {
  .title {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 21px;
  }

  .content {
    width: 1200px;
    margin: 10px auto 0;
    border: 1px solid rgb(221, 221, 221);
    padding: 25px;
    box-sizing: border-box;

    .receive,
    .pay {
      line-height: 36px;
      margin: 18px 0;
    }

    .address {
      display: inline-block;
      padding-left: 20px;
      margin-bottom: 15px;

      .username {
        float: left;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: 1px solid #ddd;
        position: relative;
      }

      .username::after {
        content: "";
        display: none;
        width: 13px;
        height: 13px;
        position: absolute;
        right: 0;
        bottom: 0;
        background: url(./images/choosed.png) no-repeat;
      }

      .username.selected {
        border-color: #e1251b;
      }

      .username.selected::after {
        display: block;
      }

      p {
        width: 610px;
        float: left;
        line-height: 30px;
        margin-left: 10px;
        padding-left: 5px;
        cursor: pointer;

        .s1 {
          float: left;
        }

        .s2 {
          float: left;
          margin: 0 5px;
        }

        .s3 {
          float: left;
          width: 56px;
          height: 24px;
          line-height: 24px;
          margin-left: 10px;
          background-color: #878787;
          color: #fff;
          margin-top: 3px;
          text-align: center;
        }
      }

      p:hover {
        background-color: #ddd;
      }
    }

    .line {
      height: 1px;
      background-color: #ddd;
    }

    .way {
      width: 1080px;
      height: 110px;
      background: #f4f4f4;
      padding: 15px;
      margin: 0 auto;

      h5 {
        line-height: 50px;
      }

      .info {
        margin-top: 20px;

        .s1 {
          float: left;
          border: 1px solid #ddd;
          width: 120px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin-right: 10px;
        }

        p {
          line-height: 30px;
        }
      }
    }

    .detail {
      width: 1080px;

      background: #feedef;
      padding: 15px;
      margin: 2px auto 0;

      h5 {
        line-height: 50px;
      }

      .list {
        display: flex;
        justify-content: space-between;

        li {
          line-height: 30px;

          p {
            margin-bottom: 20px;
          }

          h4 {
            color: #c81623;
            font-weight: 400;
          }

          h3 {
            color: #e12228;
          }
        }
      }
    }

    .bbs {
      margin-bottom: 15px;

      h5 {
        line-height: 50px;
      }

      textarea {
        width: 100%;
        border-color: #e4e2e2;
        line-height: 1.8;
        outline: none;
        resize: none;
      }
    }

    .bill {
      h5 {
        line-height: 50px;
      }

      div {
        padding-left: 15px;
      }
    }
  }

  .money {
    width: 1200px;
    margin: 20px auto;

    ul {
      width: 220px;
      float: right;

      li {
        line-height: 30px;
        display: flex;
        justify-content: space-between;

        i {
          color: red;
        }
      }
    }
  }

  .trade {
    box-sizing: border-box;
    width: 1200px;
    padding: 10px;
    margin: 10px auto;
    text-align: right;
    background-color: #f4f4f4;
    border: 1px solid #ddd;

    div {
      line-height: 30px;
    }

    .price span {
      color: #e12228;
      font-weight: 700;
      font-size: 14px;
    }

    .receiveInfo {
      color: #999;
    }
  }

  .sub {
    width: 1200px;
    margin: 0 auto 10px;

    .subBtn {
      float: right;
      width: 164px;
      height: 56px;
      font: 700 18px "微软雅黑";
      line-height: 56px;
      text-align: center;
      color: #fff;
      background-color: #e1251b;
    }
  }
}
</style>