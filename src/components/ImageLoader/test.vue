<template>
  <div id="test-ImageLoader">
    <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    @load="loada"
    />    
    <!-- 是否全部加载完 -->
  </div>
</template>

<script>
import ImageLoader from './index.vue'
export default {
    components:{
        ImageLoader
    },
    methods:{
        loada(){
          console.log("已经获取load 全部加载完毕");
          
            
        }
    }
}
</script>

<style scoped lang="less"> 
#test-ImageLoader{
  width: 500px;
  height: 400px;
  border: 2px solid #333;
  margin: 0 auto;
  
  
}

</style>

