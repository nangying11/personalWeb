<template>
    <div >
      <Pager :current="current" :total="total" @PagerChange="HandPagerChange($event)" />
    </div>
  </template>
  
  <script>
  import Pager from './index';
  export default {
      data(){
          return {
              current:1,
              total:852
          }
      },
      components:{
          Pager
      },
      methods:{
          HandPagerChange(newpage){
              console.log('hv',newpage);   // 接收到了数据
              this.current = newpage;    // 渲染到页面
          }
      }
  }
  </script>
  
  
  
  <style scoped>
  
  </style>