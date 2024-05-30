<template>
  <div class="test-container" style="position: absolute;">
    <Loading v-if="isLoding"/>
    <button @click="isLoding = !isLoding">显示隐藏</button>
  </div>
</template>

<script>
import  Loading  from './index.vue';
export default {
    data() {
        return {
            isLoding:true
        }
    },
    components:{
        Loading
    }
}
</script>

<style lang="less" scoped>


</style>