<template>
  <div id="empty-container">
    <icon type="empty"/>
    <p> {{ text }} </p>
  </div>
</template>

<script>
import icon from '@/components/Icon/'
export default {
  props:{
    text:{
      type:String,
      default:"无数据"
    }
  },
  components:{
    icon
  }
}
</script>

<style scoped lang="less">

@import "~@/style/mixin.less";
@import "~@/style/var.less";
 #empty-container{
   .between();
   color: @gray;
   text-align: center;
} 
.iconfont{
  font-size: 72px;
}

</style>