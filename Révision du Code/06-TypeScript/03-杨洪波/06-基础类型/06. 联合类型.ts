// 联合类型（Union Types）表示取值可以为多种类型中的一种
// 需求1: 定义一个函数得到一个数字或字符串值的字符串形式值
/* function getString(str:number | string):string {
  return str.toString();
}
console.log(getString(123));
console.log(getString('123'));
// console.log(getString(true)); // 报错  */



// 需求2: 定义一个函数得到一个数字或字符串值的长度
/* function getString(str: number | string): number {
  // str不管是string类型还是number类型都要toString一下，这样不是很好，我们可以先判断它是不是string类型，如果是，我们就不用再toString了
  // return str.toString().length;

  // 我们可以做个判断
  if (typeof str === 'string') {
    return str.length;
  } else {
    return str.toString().length;
  }
}
console.log(getString(123));
console.log(getString('123')); */



/**
 * 
 * 类型断言(Type Assertion)：
 *    概念：通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。
 *    语法：类型断言有两种形式。 
 *      - 其一是“尖括号”语法。如：<类型>值
 *      - 另一个为 as 语法。如：值 as 类型  tsx中只能用这种方式
 */
/* // 通过类型断言来解决需求二的问题：语法一  <类型>值
function getString(str: number | string): number {
  // 我们可以做类型断言：断定(<string>str)里面的变量是字符串类型
  // 这种写法是告诉编译器，我知道我是什么类型的
  if ((<string>str).length) {
    return (<string>str).length;
  } else {
    return str.toString().length;
  }
}
console.log(getString(123));
console.log(getString('123')); */




// 通过类型断言来解决需求二的问题：语法二  值 as 类型
/* function getString(str: number | string): number {
  // 我们可以做类型断言：断定(<string>str)里面的变量是字符串类型
  // 这种写法是告诉编译器，我知道我是什么类型的
  if ((str as string).length) {
    return (str as string).length;
  } else {
    return str.toString().length;
  }
}
console.log(getString(123));
console.log(getString('123')); */



// 类型推断: TS会在没有明确的指定类型的时候推测出一个类型
let txt = 100;
console.log(txt); // 鼠标放到txt上可以看到txt的类型，这就是类型推断

// 下面的代码就会推断出报错
/* let txt1 = 200;
txt1 = 'hello';
console.log(txt1);  */

// 定义变量未赋值，那么会认为是any类型的
let txt2;
console.log(txt2); 