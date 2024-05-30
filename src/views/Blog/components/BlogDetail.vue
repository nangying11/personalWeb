<template>   <!-- blog 单页左边 -->
  <div v-loding="isLoding" class="blogdetail-container">
   <h1>{{ blog.title }}</h1>
   <div class="summarizing">
    <span>日期：{{ formatDate(blog.createDate) }}</span>
    <span>浏览：{{ blog.scanNumber }}</span>
    <a class ="comment" href="#data-form-container">评论：{{ blog.commentNumber }}</a>
    <RouterLink :to="{
        name:'Category',
        params:{
            categoryId:blog.category.id
        }
    }">{{ blog.category.name }}</RouterLink>
    
   </div>
   <!-- {{ blog.htmlContent }} -->
   <div v-html="blog.htmlContent" class="markdown-body"> </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchDate.js';
import { getBlog } from '@/api/blog.js';
import formatDate from '@/utils/formatDate.js'
import "highlight.js/styles/github.css";

export default {
    props:{
        blog:{
            type:Object,
            require:true
        }
    },
    mixins:[fetchData({})],
    methods:{
        formatDate,
        async fetchData() {
            return await getBlog()
        }
    },
    created(){

    }

}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
@import "~@/style/markdown.css";
.blogdetail-container{
    .summarizing{
        color: @gray;

        span {
            margin-right: 10px;
            
        }
        a{
            margin-right: 10px;
            cursor: pointer;
        }
    }
}
</style>