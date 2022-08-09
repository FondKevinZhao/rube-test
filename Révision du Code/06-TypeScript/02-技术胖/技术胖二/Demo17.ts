// 泛型之一：函数中的泛型

// 联合类型写法
/* function join(first: string | number, second: string | number) {
  return `${first}${second}`
}
var res = join(1, 2);
console.log(res); */



// 泛型
// 1. 在函数名后面写上名字JSPang，那么参数也可以使用这个JSPang
/* function join<JSPang>(first: JSPang, second: JSPang) {
  return `${first}${second}`
}
// 2. 在调用的时候再声明类型
//  var res = join<string>('jspang', '.com'); 
var res = join<string | number>('jspang', 111);
console.log(res); */



// 再来一个例子
// 泛型中数组的使用 --- 方法一
/* function myFun<ANY>(params:ANY[]) {
  return params;
}

myFun<string>(['123', '456']); */



// 泛型中数组的使用 --- 方法二
/* function myFun<ANY>(params: Array<ANY>) {
  return params;
}

myFun<string>(['123', '456']); */



// 泛型一般都会用T来代替
/* function myFun<T>(params: Array<T>) {
  return params;
}

myFun<string>(['123', '456']); */



// 两个泛型同时写
/* function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}
let res = join<string, number>('abc', 1);
console.log(res); */



// 泛型也支持类型推断
function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}

// 调用的时候不进行类型定义，会自动推断
// 鼠标放到join('abc', 1)，可以看到提示
let res = join('abc', 1);
console.log(res);
