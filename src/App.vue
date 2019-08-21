<template>
  <div id="app" class="c-flexColumn">
    <main>
      <router-view class="appView" />
    </main>
    <FooterNav/>
    <GlobalLoading v-if="$store.state.globalLoading > 0"/>
  </div>
</template>

<script>

import FooterNav from "@/components/FooterNav.vue"
import GlobalLoading from "@/components/GlobalLoading.vue";

export default {
  components: {
    FooterNav,
    GlobalLoading
  },
}
</script>


<style lang="scss">
#app {
  height:100%;
}

</style>
