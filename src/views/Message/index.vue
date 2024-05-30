<template>
  <div class="message-container" ref="container" >
    <MessageArea 
    :title="`留言板`" 
    :subnumber="`${data.total}`"
    :list="data.rows"
    :transIsLoding="isLoding"
    @submit="handsubmit"
    />
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea/'
import fetchData from '@/mixins/fetchDate.js'
import * as api from '@/api/message.js'
import mainScroll from '@/mixins/mainScroll.js'
export default {
  data(){
       return {
        page:1,
        limit:10,
       }

    },
  mixins:[fetchData({total:0,rows:[]}),mainScroll("container")],
  components:{
    MessageArea
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
   async fetchData(){
      return await api.getmessage(this.$route.params.Id,this.page,this.limit)
    },
    async handsubmit(formdata,back){
      const resp =  await api.postmessage({    //  获取响应数据
          blogId:this.$route.params.Id,
          ...formdata
      })
      // console.log(resp);
      this.data.rows.unshift(resp);
      this.data.total ++;
      back("ok了，那边可以开始行动了")  // 调用之后 dataform就开始继续运行
    },
    async handlescroll(){  
        if(this.hasscroll){    // 写错位置  超过就直接不给数据
                return
            }  
           this.isLoding = true
            this.page ++
            const resp = await this.fetchData();
            this.data.total = resp.total    // 每一次获取的total resp都是不一样的值
            this.data.rows = this.data.rows.concat(resp.rows)
            this.isLoding = false
    },
    handlemore(dom){
      // console.log(dom);
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
  },
  updated(){
    // console.log(this.data);
  }
}
</script>

<style lang="less" scoped>
.message-container{
    width: 100%;
    height: 100%;
    // position: relative;
    overflow-y: scroll;
    padding: 25px 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  .messageArea-container{
    width: 700px;
    margin: 0 auto;
  }
</style>