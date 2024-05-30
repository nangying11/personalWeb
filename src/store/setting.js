
import {getsetting} from '../api/setting.js'
import {titleController} from '@/utils/'
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
       async disposegetdata(ctx){
            ctx.commit("getloading",true);
            const resp = await getsetting();
            ctx.commit("getdata",resp)
            ctx.commit("getloading",false)
            // console.log(resp);
            if(resp.favicon){
                // <link rel="shortcut icon " type="images/x-icon" href="./favicon.ico"></link>
              let link =   document.querySelector("link[rel='shortcut icon']");
              if(link){
                return
              }
              link = document.createElement("link")
              link.rel = "shortcut icon"
              link.type = "images/x-icon"
              link.href = resp.favicon;
              document.querySelector('head').appendChild(link)

            }
            if(resp.siteTitle){
                titleController.getWebnetTitle(resp.siteTitle)
            }
        }
    }
}


// 侧边的信息用与缓存 放置仓库