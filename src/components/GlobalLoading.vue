<template>
  <!-- 全局loading -->
  <div class="GlobalLoading"></div>
</template>

<script>
export default {
  data() {
    return {
      Toast:""
    }
  },
  //创建
  created() {
    this.Toast = this.$toast.loading({
      duration: 0,
      mask: false,
      message: '加载中...'
    });
  },
  //销毁
  destroyed() {
    this.Toast.clear();
  }
}
</script>

