import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import {titleController} from '@/utils/'


if(!window.VueRouter){
    // 没有使用传统的方式引入VueRouter
    Vue.use(VueRouter)
  }


const router = new VueRouter({
    routes,
    mode:"history"
})

router.afterEach((to,from)=>{   // 标签页标题
    // console.log(to.meta);
    if(to.meta){

        titleController.getRouteTitle(to.meta.title)
    }
})

export default router
