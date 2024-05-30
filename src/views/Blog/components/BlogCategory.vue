<template> <!-- blog 主页右边 -->
  <div ref="container" class="BlogCategory-container" v-loding="isLoding">
   <h2>文章分类</h2>
   <RightList :list="list" @select="handleclass"/>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchDate.js";
import { getaxiousdata} from "@/api/blog.js";
export default {
  mixins:[fetchData([])],
   components:{
     RightList
   },
  computed:{   // 获取浏览器数据
    routeInfo(){
    const categoryId = +this.$route.params.categoryId ||-1
    const limit = +this.$route.query.limit || 10;
    return {
      categoryId,
      limit
    }
    
   },
   list(){   // 整理数据 添加数据  
   
    const articleCountsum =  this.data.reduce((a,b)=>
      a + b.articleCount, 0
    )
    const newdata = [
      {id:-1,name:"全部",articleCount:articleCountsum},
      ...this.data
    ]
    // console.log(newdata);
    return newdata.map((it)=>({
      ...it,
      isSelect: it.id === this.routeInfo.categoryId,
      aside:`${it.articleCount}篇`
    }))
   
   }
  
  },
  created(){ 
   
    
  },
  methods:{
    async fetchData(){
      return await getaxiousdata();
    },
    handleclass(item){   // 传给浏览器
      
      const query ={
        page:1,
        limit:this.routeInfo.limit
      }
      if(this.list.id == -1){
        this.$router.push({
          name:"Category",
          query
        })
      }else {
        this.$router.push({
          name:"Category",
          query,
          params:{
            categoryId:item.id
          }
        })
      }
      // console.log(item);
      // console.log(this.list);
    },
  },
  
  
}
</script>

<style lang="less" scope>
@import '~@/style/var.less';
.BlogCategory-container{
     /* width: 300px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    height: 100%;
    overflow-y: auto; */
    width: 300px;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    position: relative;
    height: 100%;
   
    
    li{
      font-size: 14px;
      height: 35px;
      cursor: pointer;
     
      span{
        font-size: 12px;
        margin-left: 10px;
        color: @gray;
      }
      &.active{
        color: @warn;
      }
    }
}
</style>