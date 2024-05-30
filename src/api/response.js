import axios from "axios"
import showMessage from "../utils/showMessage";


const ins = axios.create();

// 添加请求拦截器 request   添加响应拦截器 response     ！！！！
ins.interceptors.response.use(function(resp){
    // console.log(resp);
    if(resp.data.code !== 0){
        showMessage({
            content: resp.data.msg,
            type: "error",
        })
        return null;
    }
return resp.data.data
})


export default ins

// 封装拦截器 后面每次请求数据都要使用 axios支持Promise API、自动转换JSON数据