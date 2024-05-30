<template>
  <div v-loding="loading" class="home-container" ref="container" @wheel="handleroll">
   <ul class="img-container" :style="{marginTop}" @transitionend="handletransitioned">
    <li class="imgli" v-for="item in data" :key="item.id" >
        <Carouselitem :describe="item"/>
    </li>
   </ul>
   <!-- <div>横坐标：{{  }} 纵坐标：{{  }}</div> -->
   <div class="icon icon-arrowup" v-show="index >= 1" @click="clickdot(index-1)">
        <Icon class="arrowUp" type="arrowUp"/>
   </div>
   <div class="icon icon-arrowDown" v-show="index < data.length-1" @click="clickdot(index+1)">
        <Icon class="arrowDown" type="arrowDown"/>
   </div>
   <ul class="dot-container" >
    <li :class="{active : index === i }" v-for="(item , i)  in data" :key="item.id" @click="clickdot(i)">
    </li>
   </ul>
   <!-- <Loding v-if="isLoding"/> -->
 </div>
  
</template>

<script>
// import { getaxiosdata } from "@/api/banner.js"
import { mapState } from "vuex"
import Carouselitem from "./Carouselitem.vue"
import Icon from "@/components/Icon"
// import Loding from "@/components/Loding"
import fetchData from "@/mixins/fetchDate.js"
export default {
    // mixins:[fetchData([])],
    components:{
        Carouselitem,
        Icon,
        // Loding
    },
    data(){
        return{
            // isLoding:true,
            index:0,        // 当前多少页
            pointer:0,      // 屏幕可视度高度
            runactive:false   // 现在是否正在滚动
        }
    },
    computed:{
        marginTop(){
            return -this.pointer * this.index + 'px';
        },
        ...mapState("banner",["loading","data"])


    },
     mounted(){
        this.pointer = this.$refs.container.clientHeight;
        window.addEventListener("resize",this.handlewindow)
    },
    destroyed() {
        window.removeEventListener("resize", this.handlewindow);
    },
    created: function () {
    this.$store.dispatch("banner/disposegetloading")
  },
    methods: {
        clickdot(i){
            this.index = i;
            
        },
        handleroll(e){
           if(this.runactive){
            return
           }
       
           if(e.deltaY >= 5 && this.index < this.data.length-1){
                //   console.log(e.deltaY );
            this.runactive = true;
            this.index = this.index+1
            // console.log("往下翻");
        }else if(e.deltaY <= -5 && this.index > 0){
            this.runactive = true;
            this.index = this.index-1
            // console.log("往上翻");
           }
           this.handleroll;
        },
        handletransitioned() {
            this.runactive = false;
        },
        handlewindow() {
            // console.log("触发了");
            this.pointer = this.$refs.container.clientHeight;
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/mixin.less";
@import "~@/style/var.less";
@arrowPels:25px;
.home-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

//     width: 60%;
//   height: 40%;
//   overflow: visible;
//   border: 2px solid #008c8c;
//   margin: 100px auto;
//   z-index: 5;

}
.img-container{
    
    transition: 500ms;
    width: 100%;
    height: 100%;
    
    .imgli{
        width: 100%;
        height: 100%;
    }
}
   .icon{
    .between();
    transform: translateX(-50%);
    font-size: 30px;
    color: @gray;
    cursor: pointer;
    &.icon-arrowup{
      top: @arrowPels;  
      animation: arrowup 2s infinite; 
     }
    &.icon-arrowDown{
        top: auto;
        bottom: @arrowPels;   
        animation: arrowDown 2s infinite; 
    }
    
     @jump: 5px;
     @keyframes arrowDown {
         0% {
              transform: translate(-50%, -@jump);
         }
         50% {
             transform: translate(-50%, @jump);
         }
         100% {
             transform: translate(-50%, -@jump);
         }
     }
     @keyframes arrowup {
         0% {
              transform: translate(-50%, @jump);
         }
         50% {
              transform: translate(-50%, -@jump);
         }
         100% {
              transform: translate(-50%, @jump);
         }
     }
   }

    .dot-container{
        .between();
        left: auto;
        right: 20px;
        transform: translateY(-50%);
        li{
            width: 7px;
            height: 7px;
            border-radius: 50px;
            border: 1px solid #fff;
            margin-bottom: 10px;
            cursor: pointer;
            background: #000000;
            &.active{
                background: #fff;
            }
        }
    }

</style>