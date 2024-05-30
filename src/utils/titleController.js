let RouteTitle=''
let webnetTitle=''

function setTitle(){
    if(!RouteTitle && !webnetTitle){
        document.title = "loading..."
    }else if(RouteTitle && !webnetTitle){
        document.title = RouteTitle
    }else if(!RouteTitle && webnetTitle){
        document.title = webnetTitle
    }else {
        document.title = `${RouteTitle}-${webnetTitle}`
    }
}

export default{
    getRouteTitle(title){
        RouteTitle = title;
        setTitle()
    },
    getWebnetTitle(title){
        // console.log(title);
        webnetTitle = title;
        setTitle()
    }
}


// 设置标签标题