<template>
  <div class="shop-wrapper">
    <div class="shop-content">
      <shop-header/>
      <div class="tab">
        <div class="tab-item">
          <router-link :to="{path:'/shop/goods',query:{id:id}}" replace>点餐</router-link>
        </div>
        <div class="tab-item">
          <router-link :to="{path:'/shop/ratings',query:{id:id}}" replace>评价</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/shop/info" replace>商家</router-link>
        </div>
      </div>
      <keep-alive>
         <router-view/>
      </keep-alive>
     
    </div>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
import ShopGoods from '../Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../Shop/ShopRatings/ShopRatings.vue'

import ShopInfo from '../Shop/ShopInfo/ShopInfo.vue'

export default {
  data() {
    return {
      id:this.$route.query.id
    }
  },
  mounted () {
    console.log('***********',this.$route.query.id);
    this.$store.dispatch('getShopGoods',{id:this.id})
    this.$store.dispatch('getShopRatings',{id:this.id})
    this.$store.dispatch('getShopInfo',this.id)

  },
  components: {
        ShopHeader,
        ShopGoods,
        ShopRatings,
        ShopInfo
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shop-wrapper
    .shop-content
      .tab
        height 40px
        line-height 40px
        background #fff
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        .tab-item
          float left
          width: 33.33333%
          text-align center
          font-size 14px
          color rgb(77, 85, 93)
          a
            display block
            position relative
            &.router-link-active
              color #02a774
              &::after
                content ''
                position absolute
                left 50%
                bottom 1px
                width 35px
                height 2px
                transform translateX(-50%)
                background #02a774
</style>
