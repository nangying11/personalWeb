<template>
  <Layout>
    <!-- {{ }} -->
    <div ref="mainscrollcontainer" class="detail-main-container" v-loding="isLoding">
      <BlogDetail :blog="data" v-if="data"></BlogDetail>
      <BlogComment v-if="!isLoding"/>
     
    </div>
    <template #right>
      <div class="right-container" v-loding="isLoding">
        <BlogTOC :TOC="data.toc" v-if="data"></BlogTOC>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from '@/mixins/fetchDate.js';
import { getBlog } from '@/api/blog.js';
import Layout from '@/components/Layout/';
import BlogTOC from './components/BlogTOC.vue';
import BlogDetail from './components/BlogDetail.vue';
import BlogComment from './components/BlogComment.vue';
import mainScroll from '@/mixins/mainScroll.js';
import { titleController } from '@/utils/';
export default {
  mixins:[fetchData(null),mainScroll("mainscrollcontainer")],
  components:{
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment
  },
  methods:{
    async fetchData(){
      let resp =  await getBlog(this.$router.id)
      if(!resp){
        this.$router.push("NotFound")
        return
      }
      titleController.getRouteTitle(resp.title)
      return resp
    },
  },
  updated(){
    const hash = location.hash;
    location.hash = ''
    setTimeout(() => {
      location.hash = hash
    }, 50);
  }
  

}
</script>

<style lang="less" scoped>
.detail-main-container{
      height: 100%;
      overflow-y: scroll;
      box-sizing: border-box;
      position: relative;
      width: 100%;
      overflow-x: hidden;
      padding: 20px;
      scroll-behavior: smooth;
}
.right-container{
    width: 300px;
    height: 100%;
    overflow-y: scroll;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
}

</style>