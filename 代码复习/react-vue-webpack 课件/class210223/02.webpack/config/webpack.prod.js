/*  
  webpack配置文件：当你运行webpack，webpack读取配置文件的配置，根据配置来工作
  需要向外暴露配置对象：属性名固定的对象，属性值较灵活
*/
const { resolve } = require("path"); // path是nodejs专门处理路径的模块
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  // webpack配置对象

  // entry: 入口，指示webpack从哪个文件开始打包构建
  entry: "./src/index.js",
  // output: 输出，指示webpack打包后的文件输出到哪里去
  output: {
    // 所有输出的目录：必须是决定路径
    path: resolve(__dirname, "../build"),
    // 输出的文件名
    filename: "js/main.[contenthash:10].js",
    // loader中使用type: asset配置，文件名采用assetModuleFilename规则
    // [hash:10] hash值，唯一的
    // [ext] extension 自动补全之前文件扩展名
    // [query] 参数
    assetModuleFilename: "images/[hash:10][ext][query]",
    clean: true, // 自动删除 path 目录下的所有资源
    publicPath: "/", // 公共路径，将来所有资源路径都会以 / 开头
  },
  // loader: 加载器，帮助webpack识别其他文件类型（非js、json文件类型）
  module: {
    rules: [
      // loader的配置
      {
        test: /\.js$/, // 只检测js文件
        exclude: /node_modules/, // 排除node_modules文件夹
        enforce: "pre", // 提前加载使用，优先执行
        // use: {
        //   // 使用eslint-loader解析
        //   // eslint要想工作，必须在项目根目录定义配置文件
        //   loader: "eslint-loader",
        // },
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // 将ES6以上语法编译成ES5语法
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                // npm i core-js
                {
                  useBuiltIns: "usage", // 按需加载
                  corejs: { version: 3 },
                  targets: {
                    ie: "10",
                    chrome: "70",
                  },
                },
              ],
            ],
            cacheDirectory: true, // 开启缓存
            plugins: ["@babel/plugin-transform-runtime"], // 避免重复函数
          },
        },
      },
      {
        test: /\.less$/,
        // 多个loader得使用use
        use: [
          // 执行顺序从下到上
          MiniCssExtractPlugin.loader, // 提取js中css成单独文件
          "css-loader", // 将css以module方式整合到js中
          "postcss-loader", // 做css的兼容性处理
          "less-loader", // 将less编译成css
        ],
      },
      {
        test: /\.css$/,
        // 多个loader得使用use
        use: [
          // 执行顺序从下到上
          MiniCssExtractPlugin.loader, // 提取js中css成单独文件
          "css-loader", // 将css以module方式整合到js中
          "postcss-loader", // 做css的兼容性处理
        ],
      },
      // 处理图片资源
      {
        test: [/\.jpe?g$/, /\.png$/, /\.gif$/],
        // 会在输入原文件和base64处理的文件自由选择
        type: "asset",
        parser: {
          dataUrlCondition: {
            // 限制大小
            maxSize: 8 * 1024, // 8kb
          },
        },
      },
      {
        test: [/\.woff2?$/, /\.ttf$/, /\.map3$/, /\.map4$/],
        // 会在输出原文件
        type: "asset/resource",
        // 权重更高
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  // plugins: 插件, 帮助webpack干活，功能更加强大
  plugins: [
    // 自动引入打包生成js、css等资源
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // 提取js中css成单独文件
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:10].css",
    }),
    // 压缩css
    new CssMinimizerPlugin(),
  ],
  target: "browserslist",
  // mode: 模式（development, production）
  mode: "production",
};
