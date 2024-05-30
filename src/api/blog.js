
import response from './response.js'
// console.log(response);
export async function getBlogs(page = 1,limit = 10,categoryid = -1) {
   return await response.get("/api/blog",{
    params:{
        page,
        limit,
        categoryid,
    }
   })
}

// 分类
export async function getaxiousdata() {
   return await response.get("/api/blogtype")
}


// 获取单个博客
export async function getBlog(id) {
   return await response.get(`/api/blog/${id}`)
}


// 提交评论
export async function postcomment(commentInfo) {
   return await response.post("/api/comment",commentInfo)
}

// 获取评论
export async function getcomment(blogid, page = 1, limit = 10){
   return await response.get("/api/comment", {
      params: {
        blogid,
        page,
        limit,
      },
    });
}