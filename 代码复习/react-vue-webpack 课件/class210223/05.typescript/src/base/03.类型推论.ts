
export let aa: any; // 定义没有赋值，推论为any类型 error
aa = true; 
aa = false;

let b = 123; // 将a的类型推论为number，后续只能作为number使用
// b = true // error