// 路由器对象模块
import Vue from 'vue'

import VueRouter from 'vue-router'

// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Login from '../pages/Login/Login.vue'
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
        }
    ]
})