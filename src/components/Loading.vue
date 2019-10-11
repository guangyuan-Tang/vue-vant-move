<template>
  
</template>

<script>
export default {
  created() {
    this.$toast.loading({
      duration: 0,
      message: '加载中...',
    });
  },
  beforeDestroy() {
    this.$toast.clear();
  }
}
</script>

<style>

</style>