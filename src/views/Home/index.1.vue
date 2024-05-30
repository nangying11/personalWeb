<template>
  <div class="home-container" ref="container">
   <div>首页</div>
    <button @click="handleclick">Click</button>
  </div>
  
</template>

<script>

export default {
 methods :{
    handleclick() {
        console.log("这是首页");
        this.$showMessage({
            content:"登入成功",
            type: "info",
            container: this.$refs.container,
            callback:function(){
                console.log("函数调用完成");
            }
        })
    }
 }
}
</script>

<style>
.home-container{
    width: 500px;
    height: 600px;
    background: #123456;
}
</style>