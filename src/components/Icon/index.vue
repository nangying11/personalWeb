<template>
  <i class="iconfont" :class="switcha"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};

export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        switcha() {
            // console.log(classMap[this.type]);
            // console.log(classMap["qq"]);
            return classMap[this.type]  // es6
        }
    }
    
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";   /** 导入库样式 **/
.iconfont{
    color: inherit;     /**字颜色将继承其父元素的文字颜色。 **/
    font-size: inherit;
}
</style>