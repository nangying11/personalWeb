<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="left">
         <SiteAside />
      </div>
    </template>
    <template v-slot：default>
      <RouterView />
    </template>
  </Layout>
  <ToTop/>
  <!-- <AsyncComponent/> -->
  </div>
</template>

<script>
// const AsyncComponent = () =>{
//   return new Promise((resolve)=>{
//     setTimeout(async () => {
//       const Mycomp = await import('./Mycomp.vue')
//       resolve(Mycomp)
//     }, 3000);
//   })
// }


import Layout from '@/components/Layout/';
import SiteAside from '@/components/SiteAside/';
import ToTop from '@/components/ToTop/'
export default{
  components:{
    Layout,
    SiteAside,
    ToTop,
    // AsyncComponent
  }
}
</script>



<style scoped lang="less">
@import '~@/style/mixin.less';
.app-container{
  .fill-container(fixed);
  
  .left{
    width: 250px;
    height: 100%;
  }
}
</style>