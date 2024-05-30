<template>

    <Layout>
      <BlogList/>
      <template #right>
        <BlogCategory/>
      </template>
    </Layout>
</template>

<script>
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
import Layout from "@/components/Layout"

export default {
  components:{
    BlogCategory,
    BlogList,
    Layout,
}
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.blog-container{
   

}
</style>