<template>
  <section class="order">
    <HeaderTop title="个人订单"></HeaderTop>
    <section class="order_no_login" v-if="userInfo.name">
      <ul v-if="userInfo.userOrder.length > 0" class="order_list_ul">
        <li v-for="(order, index) of userInfo.userOrder" :key="index" class="order_list_li">
          <!-- <span>{{ index + 1 }}</span> -->
          <img
            src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg"
            alt=""
            class="restaurant_image"
          />
          <section data-v-285feff8="" class="order_item_right">
            <section data-v-285feff8="">
              <header data-v-285feff8="" class="order_item_right_header">
                <section data-v-285feff8="" class="order_header">
                  <h4 data-v-285feff8="">
                    <span data-v-285feff8="" class="ellipsis">效果演示 </span>
                    <svg data-v-285feff8="" fill="#333" class="arrow_right">
                      <use
                        data-v-285feff8=""
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="#arrow-right"
                      ></use>
                    </svg>
                  </h4>
                  <p data-v-285feff8="" class="order_time">2022-02-17 17:28</p>
                </section>
                <p data-v-285feff8="" class="order_status">支付超时</p>
              </header>
              <section data-v-285feff8="" class="order_basket">
                <p data-v-285feff8="" class="order_name ellipsis">
                  ew1 等3件商品
                </p>
                <p data-v-285feff8="" class="order_amount">¥184.00</p>
              </section>
            </section>
            <div data-v-285feff8="" class="order_again">
              <span data-v-285feff8="" class="buy_again">再来一单</span>
            </div>
          </section>
        </li>
      </ul>

      <!-- <div v-else>当前暂无订单</div> -->
    </section>
    <section class="order_no_login" v-else>
      <img src="./images/person.png" />
      <h3>登录后查看外卖订单</h3>
      <button @click="login">立即登陆</button>
    </section>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      a: [],
    };
  },
  computed: {
    ...mapState(["userInfo", "cartFoods", "userOrder"]),
  },
  components: {
    HeaderTop,
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
  },
  mounted() {
    // console.log(this.userInfo.userOrder,this.a);
  },
  created() {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order { // 订单
  width: 100%;

  .order_no_login {
    padding-top: 140px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;

    >ul {
      width: 100%;

      li {
        display: block;
        width: 100%;
        height: 100px;

        span {
          font-size: 40px;
          display: block;
          height: 40px;
          width: 40px;
          border: 1px solid red;
        }
      }
    }

    >img {
      display: block;
      width: 100%;
      height: 30%;
    }

    >h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }

    >button {
      display: inline-block;
      background: #02a774;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
a, article, aside, b, body, button, dd, div, dl, dt, figcaption, figure, footer, h1, h2, h3, h4, h5, h6, header, i, input, li, nav, p, section, select, span, textarea, ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
}
.order_list_ul {
    padding-top: 1.95rem;
}
.order_list_ul .order_list_li .order_item_right {
    -ms-flex: 5;
    flex: 5;
}
.order_list_ul .order_list_li .order_item_right .order_item_right_header {
    border-bottom: 0.025rem solid #f5f5f5;
    padding-bottom: 0.3rem;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.order_list_ul .order_list_li .order_item_right .order_item_right_header .order_status {
    font-size: .6rem;
    color: #333;
}
.order_list_ul .order_list_li .order_item_right .order_basket .order_name {
    font-size: .6rem;
    color: #666;
    width: 10rem;
}
.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.order_list_ul .order_list_li .order_item_right .order_basket .order_amount{
    font-size: .6rem;
    color: #f60;
    font-weight: 700;
}
.order_list_ul .order_list_li .order_item_right .order_again{
    text-align: right;
    line-height: 1.6rem;
}
.order_list_ul .order_list_li .order_item_right .order_again .buy_again {
    font-size: .55rem;
    color: #3190e8;
    border: 0.025rem solid #3190e8;
    padding: 0.1rem 0.2rem;
    border-radius: 0.15rem;
}
.order_list_ul .order_list_li .order_item_right .order_basket {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 2rem;
    border-bottom: 0.025rem solid #f5f5f5;
}
.order_list_ul .order_list_li {
    background-color: #fff;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 0.5rem;
    padding: 0.6rem 0.6rem 0;
}
.order_list_ul .order_list_li .restaurant_image {
    width: 2rem;
    height: 2rem;
    margin-right: 0.4rem;
}
</style>


