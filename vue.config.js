const path = require('path');

module.exports = {
  // 访问路径
  publicPath: process.env.VUE_APP_ACCESS_PATH,

  // 构建的目录
  outputDir: "dist",

  // 静态资源目录
  assetsDir: "static",

  // 是否使用esling校验
  lintOnSave: process.env.NODE_ENV !== 'production',

  // 代码是否需要压缩混淆
  productionSourceMap: true,

  // 多页配置
  pages: {
    main: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '标题'
    }
  },

  // 配置服务
  devServer: {
    port: process.env.VUE_APP_PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://127.0.0.1:${process.env.VUE_APP_PORT}/`,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },

};
