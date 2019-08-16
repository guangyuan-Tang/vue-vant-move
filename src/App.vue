<template>
  <div id="app" class="c-flexColumn">
    <main>
      <router-view class="appView" />
    </main>
    <FooterNav/>
  </div>
</template>

<script>

import FooterNav from "@/components/FooterNav.vue"

export default {
  components: {FooterNav},
}
</script>


<style lang="scss">
#app {
  height:100%;
}

</style>
