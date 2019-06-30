<template>
  <div class="index c-flexColumn">
    <main>
      这里是首页，
      <van-button type="default">默认按钮</van-button>
      <p>
        vue过滤器：<br/>
        时间戳：{{1544179366 | timeFilter}}<br/>
        手机格式化：{{15311959057 | formatPhone}}<br/>
        银行卡格式化：{{123123123123132 | formatBank}}<br/>
        千分位分隔符：{{5000039 | toThousands}}
      </p>
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
