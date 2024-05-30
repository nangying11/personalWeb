import response from './response'

export default async function getproject(){
    return await response.get("/api/project")
}