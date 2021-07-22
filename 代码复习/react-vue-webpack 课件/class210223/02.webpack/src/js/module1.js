const sum = (...args) => {
  return args.reduce((p, c) => p + c, 0);
};

// 分别暴露
export const name = "沛华";

// 默认暴露
export default sum;
