<template>
  <section class="order">
    <HeaderTop title="个人订单"></HeaderTop>
    <section class="order_no_login" v-if="userInfo.name">
      <div v-if="userOrder.length>0">
        当前有订单
        <div v-for="(order,index) of userOrder" :key="index">
          第{{index+1}}个订单
          <p v-for="(item,id) of order" :key="id">{{item.name+','+item.count}}</p>
        </div>
      </div>
      <div v-else>当前暂无订单</div>
    </section>
    <section class="order_no_login" v-else>
      <img src="./images/person.png">
      <h3>登录后查看外卖订单</h3>
      <button @click="login">立即登陆</button>
    </section>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['userInfo','cartFoods','userOrder'])
    },
    components:{
      HeaderTop
    },
    methods: {
      login() {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .order  //订单
    width 100%
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
</style>


