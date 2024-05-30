<template>
  <div 
  class="Carouselitem-container" 
  ref="container"  
  @mousemove="movemousesize"
  @mouseleave="mouseleavesize"
  >
    <div class="Carouselitem-box" ref="innersize" :style="moverate">
        <ImageLoader :src="describe.bigImg" :placeholder="describe.midImg" @load="this.handlescript"  />
    </div>
  
    <div class="text" ref="textref">{{ describe.title}}</div>
    <div class="deck" ref="deckref">{{ describe.description }}</div>
  </div>
</template>

<script>
import ImageLoader from"@/components/ImageLoader"
export default {
    props:["describe"], 
    components:{
        ImageLoader
    },
    data() {
        return {
            textrefwidth:0,
            deckrefwidth:0,

            containersize:null, // 外层宽高
            innersize:null,     // 图片宽高
            moveX:0,
            moveY:0
        }
    },
   
    mounted(){
        // 赋值
        this.textrefwidth = this.$refs.textref.clientWidth;    
        this.deckrefwidth = this.$refs.deckref.clientWidth;
        this.size();
        this.moveX = this.center.x
        this.moveY = this.center.y
       window.addEventListener("resize",this.size);   // 窗口改变

    },
    destroyed(){
        window.removeEventListener("resize",this.size)
    },
    computed:{
        moverate(){
            if(!this.containersize || !this.containersize){
                return
            }
            const innerwidth = this.containersize.width - this.innersize.width;
            const innerheight = this.containersize.height - this.innersize.height;
            const left =  innerwidth / this.containersize.width * this.moveX;
           const top =  innerheight / this.containersize.height * this.moveY;
        //    console.log(left,top);
        // console.log(innerwidth/this.containersize.width,this.moveX,left);
        //  得到图片和容器差 将差按比例分给容器   鼠标移动到容器的哪一个部分  就相当于容器在那里的比例是多少
            return{
                transform: `translate(${left}px, ${top}px)`,
            }
        },
        center() {
            return{  //  移进来前 以及 移出去后 图片都要居中
                x : this.containersize.width / 2,    
                y : this.containersize.height / 2
            }
        }
    },
    methods:{
        handlescript(){
           
            this.$refs.textref.style.opacity = 1;         // 设置显示出 给个宽度
            this.$refs.textref.style.width = "0";
            // 强行渲染
            this.$refs.textref.clientWidth;              
           this.$refs.textref.style.transition =  "1s";     // 设置动画  给定宽度
           this.$refs.textref.style.width = this.textrefwidth +"px";


           this.$refs.deckref.style.opacity = 1 ;        // 设置显示出 给个宽度
           this.$refs.deckref.style.width = "0";
            // 强行渲染
           this.$refs.deckref.clientWidth;              
           this.$refs.deckref.style.transition =  "2s 1s";     // 设置动画  给定宽度
           this.$refs.deckref.style.width = this.deckrefwidth + "px";
        },
        size(){
           this.containersize = {
             width:this.$refs.container.clientWidth,
             height:this.$refs.container.clientHeight
           } 
           this.innersize = {
             width :this.$refs.innersize.clientWidth,
             height :this.$refs.innersize.clientHeight,
           }
        //    console.log( this.containersize,this.innersize);
        },
        movemousesize(e) {   // 将鼠标00的位置放在指定的区域
            const reft = this.$refs.container.getBoundingClientRect();
            this.moveX = e.clientX - reft.left
            this.moveY = e.clientY - reft.top
            // console.log(this.moveX,this.moveY);
        },
        mouseleavesize() {   //  移出去后居中
            this.moveX = this.center.x
            this.moveY = this.center.y
        }
        
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.Carouselitem-container{
    width: 100%;
    height: 100%;
    position: relative; 
    overflow: hidden;  
    
    //       
    .Carouselitem-box{
        transition: 0.3s;
        width: 110%;
        height: 110%; 
        position: absolute;
        z-index: -1;
        

    }
    .text,
    .deck{
        
        position: absolute;
        text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
                     0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        letter-spacing: 3px;
        overflow: hidden;
        // width: auto;
        color: #ffffff;
        margin-left: 20px;
        opacity: 0;
        // width: 0;
        
    }
    .text{
        font-size: 2em;
        top:calc(50% - 50px);
        
    }
    .deck{
        font-size: 1em;
        top: calc(50% + 20px);
        color: lighten(@gray, 20%);

    }
}

</style>