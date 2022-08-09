/* 
  基础静态类型和对象静态类型
    - 基础静态类型：number, string, null, undefined, boolean, void, symbol 这些都是基础静态类型
    - 对象静态类型：
*/

const count: number = 918;
const myName: string = 'jspang';
// null, undefined, boolean, void, symbol 这些都是基础静态类型



// 对象静态类型
// 1. 对象类型
const xiaoJieJie: {
  name: string,
  age: number
} = {
  name: '大脚',
  age: 18
}

// 2. 数组类型
const xiaoJieJies: string[] = ['谢大脚', '刘英', '123'];
console.log(xiaoJieJies);

// 3. 类类型
class Person { };
const dajiao: Person = new Person();

// 4. 函数类型
// 定义一个函数，函数的返回值是一个字符串
const jianXiaoJieJie: () => string = () => { return '大脚' };
// const jianXiaoJieJie1: () => string = () => { return 1 }; // 会报错