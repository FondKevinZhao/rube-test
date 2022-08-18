// const px2rem = require("postcss-px2rem");
const pxtoviewport = require("postcss-px-to-viewport");

// 如何修改脚手架配置：https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration
module.exports = {
  style: {
    postcss: {
      plugins: [
        // https://www.npmjs.com/package/px2rem
        // px2rem({
        //   // 设计稿的宽度 / 分为多少份
        //   remUnit: 3.75, // 1rem等于多少px
        //   remPrecision: 5, // 精度，算出来的rem精确到小数点后几位
        // }),

        // https://github.com/evrone/postcss-px-to-viewport
        pxtoviewport({
          unitToConvert: "px",
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 5,
          propList: ["*"],
          viewportUnit: "vw",
          fontViewportUnit: "vw",
          selectorBlackList: ["body"],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: /node_modules/,
        }),
      ],
    },
  },
};
