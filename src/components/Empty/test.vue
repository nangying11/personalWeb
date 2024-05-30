<template>
  <div id="app">
    <Empty />
  </div>
</template>

<script>
import Empty from'./index.vue'
export default {
    components:{
        Empty
    }
}
</script>

<style scoped>

#app{
  width: 500px;
  height: 400px;
  border: 2px solid #333;
  margin: 0 auto;
  position: relative;
}
</style>