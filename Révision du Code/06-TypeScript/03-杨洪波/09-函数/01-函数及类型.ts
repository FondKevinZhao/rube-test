// 函数：封装了一些重复使用的代码，在需要的时候直接调用

// js中：函数声明(命名函数)
/* function add(x, y) {
  return x + y;
} */



// js中：函数表达式
/* const add2 = function (x, y) {
  return x + y;
} */



// ts中：函数声明(命名函数)
// 函数中的x和y参数的类型都是string类型的，小括号后面的:string代表的是该函数的返回值也是string类型的
function add(x: string, y: string): string {
  return x + y;
}
const result: string = add('111', '222');
console.log(result);


// ts中：函数表达式
// 函数中的x和y参数的类型都是number类型的，小括号后面的:number代表的是该函数的返回值也是number类型的
const add2 = function (x: number, y: number): number {
  return x + y;
}
const result2: number = add2(111, 222);
console.log(result2);



// 函数的完整写法(一般不这样用)
// const add3:类型 = function(x:number, y:number):number{}
// add3代表的是变量名
// (x: number, y: number) => number 当前的这个函数的类型
/* 
  function (x: number, y: number): number {
    return x + y;
  }
  这个函数相当于符合上面的函数类型的值
*/
const add3: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
console.log(add3(10, 20));
















