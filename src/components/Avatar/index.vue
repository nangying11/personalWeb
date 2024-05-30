<template>

    <img 
    class="avator-head"
    :src="img" 
    :style="{
        width:size + 'px',
        height:size + 'px'
    }"
    
    >
 
</template>

<script>

export default {
    props:{
        img:{
            type:String,
            required: true
        },
        size:{
            type:Number,
            // required: true,
            default:150
        }
    }
}
</script>

<style scoped>


/* scoped 带有作用域的功能  */
.avator-head{
    border-radius: 50%;
    display: block;
    object-fit: cover;
}
</style>