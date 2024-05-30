import response from './response.js'


export async function getsetting(){
  return await response.get("/api/setting")
} 