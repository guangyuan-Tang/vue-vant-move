<template>
  <div class="index c-flexColumn">
    <main>
      <div>{{$t('buyCard')}}</div> 
      <div v-for="brand in brands" :key="brand">{{brand}}</div>
      <van-button type="default" @click="languageChange">{{$i18n.locale}}</van-button>
      <p>
        vue过滤器：<br/>
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
  components: {FooterNav},

  data(){ 
    return {
      
    }
  },
  computed: {
    brands() {
      return [this.$t('buyCard'), this.$t('brands.adi'), this.$t('brands.nb'), this.$t('brands.ln')]
    }
  },
  methods: {
    languageChange() {
      this.$i18n.locale = (this.$i18n.locale == "cn" ? "en" : "cn");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
