<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

import {mapActions} from 'vuex'
export default {
  name: 'App',
   mounted() {
     this.getAddress()
     this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style>

</style>
