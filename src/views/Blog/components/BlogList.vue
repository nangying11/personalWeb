<template>  <!-- blog 主页左边 -->
  <div class="blogList-container" ref="container" v-loding="isLoding" >
    <!-- <h1>BlogCategory</h1> -->
    <ul class="blogul">
        <li class="blogli" v-for="item in data.rows" :key="item.id">
          <div class="thumb" v-if="item.thumb">
            <RouterLink :to="{
              name:'Blogdetail',
              params:{
                Id:item.id
              }
            }">
                <img v-lazy="item.thumb" :alt="item.title" :title="item.title" >
            </RouterLink>
          </div>
          <div class="essaytext">
            <RouterLink :to="{
              name:'Blogdetail',
              params:{
                Id:item.id
              }
            }"><h2>{{ item.title }}</h2></RouterLink>
            <div class="descridata">
                日期：<span>{{ formatDate(item.createDate) }}</span> 
                浏览：<span>{{ item.scanNumber }}</span>
                评论：<span>{{ item.commentNumber }}</span>
                <a>{{ item.category.name }}</a>
            </div>
            <div class="description">{{ item.description }}</div>
          </div>
        </li>
    </ul> 
   
   <pager 
   v-if="data.total"
   :current="routeInfo.page"
   :total="data.total"
   :limit="routeInfo.limit"
   @PagerChange="handpage"
   />

   <Empty v-if="data.rows.length === 0 && !isLoding"/>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchDate.js";
import pager from "@/components/Pager"
import { getBlogs} from "@/api/blog.js";
import {formatDate} from "@/utils";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty/"
export default {
    mixins:[fetchData({total:0,rows:[]}),mainScroll("container")],
    methods:{
      formatDate,
      async fetchData() {
          // console.log(this.fetchData);
         
          return await getBlogs(
            this.routeInfo.page,
            this.routeInfo.limit,
            this.routeInfo.categoryId,
          );
      },
      handpage(newpag){   // 让页码跳转 并且赋值给路由
        const query ={
          page: newpag,
          limit: this.routeInfo.limit,
        }
        if(this.routeInfo.category == -1){
          this.$router.push({ // 命名路由跳转
            name:"Blog",
            query
          })
          // 没有分类
        }else {
          // 有分类
      
          this.$router.push({
            name:"Category",
            query,
            params:{
              categoryId:this.routeInfo.categoryId,
            }
          })
        }
      },
    },
    components:{
      pager,
      Empty
    },
    computed:{
      routeInfo(){   // 没有watch的时候都是用默认值
        const categoryId = +this.$route.params.categoryId ||-1
        const page = +this.$route.query.page || 1
        const limit = +this.$route.query.limit || 10
        return {
          categoryId,
          page,
          limit
        }
      }
    },
    watch:{
      async $route(){
        this.isLoding = true;
        this.$refs.container.scrollTop = 0;
       this.data = await getBlogs();
       this.isLoding = false;
      }
    },
    updated(){
      // console.log(this.data);
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.blogList-container{
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  li{
    display: flex;
    padding: 15px 0;
    border-bottom:1px solid @lightWords ;
    .thumb{
     
      flex: 0 0 auto;
      margin-right: 15px;
      img{
         max-width: 200px;
      }
      
    }
    .essaytext{
      flex: 1 1 auto;
      .descridata{
        font-size: 13px;
        color: @lightWords;
        span{
            margin-right: 10px;
        }
      }
      .description{
        margin: 15px 0;
      }
      h2{
        margin: 0;
      }
    }
  }
}

</style>