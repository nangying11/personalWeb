<template>
  <div id="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from './index.vue'
import "@/style/global.less";
export default {
    components:{
        Contact
    }
}
</script>

<style lang="less" scoped>

#test-container{
    width: 500px;
    height: 400px;
    border: 2px solid;
    margin: 0 auto;
    padding-top: 200px;
    background: #000000;
}
</style>
