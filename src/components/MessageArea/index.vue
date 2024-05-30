<template>
  <div class="messageArea-container">
    <DataFrom v-on="$listeners"/>    <!-- 把数据原本不动的传给父属性 blogcomment-->

    <h3>
        {{ title }}
        <span>({{ subnumber }})</span>
    </h3>
    <DataList :list="list" />
    <div class="loding" v-loding="transIsLoding"></div>
  </div>
</template>

<script>
import DataFrom from "./DataForm";
import DataList from "./DataList.vue";
export default {
    components:{
        DataFrom,
        DataList
    },
    props:{
        title:{
            type:String
        },
        list:{
            type:Array,
            default:() => []
        },
        subnumber:{
            type:String
        },
        transIsLoding:{
            type:Boolean,
            default:false

        }
    }
}
</script>

<style lang="less" scoped>
.loding{
    position: relative;    
}

</style>