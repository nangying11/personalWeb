<template>
  <div id="ImageLoader-container">
    <img  @load="handload" :src="src" :style="{ opacity : conceal , transition : `${duration}ms` }">
    <img 
    class="placeholder"
    v-if="!accomplish"
    :src="placeholder"
     >
     <!-- 等原图加载完了 开始删除缩略图   -->
  </div>
</template>

<script>
export default {
props:{
    src:{
        type:String,
        required:true
    },
    placeholder:{   
        type:String,
        required:true
    },
    duration:{
        type:Number,
        default:500
        
    }
},
data(){
    return {
        originload: false,        // 加载是否完成
        accomplish: false         // 图片是否全部展现出来
    }

},
computed:{
    conceal(){
        return this.originload ? 1 : 0
    }
},
methods:{
    handload(){
        console.log("加载完啦");
        this.originload = true;
        setTimeout(()=>{
            this.accomplish = true
            this.$emit("load") // 告诉父组件已经处理好了 让父组件完成后后续操作
        },this.duration)
    }
}
}
</script>

<style scoped lang="less">
@import "~@/style/mixin.less";
#ImageLoader-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
   img{
    .fill-container();
    object-fit: cover;
   }

}
.placeholder{
    filter: blur(2vw);
}
</style>