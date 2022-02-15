<template>
  <section class="bg">
    <HeaderTop :title="'账号信息'">
      <a class="header_search" slot="left" @click="$router.back()">
        <i class="iconfont icon-arrow_left back"></i>
      </a>
    </HeaderTop>
    <section class="userimg">
      <span>头像</span>
      <div class="picture">
        <img src="http://elm.cangdu.org/img/default.jpg" alt="" />
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </section>
    <section>
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="name"
      ></mt-field>
      <mt-field
        label="手机号"
        placeholder="请输入手机号"
        type="tel"
        v-model="phone"
      ></mt-field>
      <mt-field
        label="收货地址"
        placeholder="请输入地址"
        type="add"
        v-model="address"
      ></mt-field>
      <!-- <mt-field label="数字" placeholder="请输入数字" type="number"></mt-field> -->
      <mt-field label="生日" placeholder="请输入生日" type="date"></mt-field>
    </section>

    <mt-button type="danger" class="btn" @click="updateInfo"
      >修改信息</mt-button
    >
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
      name: "",
      phone: "",
      address: "",
    };
  },
  components: { HeaderTop },
  computed: {
    ...mapState(["userInfo"]),
  },
  mounted() {
    this.name = this.userInfo.name;
    this.phone = this.userInfo.phone;
    this.address = this.userInfo.address;
  },
  methods: {
    updateInfo() {
      MessageBox.confirm("您确定修改吗?").then(async (action) => {
        let result = await reqUpdateUserInfo({
          _id: this.userInfo._id,
          name: this.name,
          phone: this.phone,
          address: this.address,
        });
        if (result.code == 0) {
          Toast("信息修改成功");
          this.getUserInfo(); // 及时获取最新用户信息 使页面跳转时也是最新的信息
          // this.$store.dispatch('recordUser',this.userInfo)
          this.$router.replace("/personal");
        }
      });
    },
    ...mapActions(["getAddress", "getUserInfo"]),
  },
};
</script>

<style lang="scss" >
.back {
  color: #fff;
  font-size: 25px;
}
.userimg {
  display: flex;
  margin-top: 60px;
  height: 60px;
  /* border: 1px solid slategrey; */
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  /* position: relative; */
  .picture {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 60px;
    width: 80px;
  }
}
.userimg img {
  height: 80%;
  width: 80%;
  border-radius: 50%;
}
.userimg span {
  margin-left: 8px;
}
i {
  color: gray;
}
.bg {
  background-color: #f5f5f5;
  .btn {
    margin-top: 5px;
    width: 100%;
  }
}
.userinfo {
  background-color: #fff;
  height: 70px;
  margin-top: 5px;
}
.userinfo .username {
  height: 35px;
  border-bottom: 1px solid #f5f5f5;
}
.userinfo div {
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>