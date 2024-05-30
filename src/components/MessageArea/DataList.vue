<template>
   
  <ul class="datalist-container">
    <li class="datalist" v-for="item in list" :key="item.id">
        <div class="portrait">
            <Avatar :img="item.avatar" :size="44"/>
        </div>
      <div class="data">
         <span class="netname">{{ item.nickname }}</span>
         <span class="time">{{ formatDate(item.createDate,true) }}</span>
         <div class="text">{{ item.content }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar/";
import formatDate from "@/utils/formatDate.js"
export default {
    components:{
        Avatar
    },
    props:{
        list:{
            type:Array,
            default:() => []
        }
    },
    methods:{
        formatDate
    },
    updated(){
        // console.log(this.list);
    }

}
</script>

<style lang="less" scope>
@import "~@/style/var.less";
.datalist-container{

    li{
        display: flex;
        margin-bottom: 15px;
        .portrait{
            margin-right: 15px;
        }
       .data{
         position: relative;
         flex: 1 1 auto;
         .netname{
            color: @success;
         }
        .time{
            position: absolute;
            right: 0;
            color: @gray;
            font-size: 12px;
        }
        .text{
            margin-top: 10px;
            font-size: 14px;
        }
       }
    }
}
</style>