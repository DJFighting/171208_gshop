<template>
  <div class="home">
    <!--首页头部-->
    <HeaderTop :title="address.name">
        <a class="header_search" slot="left" @click="$router.push('/search')">
       <i class="iconfont icon-sousuo"></i>
    </a>
    <!-- <a class="header_login" slot="right">
        
    </a> -->
    <router-link class="header_login" slot="right" :to="userInfo._id ? '/personal' : '/login'">
    <span class="header_login_text" v-if="!userInfo._id">
      登录|注册
      </span>
      <span class="header_login_text" v-else>
      <i class="iconfont icon-person"></i>
      </span>
    </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="home_nav border-1px">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
            
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>

      <img src="./images/home_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="home_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data() {
      return {
        baseImageUrl:'https://fuss10.elemecdn.com'
      }
    },
      components:{
          HeaderTop,
          ShopList
      },
      mounted() {
        this.$store.dispatch('getCategorys')
        this.$store.dispatch('getShops')
        
      },
      computed:{
        ...mapState(['address','categorys','userInfo']),
        
        categorysArr () {
          const {categorys} = this
          const arr = []

          let minArr = []

          categorys.forEach(c => {
            if(minArr.length === 8) {
              minArr = []
            }
            if(minArr.length === 0) {
              arr.push(minArr)
            }
            minArr.push(c)          
          })
          return arr
        }
      },

      watch: {
        categorys (value) {
          // setTimeout(() => {
          //   new Swiper('.swiper-container',{
          //     loop: true,
          //     pagination:{
          //     el: '.swiper-pagination'
          //     }
          //   })
          // },1000)

          // 界面更新就立即创建Swiper对象
          this.$nextTick(() => {
            new Swiper('.swiper-container',{
              loop: true,
              pagination:{
              el: '.swiper-pagination'
              }
            })
          })

        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width 100%
    .home_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .home_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
