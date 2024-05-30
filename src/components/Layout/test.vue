<template>
  <div class="test-container">
    <Layout>
        <template #left>
        <div class="left">
        左边栏区域，宽度适应内容，溢出隐藏
        </div>
    </template>
    <div class="main">
        主区域，宽度占满剩余空间，溢出隐藏
    </div>
    <template #right>
        <div class="right">
        右边栏区域，宽度适应内容，溢出隐藏
        </div>
    </template>
</Layout>
  </div>
</template>

<script>
import Layout from './index.vue'
export default {
    components:{
        Layout
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.test-container{
    width: 60%;
    height: 600px;
    margin: 0 auto;
    border: 1px solid;
    // background: #852142;
}
.left{
    width: 200px;
    height: 100%;
    background: #852741;
}
.main{
    width:100%;
    height: 100%;
    background: #ff5ae1;
}
.right{
    width: 150px;
    height: 100%;
    background: #123456;
}
</style>