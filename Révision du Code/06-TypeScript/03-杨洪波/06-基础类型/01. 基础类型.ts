// 基础类型
/**
 * 总结：ts中变量一开始是什么类型，那么后期赋值的时候，只能用这个类型的数据，是不允许用其他类型的数据赋值给当前的这个变量中。
 */

// 布尔类型 --- boolean
/* (() => {
  // 基本语法    let 变量名:数据类型 = 值
  let flag: boolean = true;
  console.log(flag);
})() */



// 数字类型 --- number
/* let a1: number = 10; // 十进制
let a2: number = 0b1010; // 二进制
let a3: number = 0o12; // 八进制
let a4: number = 0xa; // 十六进制
console.log(a1, a2, a3, a4); */



// 字符串类型 --- string
/* let str1: string = '床前明月光';
let str2: string = '小明去开窗';
let str3: string = '遇到一耳光';
let str4: string = '牙齿掉光光';
console.log(str1, str2, str3, str4); */

// 字符串和数字之间能否一起拼接 --- 可以拼接
/* let str5: string = '我有这么多的钱';
let num: number = 1000;
console.log(str5 + num); */



// undefined 和 null 类型
let und: undefined = undefined;
let nll: null = null;
console.log(und, nll);

// undefined 和 null 都可以作为其他类型的子类型，把undefined和null赋值给其他类型的变量，如：number类型的变量
/* let num2:number = undefined;
console.log(num2); // 但是还是报错，我们还是别这样写 */



