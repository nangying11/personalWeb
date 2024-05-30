import Vue from 'vue'
import App from './App.vue'
import './style/global.less'
import router from './router/index.js'
import showMessage from "./utils/showMessage";     // 弹出消息
Vue.prototype.$showMessage = showMessage;
// import "./mock";   // 这里发生过引用错误   ！！！ 
import store from './store'
store.dispatch("setting/disposegetdata")

import './api/banner.js'
import './eventBus.js'    // 事件总线

// 加载圆圈图片
import loding from './directives/loding.js'
import lazy from './directives/lazy.js';
Vue.directive('loding',loding)
Vue.directive('lazy',lazy)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


// import {getsetting} from './api/setting.js'



// getsetting().then((a)=>{
//   console.log(a);
// })



// ablog.getBlogs(1,4,5).then((a)=>{
  //   console.log(a);
  // })
  // ablog.getaxiousdata().then((a)=>{
    //   console.log(a);
    // })
    
    // import * as ablog from './api/blog.js'
    // ablog.getcomment().then((it)=>{
    //   console.log(it);
    // })
