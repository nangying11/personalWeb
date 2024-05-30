
<template>
    <ul id="Contact-container">
        <li>
       
        <a target="_blank" :href="data.github">   <!-- target="_blank" 在新的窗口打开 -->
            <div class="icon">
                <Icon type="github" />
            </div>
            <span>{{ data.githubName }}</span>
        </a>
    </li>
    <li>
        <a :href="`mailto:${data.mail}`">
            <div class="icon">
                <Icon type="mail" />
            </div>
            <span>{{ data.mail}}</span>
        </a>
    </li>
    <li>
        <a :href="
        `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        ">
            <div class="icon">
                <Icon type="qq" />
            </div>
            <span>{{ data.qq }}</span>
        </a>
        <div class="pop">
            <img :src="data.qqQrCode"  alt="">
        </div>
    </li>
    <li>
        <a href="">
            <div class="icon weixin" >
                <Icon type="weixin" />
            </div>
            <span>{{data.weixin}}</span>
        </a>
        <div class="pop">
            <img :src="data.weixinQrCode" alt="">
        </div>
    </li>
   </ul>

</template>

<script>
import {mapState} from 'vuex';
import Icon from '@/components/Icon/';
import weixinqq from '@/img/01.jpg'
export default {   
    data() {
        return{
            weixinqq,
        }
    },
    components:{
        Icon,
    },
    computed: mapState("setting",["data"])
    ,
}
</script>

<style lang="less" scoped>

@import '~@/style/mixin.less';
@import '~@/style/var.less';
#Contact-container{
    padding: 20px;
     margin: 0;
     color: @gray;
    li{
        height: 30px;
        line-height: 30px;
        position: relative;
        padding: 5px 0;
        &:hover{
            .pop{
            transform:scaleY(1);
        }
        }
    }
    a{
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
    .pop{
        position: absolute;
        left: 0;
        bottom: 35px;
        padding: 10px 15px;
        border-radius: 5px;
        background: #fff;
        transform: scaleY(0);
        transform-origin: center bottom;
        transition: 0.3s;
        img{
            width:150px;
            height: 150px;
        }
        &::after{
            content:"";
            background: rgb(255, 255, 255);
            position: absolute;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            height: 8px;
            width: 8px;
            bottom: -4px;
        }
    }


   
}
</style>