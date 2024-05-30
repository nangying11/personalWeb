<template>
  <div class="notfound-container">
    <img :src="backage" alt="">
  </div>
</template>

<script>
import backage from "@/assets/404.jpg"
export default {
    data(){
        return{
            backage
        }
    }
}
</script>

<style lang="less" scoped>

.notfound-container{
    background: rgb(125, 205, 192);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>