<template>
  <div class="buyCart c-flexColumn">
    <main>
      这里是购物车，
    </main>
    <FooterNav/>
  </div>
</template>


<script>

import FooterNav from "@/components/FooterNav.vue"

export default {
  name: "",

  //所有静态定义引用放前面
  mixins:[],
  filters:{},
  components: {FooterNav},

  //组件内部数据定义
  data(){ 
    return {

    }
  },
  props: {},
  watch: {},
  computed: {},

  //路由钩子
  created() {},
  mounted() {
  },

  //自定义方法
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
