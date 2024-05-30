

module.exports = {
    devServer: {
      proxy: {
        // '/bcd': {
        //   target: "https://bcd.developer.mozilla.org",
        // },
        "/api": {
            // target: "http://test.my-site.com",
            target : 'http://127.0.0.1:7001'
          },
      }
    },
    configureWebpack: require("./webpack.config") ,
  }