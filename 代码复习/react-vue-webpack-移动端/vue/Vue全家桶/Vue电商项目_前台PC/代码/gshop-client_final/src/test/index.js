// 引入默认暴露模块的内容
// import a from "./a";

// 默认暴露的模块不能解构使用
// import { name } from "./a";

// 原因是默认暴露，暴露是一个default属性，这个属性上才有模块暴露的内容
// 提取a文件暴露内容，对其结构得到default属性，再将default属性重命名(as)为a
// import { default as a } from "./a";

// 统一暴露和分别暴露用法一致
// 引入分别暴露模块的内容
// import { name, age } from "./b";

// 不行
// import b from "./b";
// import { default as b } from "./b";

// 引入b模块所有的内容，并重命名为b
// import * as b from "./b";

// console.log(b.name);

// export { default as a } from "./a";
// import { default as a } from "./a";
// export { a };
