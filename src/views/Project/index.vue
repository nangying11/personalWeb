<template>
  <div class="project-container" ref="projectcontainer" v-loding="loading">
    <div class="project-item" v-for="item in data" :key="item.id">
      <a 
      :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`" 
      :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" src="" alt="" v-lazy="item.thumb">
      </a>
      <div class="info">
        <h2>
          <a 
          :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
          :target="item.url ? '_blank' : '_self'"
          >{{ item.name }}</a>
        </h2>
        <a 
        class="github"
        :href="item.github"
        target="_blank"
        v-if="item.github"
        >github</a>
        <p v-for="(item,i ) in item.description" :key="i">{{ item }}</p>
      </div>
    </div>
    <empty v-if="data.length == 0 && !loading" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import mainScroll from '@/mixins/mainScroll.js'
import empty from '@/components/Empty/'
export default {
  components:{
    empty
  },
  computed:mapState("project",["loading","data"]),
  mixins:[mainScroll("projectcontainer")],
  created(){
    this.$store.dispatch("project/disposegetdata")
    // console.log(this.data);
  }
}
</script>
<style lang="less" scoped>
@import "~@/style/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>