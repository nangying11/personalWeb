<template>
  <ul class="RightList-container">
      <li class="article" v-for="(item ,i) in list" :key="i">
        <span @click="handleswitchover(item)" :class="{active: item.isSelect}"> {{ item.name}}</span>
        <span 
        v-if="item.aside" 
        class="aside" 
        @click="handleswitchover(item)"
        :class="{active:item.isSelect}"
        >{{ item.aside }}</span>
       <!-- {{ item.children }} -->
        <RightLista :list="item.children" @select="handleswitchover"/>
    </li>

    
  </ul>
</template>

<script>
export default {
    name:"RightLista",
    props:{
       list:{
        type:Array,
        default: () => []
       },
    },
    methods:{
        handleswitchover(item){
             if(!item.isSelect){
                this.$emit("select",item)
             }
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.RightList-container{
    list-style-type: none;
    padding: 0;
    .article{
        
        min-width: 40px;
        line-height: 40px;
        cursor: pointer;
        .RightList-container{
            margin-left: 1em;
        }
    }
    .active{
        color: @warn;
        font-weight: bold;
    }
}
</style>