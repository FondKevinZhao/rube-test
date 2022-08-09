// 函数参数和返回类型的注解
/* function getTotal(one: number, two: number) {
  return one + two + '';
}
var total = getTotal(1, 2);
console.log(total); */ // 鼠标放到total上发现total成了string类型，我们的本意希望是数字类型，这里既没有报错，也没有错误的提示



// 解决上面的问题
// 对返回值类型进行限制
/* function getTotal(one: number, two: number): number {
  // return one + two + ''; // 会报错
  return one + two;
}
var total = getTotal(1, 2);
console.log(total); */



// 无返回值
/* function sayHello(): void {
  console.log('Hello World');
  // 写了void，就表示没有返回值了，如果再写返回值会报错
  // return 'a' // 报错
  // return 1 // 报错
}
sayHello(); */



// never 表示一个函数永远不会得到一个正常的值
/* function errorFunction(): never {
  throw new Error();
  console.log('Hello World'); // 这句话永远也执行不到，这个时候可以在形参括号旁写一个never
}
// errorFunction(); */

// 如果是个死循环，也会用到never
/* function forNever(): never {
  // 死循环
  while (true) {
    console.log('Hello World');
  }
}
// forNever(); */



// 函数参数是对象的这种写法是错误的
/* function add({ one:number, two:number }) {
  return one + two
}
const total = add({ one: 1, two: 2 }); */

// 应该这样写：写法有点麻烦
/* function add({ one, two }: { one: number, two: number }) {
  return one + two
}
const total = add({ one: 1, two: 4 });
console.log(total); */



// 您记住了，只要是对象的参数，直接在后面加冒号跟上上一个对象，给它加类型
function getNumber({ one }: { one: number }) {
  return one
}
const one = getNumber({ one: 1 });
console.log(one);