<template>
  <div class="app">
    <Menua />
  </div>
</template>

<script>
import '@/style/global.less';
import Menua from './index.vue'
export default {
    components:{
        Menua
    }
}
</script>

<style lang="less" scoped>
.app{
    width: 500px;
    height: 400px;
    background: #000000;
    border: 1px solid red;
    margin: 0 auto;
}
</style>