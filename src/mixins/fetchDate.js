export default function(defaultDataValue = null) {
   return {
    data() {
        return{
            isLoding:true,      // 自己自定义统一 变量名字 控制布尔值
            data:defaultDataValue
        }
    },
    async created() {
        this.data = await this.fetchData();
        this.isLoding = false;
        
    },
   }
}