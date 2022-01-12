// 路由器对象模块
import Vue from 'vue'

import VueRouter from 'vue-router'

// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// 声明使用VueRouter插件
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'  //设置默认首页为Home
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/home',
            component:Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/personal',
            component:Personal,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/shop',
            component:Shop,
            children: [
                {
                    path:'/shop/goods',
                    component:ShopGoods,
                    name: ShopGoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings,
                    name: ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo,
                    name: ShopInfo
                },
                {
                    path:'/shop',
                    redirect:'/shop/goods'  //设置默认首页为商品页面
                },
            ]
        },
    ]
})