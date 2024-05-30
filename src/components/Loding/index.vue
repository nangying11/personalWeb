<template>
   <img class="Loding-container" :src="imagesvg" alt="">

</template>

<script>
import imagesvg from '@/assets/loading.svg'
export default {
    data() {
        return{
            imagesvg,
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/mixin.less';
.Loding-container {
    .between()
}


</style>