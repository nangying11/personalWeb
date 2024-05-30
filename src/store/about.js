import getabout from '@/api/about.js'

export default{
    namespaced:true,
    state(){
        return{
            loading:false,
            data:null
        }
    },
    mutations:{
        getloading(state,payload){
            state.loading = payload;
        },
        getdata(state,payload){
            state.data = payload;
        }
    },
    actions:{
        async disposegetloadinga(ctx){
            ctx.commit("getloading",true);
            const resp = await getabout();
            ctx.commit("getdata",resp)
            ctx.commit("getloading",false)
            // console.log(resp);

        }
    }
}