import eventBus from "@/eventBus";
import {debounce} from "@/utils/"
import defaultimag from "@/assets/default.gif"


let imgs = []

function switchimg(img){
    img.dom.src = defaultimag

    const clientHeight = document.documentElement.clientHeight;
    const resp = img.dom.getBoundingClientRect()
    const height = resp.height || 150     // 给个固定高度
    // console.log(resp.top,resp);
    

    
    // 以每个dom的可视范围
    if(resp.top >= -height && resp.top <= clientHeight){    //  这个盒子在这个可视窗口的什么位置 负数盒子的高度 代表只显示一半

        // 在视口范围内
        const tempImg = new Image();
        tempImg.onload = function() {
          // 当真实图片加载完成之后
          img.dom.src = img.src;
        };
        tempImg.src = img.src;    // 触发加载  相当于写了一个load函数 


        // img.dom.src = img.src

        // 图片已经加载出来了 将数组存的dom删除  后续无需处理
        imgs = imgs.filter((i)=> i !== img)
    }
}

function handledcroll(){
    for(const img of imgs){
        switchimg(img)
    }
}
eventBus.$on("mainscroll",debounce(handledcroll,50))

export default{
    inserted(el,bingding){
        const img = {
            dom:el,
            src:bingding.value
        }
        imgs.push(img)
        // 只要有img图片加载出来了久直接处理 
        switchimg(img) 
    },
    unbind(el){
        imgs = imgs.filter((i)=> i.dom !== el)   // 不等于的时候才要保存处理
    }
}