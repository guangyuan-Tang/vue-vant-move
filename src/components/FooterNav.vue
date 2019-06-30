<template>
  <div id="footer" @touchmove.stop.prevent>
    <ul class="footer-box">
      <li 
        :class="$route.name == item.router ? 'li-active' : '' " 
        v-for="(item,index) in routerArr" :key="index" 
        @click="pageChange(item)" >
          <i :class="['iconfont' ,$route.name == item.router ? item.active : item.className]"></i>
          <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">

export default {
  data() {
    return {
      routerArr: [
        { id: 1, name: '首页', router: 'index', className: 'icon-shouyemian-', active: 'icon-shouyemian' },
        { id: 2, name: '分类', router: 'classify', className: 'icon-lanmuxian', active: 'icon-lanmumian' },
        { id: 3, name: '购物车', router: 'buyCart', className: 'icon-rubangxian', active: 'icon-rubangmian' },
        { id: 5, name: '个人中心', router: 'user', className: 'icon-wodexian', active: 'icon-wodemian' },
      ],
      URL: document.URL.toString()
    }
  },
  methods: {
    pageChange(item) {
      this.$router.push({ name: item.router });
    }
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
  #footer {
      height:1.466667rem /* 110/75 */;
      width: 100%;
      border-top:1px solid #e5e5e5;
      position:relative;
      z-index:10;
      background:#fff;
  }
  .footer-box {
      display: flex;
      height:100%;
      font-size: .346667rem /* 26/75 */;
      line-height: 1.333333rem /* 100/75 */;
      li {
          flex:1;
          display:flex;
          width:100%;
          height:100%;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          color:#999999;
          .iconfont{
              font-size:.6rem /* 45/75 */;
              line-height:1.4em;
              margin-top:-.066667rem /* 5/75 */;
          }
          span{
              line-height:1em;
              font-size:.32rem /* 24/75 */;
          }  
      }
      .li-active {
          color:#e60012;
      }

  }
    
</style>
