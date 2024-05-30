// const listeners = {}
// export default {
//     $on(eventname,handler){
//         if(!listeners[eventname]){
//             listeners[eventname] = new Set()
//         }
//         listeners[eventname].add(handler)
//     },
//     $off(eventname,handler){
//         if(!listeners[eventname]){
//             return
//         }
//         listeners[eventname].delete(handler)
//     },
//     $emit(eventname,...args){
//         if(!listeners[eventname]){
//             return
//         }
//         for(const handler of listeners[eventname]){
//             handler(...args);
//         }
//     }
// }

import Vue from "vue";
const app = new Vue({})
/**
 * 事件名：mainscroll
 * 含义 ：主区域滚动条发生变化就会触发
 * 参数 ：
 *      滚动的dom元素 如果是undefined  则表示dom元素不存在
 * 
 * 
 * 事件名：setmainscroll
 * 含义： 设置主区域的滚动的位置触发
 * 参数：
 *      滚动的dom元素 
 */

Vue.prototype.$bus = app;

export default app