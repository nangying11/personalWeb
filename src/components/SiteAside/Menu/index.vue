<template>
  <nav class="menu-container">
    <RouterLink :exact="p.exact" v-for="p in item" :key="p.link" :to="{name: p.name}"> <!-- :class="{selected: pathChoice(p)}" -->
        <div class="icon">
            <icon :type="p.icon"/>
        </div>
        <span>{{ p.title }}</span>
    </RouterLink>  
  </nav>
</template>

<script>
import Icon from '@/components/Icon/'
export default {
    components:{
        Icon
    },
    data(){
        return {
            item:[
                {
                    name: "Home",
                    title: "首页",
                    icon:"home",
                    exact:true   // 是否精准匹配
                },
                {
                    name: "Blog",
                    title: "文章",
                    icon:"blog",
                    exact: false, // 只要当前路径以link开头，当前菜单就是选中的
                },
                {
                    name: "About",
                    title: "关于我",
                    icon:"about",
                    exact:true
                },
                {
                    name: "Project",
                    title: "项目&效果",
                    icon:"code",
                    exact:true
                },
                {
                    name: "Message",
                    title: "消息",
                    icon:"chat",
                    exact:true
                },
            ]
        }
    },
    // methods:{
    //     pathChoice(item){
    //         var link = item.link.toLowerCase();                  // a 标签的上面的link
    //         var curPathname = location.pathname.toLowerCase();  // 获取浏览器的link
    //         if(item.startWith){
    //             return curPathname.startsWith(link)
    //         }else{
    //             return curPathname  == link;
    //         }

    //     }
    // }
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.menu-container{
    color: @gray;
    margin: 24px 0;
    a{  
        &.selected{
            background: darken(@words,8%);
        }
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 50px;
        &:hover{
            color: #fff;
        }
        }
    .icon{
        // font-size: 26px;
          width: 24px;
    }
}

</style>