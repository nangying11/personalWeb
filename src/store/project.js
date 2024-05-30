import getproject from "@/api/project";

export default{   
    namespaced:true,
    state(){
        return{
            data:[],
            loading:false
        }
    },
    mutations:{
        getloading(state,payload){
            state.loading = payload;
        },
        getdata(state,payload){
            state.data = payload
        }
    },
    actions:{
       async disposegetdata(ctx){
            ctx.commit("getloading",true)
            const resp = await getproject()
            ctx.commit("getdata",resp)
            ctx.commit("getloading",false)
            
        }
    }
    
}