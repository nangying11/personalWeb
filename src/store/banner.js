import {getaxiosdata} from '@/api/banner.js'

export default{
    namespaced:true,
    state(){
       return {
        loading:false,
        data:[],
       }
    },
    mutations:{
        getloading(state,payload) {
            state.loading = payload
        },
        getdata(state,payload) {
            state.data = payload
        }
    },
    actions:{
       async disposegetloading(act){
        
        // 如果已经有数据就不用重新获取数据
        if(act.state.data.length){  
            return
        }
           act.commit("getloading",true);
           const resp = await getaxiosdata();
        //    console.log(resp);
           act.commit("getdata",resp);
           act.commit("getloading",false)
        }
    }
}

//  每次重新进去首页图片都要加载  存放在仓库