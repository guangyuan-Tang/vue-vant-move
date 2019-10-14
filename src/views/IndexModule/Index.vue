<template>
  <div class="index">
    <main>
      <van-button type="default" @click="languageChange">
        {{$i18n.locale == "cn" ? "英文" : "中文"}}
      </van-button>
      <p>
        手机格式化：{{15311959057 | formatPhone}}<br/>
        银行卡格式化：{{123123123123132 | formatBank}}<br/>
        千分位分隔符：{{5000039 | toThousands}}
      </p>
      <p class="c-required">必填项</p>
      <p>时间格式化{{$public.formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss')}}</p>
  
    </main>
  </div>
</template>

<script>

export default {
  data(){ 
    return {
      
    }
  },
  mounted() {
    this.$http.get("news").then(
      res => {
        console.log(res);
        this.$toast(res.msg)
      },
      err => {
        this.$toast(err.msg)
      }
    );
  },
  methods: {
    languageChange() {
      this.$i18n.locale = (this.$i18n.locale == "cn" ? "en" : "cn");
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
