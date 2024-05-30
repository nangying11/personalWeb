<template>
 <form ref="form" id="data-form-container" @submit.prevent="handformsubmit">  <!--获取提交并且取消默认行为-->
    <div class="form-item">
       <div class="input-area">
        <input
         type="text"
         maxlength="10"
         v-model="formdata.nickname"
         placeholder="用户名称"
         >
        <div class="tip">{{ formdata.nickname.length }}/10</div>
       </div>
       <div class="error" > {{ error.nickname }} </div>
    </div>

    <div class="form-item">
       <div class="text-area">
        <textarea
         type="text"
         maxlength="300"
         v-model="formdata.content"
         placeholder="输入内容"
         ></textarea>
        <div class="tip">{{ formdata.content.length }}/300</div>
       </div>
       <div class="error" >{{ error.content }}</div>
    </div>

    <div class="form-item">
        <div class="buttom-area">
            <button :disabled="isdisable">提交</button>
        </div>
    </div>
 </form>
</template>

<script>
export default {
    data(){
        return {
            formdata:{
                nickname:'',
                content:''
             },
             error:{
                nickname:'',
                content:''
             },
             isdisable:false
        }
    },
    methods:{
        handformsubmit(){
            this.error.nickname = this.formdata.nickname  ? "" : "请填写用户名称"
            this.error.content = this.formdata.content  ? "" : "请输入内容"
            if(this.error.nickname || this.error.content){
                // console.log(this.error.nickname || this.error.content);
                // 两个中有值就会进来  有值显示true
                return
            }
            this.isdisable = true
            this.$emit("submit",this.formdata,(successMsg)=>{   // 第三个参数是回调函数  可以让emit执行到一半执行其他的
               // 提示弹框
                this.$showMessage({
                    content:successMsg,
                    type:"success",
                    duration:1000,
                    container:this.$refs.form,
                    callback:()=>{
                        this.isdisable = false;
                        this.formdata.nickname = "";
                        this.formdata.content = "";
                    }

                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
#data-form-container{
    margin: 20px 0;
    overflow: hidden;

    .form-item{
        margin-bottom: 10px;
        .error{
            height: 20px;
            line-height: 20px;
            color: @danger;
            margin-top: 6px;
            font-size: 14px;
        }
        .input-area{
            position: relative;
            width: 50%;
        }
    }
    .text-area{
        position: relative;
        textarea{
            height: 120px;
            resize:none;
            padding: 8px 15px;
        }
    }
    .tip{
        font-size: 12px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
    }
    
    input,textarea{
        display: block;    // 针对textarea
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px dashed  @gray;
        outline: none;
        padding: 0 20px;
      
    }
    button{
        width: 100px;
        height: 35px;
        background: @primary;
        border: 1px solid #fff;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        &:hover{
            background:darken(@primary, 10%);
        }
        &:disabled{
            background:lighten(@primary, 10%);
            cursor: not-allowed;
        }
    }

    
}

</style>