export default function (refValue){
    return{
        mounted(){
            this.$bus.$on("setmainscroll",this.handlesetmainscroll)
            this.$refs[refValue].addEventListener("scroll",this.handlemainsroll)
        },
        beforeDestroy(){
            this.$bus.$emit("mainsroll")    // 显示top时候 跳转 其他页面 还是会显示 离开时触发mainscroll 进ToTop
            this.$bus.$off("setmainscroll",this.handlesetmainscroll)
            this.$refs[refValue].removeEventListener("scroll",this.handlemainsroll)
        },
        methods:{
            handlemainsroll(){
                this.$bus.$emit("mainscroll",this.$refs[refValue])
            },
            handlesetmainscroll(scrollTop){
                this.$refs[refValue].scrollTop = scrollTop
            }
        },

    }
}

//  事件总线 一个事件可以出现多个监听
// 监听滚动到一定程度 出现top组件 所以都要加上mainscroll事件