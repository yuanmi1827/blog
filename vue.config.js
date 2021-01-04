const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
      target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('components',resolve('./src/components'))
    .set('common',resolve('./src/common'))
    .set('api',resolve('./src/api'))
      //set第一个参数：设置的别名，第二个参数：设置的路径
  }
}


