<template>
  <div class="index c-flexColumn">
    <main>
      <van-button type="default" @click="languageChange">
        {{$i18n.locale == "cn" ? "en" : "cn"}}
      </van-button>
      <p>
        vue过滤器：<br/>
        手机格式化：{{15311959057 | formatPhone}}<br/>
        银行卡格式化：{{123123123123132 | formatBank}}<br/>
        千分位分隔符：{{5000039 | toThousands}}
      </p>
    </main>
  </div>
</template>


<script>



export default {


  data(){ 
    return {
      
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
