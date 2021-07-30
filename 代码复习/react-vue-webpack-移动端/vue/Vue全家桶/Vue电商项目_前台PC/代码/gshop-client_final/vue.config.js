
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211", // 目标服务器
        // pathRewrite: {
        //   "^/api": "",
        // },
      },
    },
  },
};
