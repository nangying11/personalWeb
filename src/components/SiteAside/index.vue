<template>
  <div class="SiteAside">
  <template v-if="data">                       <!-- 仓库设置的是空数组 所以总是返回unfined 下面的图片就总是返回image是unfined -->
      <Avatar :img="data.avatar"/>      
      <p class="texthead">
          {{ data.siteTitle }}
      </p>
  </template>
    <Menua />
    <Contact v-if="data"/>
    <p class="textlabal" v-if="data">
        {{ data.icp }}
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import '@/style/global.less';
import Avatar from '@/components/Avatar/';
import Contact from './Contact/index.vue';
import Menua from './Menu/index.vue';
import {titleController} from '@/utils/'
export default {
 components:{
    Avatar,
    Contact,
    Menua
 },
 computed:mapState("setting",["data"]),
}
</script>

<style scoped lang="less">
@import '~@/style/var.less';
.SiteAside{
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avator-head{
        margin: 0 auto;
    }
    .textlabal{
        text-align: center;
        font-size: 12px;
    }
    .texthead{
        text-align: center;
        font-size: 1.2em;
        color: #fff;
    }
}
</style>