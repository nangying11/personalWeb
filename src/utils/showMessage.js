import getComponentRootDom from './getComponentRootDom.js';
import style from './showMessage.module.less';
import icon from '@/components/Icon'

/**
 * 弹出消息
 * @param {String} content    消息内容 
 * @param {String} type   消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container   容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */
export default function (option = {}) {
    const content = option.content || '';
    const type = option.type || 'info';
    const duration = option.duration || 2000;
    const container = option.container || document.body;

    const div = document.createElement('div');
    div.className = style.message;
    const icondom  = getComponentRootDom(icon,{
    type,
    })

    div.classList.add(style[`message-${type}`]);
    div.innerHTML = `<div class="${style.icon}">${icondom.outerHTML}</div> <span>${content}</span>`;
    
   console.log(getComputedStyle(container).position);  // 返回的已经改动过的容器
    // 容器的position是否改动过
    if(option.container){

        if(getComputedStyle(container).position == "static"){
            container.style.position = "relative";
            
        }
    }

    container.appendChild(div);

    // 浏览器强行渲染
    div.clientHeight;    // 导致reflow重新布局  repaint 重绘


    // 回复正常的状态
    div.style.opacity = 1;
    div.style.transform =  `translate(-50%,-50%)`;


    
    setTimeout(()=>{  //  删除弹窗
        div.style.opacity = 0;
        div.style.transform =  `translate(-50%,-50%) translateY(-25px)`;
        // transitionend 事件发生时被触发，表示目标节点的 CSS transition 已经完成
        div.addEventListener("transitionend",function(){
            div.remove();
            option.callback && option.callback();
        },{once:true})    // 这个once  只会执行第一次
        
    },duration)
}