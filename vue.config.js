const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //开启代理服务器(方式一)
  // devServer:{
  //   proxy: 'http://localhost:5000'
  // }
  //开启代理服务器(方式二)
  devServer:{
    proxy:{
      '/rws':{
        target:'http://localhost:5000',
        pathRewrite:{'^/rws':''},
        changeOrigin:false
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        changeOrigin:true
      },
    },
    // before: require('./mock/index.js'),
  }
})
