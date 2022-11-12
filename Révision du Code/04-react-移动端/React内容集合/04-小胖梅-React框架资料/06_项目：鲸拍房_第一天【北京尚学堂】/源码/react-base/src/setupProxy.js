const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    //访问穷游：https://www.qyer.com/qcross/home/index/recommendbiz?page=1
    //配置跨域后：/api/qcross/home/index/recommendbiz?page=1
  app.use( "/api",createProxyMiddleware({
      target: "https://www.qyer.com",//target访问域名--跨域
      changeOrigin: true,//是佛允许跨域  true允许
    })
  )


  //继续配置域名
  app.use( "/foo",createProxyMiddleware({
    target: "https://www.baidu.com",//target访问域名--跨域
    changeOrigin: true,//是佛允许跨域  true允许
  })
  
)

};
