<template>
  <section class="order">
    <HeaderTop title="个人订单"></HeaderTop>
    <section class="order_no_login" v-if="userInfo.name">
      <div v-if="cartFoods.length">
        <!-- <table>
          <th>
            <td>商品名称</td>
            <td>商品描述</td>
            <td>商品数量</td>
            <td>商品总价</td>
          </th>
          <tr v-for="(cartFood,index) in cartFoods" :key="index">
            <td>{{cartFood.name}}</td>
            <td>{{cartFood.description}}</td>
            <td>{{cartFood.count}}</td>
            <td>{{cartFood.price*cartFood.count}}</td>
          </tr>
        </table> -->
        <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>商品名称</th>
                  <th>商品描述</th>
                  <th>商品数量</th>
                  <th>商品总价</th>
                </tr>
              </thead>
              <tbody>
                  
                  <tr v-for="(cartFood,index) in cartFoods" :key="index">
                    <td>{{cartFood.name}}</td>
                    <td>{{cartFood.description}}</td>
                    <td>{{cartFood.count}}</td>
                    <td>{{cartFood.price*cartFood.count}}</td>
                  </tr>
                 
                
              </tbody>
            </table>
          </div>
      </div>
      <div v-else>
        <h3>当前暂无任何订单{{userInfo.name}}</h3>
      <router-link to="/home"><button>去点餐</button></router-link>
      </div>
      
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
      ...mapState(['userInfo','cartFoods'])
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


