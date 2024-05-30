<template>
  <div class="pager-containter" v-if="PageNumber > 1 ">
    <a @click="handclick(1)" :class="{disable: current === 1}">&lt;&lt;</a>
    <a @click="handclick(current-1)" :class="{disable: current === 1}">&lt;&lt;</a>

    <a 
    v-for="(n,i) in numbers" 
    :key="i" 
    :class="{active: n === current}"
    @click="handclick(n)"
    >{{ n }}</a>

    <a @click="handclick(current+1)" :class="{disable: current === PageNumber}">&gt;&gt;</a>
    <a @click="handclick(PageNumber)" :class="{disable: current === PageNumber}">&gt;&gt;</a>
  </div>
</template>

<script>
export default {
    props:{
        current: {
            type:Number,
            default:1,
        },
        total: {
            type:Number,
            default:0
        },
        limit: {
            type:Number,
            default:10
        },
        visibleNumber: {
            type:Number,
            default:10
        }
    },
    computed:{
        PageNumber() {
            return Math.ceil(this.total / this.limit)
        },
        visblemin() {
            let min = this.current - Math.floor(this.limit / 2)
            if(min <= 1) {
                min = 1;
            }
            return min
        },
        visblemax() {
            let max = this.visblemin + this.limit - 1
            if(max > this.PageNumber){
                // this.visblemin = this.PageNumber - this.limit + 1;
                max = this.PageNumber;
            }
            return max;
        },
        numbers() {
            let nums = [];
            for(let i = this.visblemin;i < this.visblemax+1;i ++){
                nums.push(i);
            }
            // console.log(nums);
            return nums
        }
    },
    methods:{
        
        handclick(newpage){
            if(newpage < 1){
                newpage = 1;
            }
            if(newpage > this.PageNumber){
                newpage = this.PageNumber
            }
            if(this.current === newpage){
                return
            }
            this.$emit('PagerChange',newpage)
        }

    }

}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';   // 只能在样式这样写
.pager-containter{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
        color: @primary;
        margin: 0 6px;
        cursor: pointer;
        &.disable{
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active{
            color: @words;
            cursor: pointer;
        }
    }
}
</style>