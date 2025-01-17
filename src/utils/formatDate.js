export default function(timestamp,showtime = false){
    const date = new Date(+timestamp);
    const month = (date.getMonth()+1).toString().padStart(2,"0");
    const day = date.getDate().toString().padStart(2,"0");

    const hours = date.getHours().toString().padStart(2,"0");
    const second = date.getSeconds().toString().padStart(2,"0");
    const minutes = date.getMinutes().toString().padStart(2,"0")
    let str = `${date.getFullYear()}-${month}-${day}`
    
    if(showtime){
        str += ` ${hours}:${minutes}:${second}`
    }
    return str

}