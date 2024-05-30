const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
if(process.env.NODE_ENV === "production") {
    module.exports = {
        // 分两次打包 会出现错误  无需管
        devtool: "none",   // balbel 是给低版本的浏览器使用 但是会增加代码 分两块给新旧浏览 这个是删除多余的js
        plugins: [new BundleAnalyzerPlugin()],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
        }
    }
   
} else{
    module.exports = {}
}


//  打包优化   