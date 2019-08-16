<template>
  <div id="footer" @touchmove.stop.prevent>
    <ul class="footer-box">
      <li
        @click="pageChange(item)"
        v-for="(item,index) in routerArr" :key="index"
        :class="$route.name == item.router ? 'li-active' : '' "
      >
        <van-icon class="icon" :name="item.icon" />
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    routerArr() {
      return [
        {
          id: 1,
          name: this.$t("home"),
          router: "index",
          icon: "wap-home",
        },
        {
          id: 2,
          name: this.$t("classify"),
          router: "classify",
          icon: "apps-o",
        },
        {
          id: 3,
          name: this.$t("buyCard"),
          router: "buyCart",
          icon: "shopping-cart-o",
        },
        {
          id: 5,
          name: this.$t("mine"),
          router: "user",
          icon: "user-o"
        }
      ]
    }


  },
  methods: {
    pageChange(item) {
      this.$router.push({ name: item.router });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
#footer {
  height: 60px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  position: relative;
  z-index: 10;
  background: #fff;
  .footer-box {
    display: flex;
    height: 100%;
    font-size: 13px;
    line-height: 100px;
    li {
      flex: 1;
      display: flex;
      width: 100%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #999999;
      .icon {
        font-size: 25px;
        line-height: 1.4em;
        margin-top: -5px;
      }
      span {
        line-height: 1em;
        font-size: 13px;
      }
    }
    .li-active {
      color: #e60012;
    }
  }
}
</style>
