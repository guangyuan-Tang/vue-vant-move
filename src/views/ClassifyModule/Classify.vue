<template>
  <div id="labelList">
    <div :class="['labelList-conten',{'conten-hide':labelBtn}]">
      <div 
        class="labelList-item" 
        v-for="(item,index) in conten" :key="index">
        {{item}}
      </div>
    </div>
    <button @click="labelShow" class="labelList-button" v-if="conten.length > 4">{{buttonText}}</button>
  </div>
</template>

<script>

/*
  问题点： 如何确定是否超出两行，元素的宽度是不确定的。
*/

export default {
  name: 'labelList',
  data () {
    return {
      labelBtn:false,
      buttonText:'查看全部'
    }
  },
  props:{
    conten:{
      type:Array,
      required:false,
      default: function() {
        return ["折叠纸盒",  "上光机",  "激光刀",  "切纸机", "好东西"]
      },
    }
  },
  methods:{
    labelShow() {
      this.labelBtn = !this.labelBtn;
      this.buttonText = this.buttonText === '查看全部' ? '收起' : '查看全部';
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
#labelList{
  width:100%;
  padding-top:100px;
}
#labelList .labelList-conten{
  width:100%;
  height:40px;
  display: flex;
  margin:0 auto;
  flex-wrap:wrap;
  justify-content:center;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
}
#labelList .conten-hide{
  overflow: visible;
  height:auto;
}
#labelList .labelList-item{
  width:25%;
  padding:5px;
  font-size: 16px;
  margin:0 10px 10px 0;
  border-radius:5px;
  flex-shrink:0;
}
.labelList-conten .labelList-item:nth-child(4n+1){
  border:1px solid #32c2b3;
  color:#32c2b3;
}
.labelList-conten .labelList-item:nth-child(4n+2){
  border:1px solid #E7607B;
  color:#E7607B;
}
.labelList-conten .labelList-item:nth-child(4n+3){
  border:1px solid #34B5EF;
  color:#34B5EF;
}
.labelList-conten .labelList-item:nth-child(4n+4){
  border:1px solid #7F6DE9;
  color:#7F6DE9;
}
.labelList-button{
  margin-top: 30px;
}



</style>
