<template>
  <section class="bg">
    <HeaderTop :title="'我的余额'">
      <a class="header_search" slot="left" @click="$router.back()">
        <i class="iconfont icon-arrow_left back"></i>
      </a>
    </HeaderTop>
  </section>
</template>

<script>
import HeaderTop from "../../../components/HeaderTop/HeaderTop.vue";
import { mapState, mapActions } from "vuex";
import { MessageBox, Toast } from "mint-ui";
import { reqUpdateUserInfo } from "../../../api";
export default {
  data() {
    return {
    };
  },
  components: { HeaderTop },
  computed: {
    ...mapState(["userInfo"]),
  },
};
</script>

<style lang="scss" >
</style>