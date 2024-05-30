import imgfound from '@/assets/loading.svg'
import style from './loding.module.less'

function getLoadingImage(el){
    return el.querySelector("img[data-role='loading']")
}

function creationfound() {
    const img = document.createElement('img');
    img.dataset.role = 'loading';         // 为了好获取加载图片
    img.src = imgfound;
    img.className = style.loading
    return img
}
export default function(el,bingding){
    // console.log(el,bingding);
    const curImg = getLoadingImage(el)
    // console.log(curImg);
    if(bingding.value){
        if(!curImg){   // 如果没有加载的图片就创建  isloading 会增加一个img isloding变成false还会触发一次
            const ele = creationfound()
            el.appendChild(ele);
        }
    }else{
        if(curImg){  // 如果有加载的图片就删除
            curImg.remove()
        }
    }
}