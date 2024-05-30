import response from './response';

export  async function postmessage(commentInfo){
    return response.post("/api/message",commentInfo)
}

export  async function getmessage(blogid,page=1,limit=10){
    return response.get("/api/message",{
        params:{
            blogid,
            page,
            limit
        }
    })
}