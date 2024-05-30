<template>
  <div class="about-container" v-loding="loading || !srcLoaded">   <!--或 -->
    <iframe 
    v-if="src"
    class="about-content"
    :src="src" 
    frameborder="0"
    @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      srcLoaded:false
    }
  },  
  computed:mapState("about",{
    src: "data",
    loading: "loading"
  }),
  created(){
    this.$store.dispatch("about/disposegetloadinga")
  }
}
</script>

<style lang="less" scoped>
.about-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

</style>