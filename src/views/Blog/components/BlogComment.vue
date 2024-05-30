<template>  <!-- blog 单页评论最下边 -->
  <div class="blog-comment-container">
    <MessageArea
     title="评论列表"
     :subnumber="`(${data.total})`"
     :list="data.rows"
     :transIsLoding="isLoding"
     @submit="handsubmit"
    />
    <!-- {{ data }} -->
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchDate.js";
import {getcomment,postcomment} from "@/api/blog.js"
export default {
    mixins:[fetchData({total:0,rows:[]})],
    components:{
        MessageArea
    },
    data(){
       return {
        page:1,
        limit:10,
       }

    },
    created(){
        window.handlemore = this.handlescroll
        this.$bus.$on("mainscroll",this.handlemore)
    },
    destroyed(){
        this.$bus.$off("mainscroll",this.handlemore)
    },
    computed:{
        hasscroll(){
            // console.log(this.data.rows.length > this.data.total  );
            return this.data.rows.length > this.data.total  
        }
    },
    methods:{
        async fetchData() {
            return await getcomment(this.$route.params.Id,this.page,this.limit)
        },
        handlemore(dom){
            if(this.isLoding || !dom){    //  正在加载 或者 没有dom 不加载数据  防止数据一下全部出来
                return
            }
            // console.log(this.hasscroll);
            const range = 200;
            const abs = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
            if(abs <= range) {
                this.handlescroll()
            }
        },
       async handlescroll(){  
        if(this.hasscroll){    // 写错位置  超过就直接不给数据
                return
            }  
           this.isLoding = true
            this.page ++
            const resp = await this.fetchData();
            // console.log(this.data,resp);
            this.data.total = resp.total    // 每一次获取的total resp都是不一样的值
            this.data.rows = this.data.rows.concat(resp.rows)
            // console.log(this.data,resp);
            this.isLoding = false
        },
       async handsubmit(formdata,back){
            console.log(formdata);
            const resp =  await postcomment({    //  获取响应数据
                blogId:this.$route.params.Id,
                ...formdata
            })
            // console.log(resp);
            this.data.rows.unshift(resp);
            this.data.total ++;
            back("ok了，那边可以开始行动了")  // 调用之后 dataform就开始继续运行
        }
    },
    updated(){
        // console.log(this.data);
    }
}
</script>

<style lang="less" scoped>
.blog-comment-container{
    margin: 30px 0;
}

</style>