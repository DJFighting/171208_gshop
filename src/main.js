import Vue from 'vue'
//引入mini-ui组件库
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'font-awesome/css/font-awesome.min.css'
//引入mockServer服务 加载mockserver模块
// import '../src/mock/mockServer'
Vue.config.productionTip = false
import './filters'  //加载过滤器
// 注册全局组件标签
Vue.component(Button.name, Button) //mt-button
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
