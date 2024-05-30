<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from './index.vue'
export default {
    components:{
        SiteAside,
    }
}
</script>

<style scoped lang="less">
.test-container{
    width: 250px;
    height: 600px;
    border: 2px solid red;
    background: #000;
}
</style>