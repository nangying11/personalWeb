
// 头部进度条 装饰用的
import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue"
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});


// 延迟
function delay(duration){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}


// 封装头部进度条   
function getPageComponent(pageCompResolver){
    return async () => {
        start();  // 进度条开始
        if(process.env.NODE_ENV === "development"){   // 如果是开发模式
            await delay(200)
        }
        const comp = await pageCompResolver();    // 调用函数的时候才会运行
        // console.log(comp);   //  最后还是页面
        done() // 进度条结束
        return comp
    }

}




// 路由懒加载  用时候才加载整个组件   () => import(/* webpackChunkName: "home" */ "@/views/Home/index.vue")

export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home/index.vue")),
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import(/* webpackChunkName: "about" */ "@/views/About/index.vue")),
    meta: { title: "关于我" },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog/index.vue")),
    meta: { title: "文章" },
  },
  {
    name: "Category",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Blog/index.vue")),
  },
  {
    name: "Blogdetail",
    path: "/article/:Id",
    component: getPageComponent(() => import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail.vue")),
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message/index.vue")),
    meta: { title: "消息" },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project/index.vue")),
    meta: { title: "项目&效果" },
  },
  {
    name:"NotFound",
    path:"*",
    component: NotFound
  }
];
