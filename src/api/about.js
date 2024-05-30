import response from './response.js'

export default async function getabout(){
    return await response.get("/api/about")
}