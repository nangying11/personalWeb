<template>
  <div @click="handleclick" class="totop-container" v-show="show">
    Top
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    created(){
        this.$bus.$on("mainscroll",this.handlescroll)
    },
    destroyed(){
        this.$bus.$off("mainscroll",this.handlescroll)
    },  
    methods:{
        handlescroll(dom){
            // console.log(1);
            if(!dom){
                this.show = false;
                return
            }
            // console.log(dom.scrollTop);
            this.show = dom.scrollTop >= 500
        },
        handleclick(){
            // console.log("触发了");
            this.$bus.$emit("setmainscroll",0)
        }

    }
}
</script>

<style lang="less" scoped>
.totop-container{
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    z-index: 99;
    border-radius: 50%;
    background: rgb(255, 60, 60);
    position: fixed;
    right: 50px;
    bottom: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}

</style>