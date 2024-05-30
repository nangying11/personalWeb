<template>   <!-- blog 单页右边 -->
  <div class="toc-container">
    <h2>目录</h2>
   <RightList :list="towithtoc" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from './RightList.vue';
import { debounce } from '@/utils'

export default {
    components:{
        RightList
    },
    props:{
        TOC:{
            type:Array,

        }
    },
    data(){
        return{
            activewithid:''
        }
    },
    computed:{
        towithtoc(){
            const newtoc = (toc = [])=>{
                return toc.map(t=>({
                    ...t,
                    isSelect:this.activewithid == t.anchor,
                    children:newtoc(t.children)
                }))
            }
            return newtoc(this.TOC)
        },
        doms(){
            const dom = []
            const gatheridbox = (toc = [])=>{
                return toc.map(t=>{
                    dom.push(document.getElementById(t.anchor));
                    gatheridbox(t.children)
                })
            }
            gatheridbox(this.TOC)
            return dom
        }
    },
    mounted(){
        // console.log(this.towithtoc);
        // console.log(this.doms);
        // console.log( this.selectbounce); 
        this.selectbounce = debounce(this.select,50)    // 延迟触发
        this.$bus.$on("mainscroll",this.selectbounce)   // 监听  配合emit触发使用
    },
    destroyed(){
        this.$bus.$off("mainscroll",this.selectbounce)
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor
        },
        //  只要emit那边出发传出来的值这里可以接收到 只是没有用 触发emit 这边on就开始行动处理这个函数
        select(){
            
            const gapwin = 200;
            // console.log(this.activewithid);
            this.activewithid = '';

            // 将每个id的循环且对应scroll
            for(const dom of this.doms){
                // 防止没有对应的domid也进来了
                if(!dom){
                    continue;
                }
                // 元素离窗口的高度
                const top = dom.getBoundingClientRect().top
                // console.log(top);
                // 设置范围 什么时候该显示那个标题
                if(top >= 0 && top <= gapwin){  //  得到规定的上方高度
                    this.activewithid = dom.id
                }else if(top > gapwin){  // 相当于还没到这个idH2 且距离很远
                    return
                }else {
                    // 他的下方默认为激活状态 继续往后走
                    this.activewithid = dom.id
                }

            }
        }
    }

}
</script>

<style lang="less" scoped>
.toc-container{
    h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}

</style>