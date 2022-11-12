const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 修改自定义主题色
              // 全局主色调
              // https://ant.design/docs/react/customize-theme-cn
              "@primary-color": "#1DA57A",
              "@error-color": "#1DA57A",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
