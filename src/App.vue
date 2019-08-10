<template>
  <div id="app" class="c-flexColumn">
    <main>
      <transition :name="direction">
        <router-view class="appView" />
      </transition>
    </main>
    <FooterNav/>
  </div>
</template>

<script>

import FooterNav from "@/components/FooterNav.vue"

export default {
  components: {FooterNav},
  data() {
    return {
      direction: "slide-right",
      fromRouter: "",
    }
  },
  watch: {
    $route(to, from) {

      var prevRouter = this.fromRouter;
      console.log(prevRouter,to.name)

      if(prevRouter != to.name) {
        this.direction = "slide-right"
        console.log(666);
      } else {
        console.log(777);
        this.direction = "slide-left"
      }

      this.fromRouter = from.name

    }
  },
}
</script>


<style lang="scss">
#app {
  height:100%;
  color: #2c3e50;
  overflow: hidden;
}

.appView {
  position: absolute;
  width:100%;
  transition: transform 0.3s ease-out;
}
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-100%, 0);
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-active{
  transform: translate(100%, 0);
}

</style>
