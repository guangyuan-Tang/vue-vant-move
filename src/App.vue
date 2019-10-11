<template>
  <div id="app" class="c-flexColumn">

    <!-- 页面内容 -->
    <main>
      <router-view class="appView" />
    </main>

    <!-- 底部菜单 -->
    <FooterNav/>

    <!-- loading -->
    <transition name="fade">
      <Loading v-if="$store.state.globalLoading > 0"/>
    </transition>

  </div>
</template>

<script>

import FooterNav from "@/components/FooterNav.vue"
import Loading from "@/components/Loading.vue"


export default {
  components: {
    FooterNav,
    Loading
  },
}
</script>


<style lang="scss">
#app {
  height:100%;
}

</style>
