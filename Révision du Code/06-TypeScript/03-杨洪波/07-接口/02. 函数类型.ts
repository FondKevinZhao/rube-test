// 接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
// 函数类型：通过接口的方式，作为函数的类型来使用
/* // 定义一个接口，用来作为某个函数的类型使用
interface ISearchFunc {
  // 定义一个调用签名
  (source: string, subString: string): boolean
}

// 定义一个函数，该类型就是上面定义的接口
const searchString = function (source: string, subString: string): boolean {
  return source.search(subString) > -1
}

// 调用函数 --- 查找第二个参数是否在第一个参数中存在
console.log(searchString('哈哈，我又变帅了', '帅')); */




// 优化上面的代码
/**
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
 */
// 定义一个接口，用来作为某个函数的类型使用
interface ISearchFunc {
  // 定义一个调用签名
  (source: string, subString: string): boolean
}

// 定义一个函数，该类型就是上面定义的接口
const searchString: ISearchFunc = function (source: string, subString: string): boolean {
  return source.search(subString) > -1
}

// 调用函数 --- 查找第二个参数是否在第一个参数中存在
console.log(searchString('哈哈，我又变帅了', '帅'));