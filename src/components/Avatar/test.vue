<template>
    <div id="app">
      <!-- <Avatar 
      img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0d02e3c2-aff0-42c6-9097-6323eb18f480%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704900635&t=039c3c6d450a9509167071604706521d"
      />
      <Avatar 
      img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw%2F0d02e3c2-aff0-42c6-9097-6323eb18f480%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704900635&t=039c3c6d450a9509167071604706521d"
      :size="50"
      /> -->
      <!-- <h1>{{ getfullname() }}</h1>
      <h1>{{ getfullname() }}</h1>
      <h1 @click="rename('出去','oo')">{{ getfullname() }}</h1> -->
      <Icon type="home"/>
    </div>
  </template>
  
  <script>
  import Avatar from './components/Avatar/index.vue';
  import Icon from './components/icon';
  
  export default{
    data(){
      return{
        firstname:'进',
        lastname:'来',
      }
    },
    components:{
      Avatar,
      Icon
    },
    computed:{
      fullname() {
        console.log('进来了');
        return this.firstname + ' ' + this.lastname
      },
      newfullname:{
        get(){
  
        },
        set(val){
  
        }
      }
    },
    methods:{
      getfullname() {
        console.log("menthod");
        return this.firstname + ' ' + this.lastname
      },
      rename(lase,first){
        this.firstname =first;
        this.lastname = lase;
      }
    }
  }
  </script>
  <style scoped>
  .iconfont {
    color: blue;
  }
  </style>