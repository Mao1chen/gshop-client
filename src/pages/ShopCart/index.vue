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
      <div class="cart-body" v-for="carInfo in cartInfoList" :key="carInfo.id">
        <ul class="cart-list">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="carInfo.isChecked"
            />
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png" />
            <div class="item-msg">
              {{ carInfo.skuName }}
            </div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ carInfo.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
              @click="updateServer(carInfo, -1, true)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="carInfo.skuNum"
              minnum="1"
              class="itxt"
              @change="updateServer(carInfo, event.target.value * 1, false)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
              @click="updateServer(carInfo, 1, true)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ carInfo.skuPrice * carInfo.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="allchecked" />
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{ checkNum }}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ allMoney }}</i>
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn" href="###" target="_blank">结算</a> -->
          <router-link to="/Trade">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ShopCart',
  mounted() {
    // 这里封装成一个方法，以防以后在调用发送请求
    this.getCartInfoList()
  },
  methods: {
    //获取商品信息列表
    getCartInfoList() {
      this.$store.dispatch('shopCart/getCartInfoList')
    },
    //更新商品信息列表,先更新提交给服务器,然后再从服务器获取过来
    // 被async修饰的函数会返回一个promise实列
    async updateServer(carInfo, disNum, flag) {
      if (!flag) {
        if (disNum > 0) {
          disNum = disNum - carInfo.skuNum
        } else {
          disNum = 1 - carInfo.skuNum
        }
      } else {
        if (disNum + disNum.skuNum <= 0) {
          disNum = 1 - carInfo.skuNum
        }
      }
      try {
        // 这里只等待成功的结果，报错需要下面catch一下
        await this.$store.dispatch('shopCart/reqAddOrUpdate') //更新服务器数据
        alert('修改数量成功')
        this.getCartInfoList() //发请求获取服务器数据,更新本地vuex数据,数据改了页面就跟着改了
      } catch (error) {
        alert(error.message)
      }
    }
  },
  computed: {
    ...mapState('shopCart', ['cartInfoList']),
    checkNum() {
      return this.cartInfoList.reduce((prev, current) => {
        /* if (current.isChecked == 1) return (prev += 1) */
        return prev + (current.isChecked == 1 ? current.skuNum : 0)
      }, 0)
    },
    allMoney() {
      return this.cartInfoList.reduce((prev, current) => {
        return (
          prev +
          (current.isChecked == 1 ? current.skuPrice * current.skuNum : 0)
        )
      }, 0)
    },
    allchecked: {
      get() {
        return this.cartInfoList.every((item) => item.isChecked)
      },
      set() {}
    }
  }
}
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
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

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

        .cart-list-con4 {
          width: 10%;
        }

        .cart-list-con5 {
          width: 17%;

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
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

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
          font-family: 'Microsoft YaHei';
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>