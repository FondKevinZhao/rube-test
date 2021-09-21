module.exports = {
  devServer: {
    // 服务器代理配置
    proxy: {
      "/api": {
        // 目标服务器地址
        target: "http://localhost:5000",
        // 允许跨域
        changeOrigin: true,
        // 重写请求地址
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
