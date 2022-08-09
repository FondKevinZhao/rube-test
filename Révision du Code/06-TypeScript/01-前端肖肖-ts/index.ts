// 字符串类型
/* var userName: string = '肖肖小肖';
// number类型
var userId: number = 1;
userName = '小仙女';
userId = 2;

// 布尔类型
var isShow: boolean = false;
isShow = true */

// undefined类型
/* 
  js中出现undefined的场景：
    1. 变量被声明了，但没有赋值时，就等于 undefined。
    2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
    3. 对象没有赋值的属性，该属性的值为 undefined。
    4. 函数没有返回值时，默认返回 undefined。
*/
// 在ts中使用undefined类型，那么也就只能赋值为undefined
/* var unType: undefined = undefined;
unType = undefined; */
// unType = 1; // 会报错

// null类型
// 在ts中使用null类型，跟undefined同理，也只能给它赋值为null
/* var nullType: null = null;
nullType = null; */
// nullType = 1; // 会报错

// 直接赋值undefined或者null，后期用的很少
// 以上为5中基本类型




// 数组类型
/* var arr: [] = []; // arr:[] 表示的是一个空数组，这个时候，你不能给这个空数组赋值，否则会报错

var arr1: [string | number] = ['a'];
var arr2: [string | number] = [5];
// var arr3:[string | number] = ['a', 5]; // [string | number] 表示二选一，写两个就会报错

// Ids是一个只能装number类型数据的数组
var ids: number[] = [];
ids.push(1);
ids.push(2);
ids.push(3);
// ids.push('小肖'); // 不好意思，这里不能放字符串，因为类型不同
console.log(ids);

var userNames: string[] = [];
userNames.push('小肖');
console.log('userName', userName); */



// 元组：已知元素的数组(我知道数组里面有什么玩意儿的一个数组)
/* let typeArr: [string, number, boolean, string];
// typeArr = ['小肖', 20, true]; // 如果写了多少的元素，你都要写全，不然也会报错
// typeArr = ['小肖', 20, true,'aa', 11];  // 写多了也不行
typeArr = ['小肖', 20, true, 'aa']; // 写全就不会报错了
console.log('typeArr', typeArr); */


// 枚举
// 定义一个枚举。typeS是枚举的名字
// 枚举可以生成一个相互引用的对象
// 枚举对象跟我们平时的对象有点不同，枚举对象有索引。如：我们可以通过typeString 找到 0，也可以通过索引0找到typeString。
// 这种类型只要有了就不能再写了。如：已经有了typeString，那么后面就不能重复再写一个typeString，写了会报错
/* enum typeS {
  typeString,
  typeNumber,
  typeNull
}
console.log(typeS); */


// 需求：模拟后台给的编码所对应的内容
// 枚举的索引，默认是从0开始，但是是可以被修改的。我们可以根据实际需求来做修改。比如说：成功是code码200
/* enum msgs {
  "成功" = 200, // 成功返回 200
  "密码错误", // 密码错误 201
  "账号错误" = 206 // 账号错误 206
}
console.log(msgs);
console.log(msgs[206]); */



// any类型：任意类型，跟写js一样
/* var typeString: any = 'aa';
typeString = 1;
typeString = true;
typeString = null;
typeString = [];
typeString = {}; */



// void 表示的是：没有值。如果给一个变量为void，那么它除了undefined，任意一个类型给它赋值都是undefined。
// void 的最佳使用场景就是，规范一个函数没有返回值的时候
/* let vTs: void;
vTs = undefined; // 表示没有值 */
/* 
这里都报错
vTs = 18
vTs = '18'
vTs = boolean */



// function
/* var fun: Function = () => { }
fun = function () {
  console.log(1);
}
var fun2 = function () { }
fun = fun2; // 把一个function赋值给另一个function */

// fun = '肖肖小肖' // 报错
// fun = 18 // 报错



// 接口(Interface)：约束对象
// 这个接口不是后端给的接口，而是我们自定义的接口类型
// 使用Interface关键字来声明一个简单的接口
/* interface InfoInt {
  username: string,
  id: number,
  vip?: boolean, // 问号? : 标记当前属性时可选的，非必传的
  readonly age: number, // age 是必填属性，但是只读，是不能修改的
  [propsName: string]: any // 未知的属性，以及未知的属性值
}
// 使用
// obj对象里面的属性名字和值类型要必须跟interface中InfoInt声明的一致才不会报错
let obj: InfoInt = {
  username: '肖肖',
  id: 1,
  age: 18
}
// obj.type = 2; // 使用了接口的对象，不能随意添加属性
obj.id = 2; // id可改
// obj.age = 19; // 报错，age是只读的，不能修改
// 给obj添加属性：[propsName:string]: any
obj.color = 'red'; */

/* 
  const 和 readonly 的区别:
    - const: 规范的是变量，规定变量不可变更
    - readonly: 规范的是属性，规定属性为只读
*/

// 接口之：函数类型
// 想要给定一个包含函数的接口可以直接定义某个属性的值是一个Function类型，但是如果还需要限定函数的参数就需要使用特定的表达式。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字个类型。
/* interface IsayHi {
  (str: string): string
}
var fun1: IsayHi = (userName: string) => `hi~~${userName}`

interface IuserInfo {
  name: string,
  sayHi(): void
}
var user: IuserInfo = {
  name: 'tina',
  sayHi: () => console.log(123)
} */



// 接口之：继承接口
// 接口继承就是从一个接口里复制成员的嗷另一个接口里，可以更灵活地将接口分割到可重用的模块里
/* interface IuserName {
  name: string,
}
interface IuserId {
  id: number,
}
interface IuserInfo1 extends IuserName, IuserId {
  type: number,
}
var userInfo: IuserInfo1 = {
  name: 'tina',
  id: 1,
  type: 1
} */


// 接口之：混合类型
// 用于规定一个函数内部的数据结构
/* interface Icount {
  count: number,
  (): void
}

let getCount = (function (): Icount {
  let fun = <Icount>function () {
    fun.count++
    console.log(fun);
  }
  fun.count = 1
  return fun
})() */



// 类
// 类式基于面向对象的方式实现常规的构造函数创建对象的另一种实现
// 使用js是使用构造函数基于原型的继承来创建可复用的对象

// 类的案例1：
/* class Info {
  userName: string = 'aa';
  id: number = 0;
  type: string = '4';
  age: number = 18
}
var Ninfo = new Info()
console.log(Ninfo); */

// 类的案例2：类的属性和函数
/* class UserInfo {
  userName: string;
  constructor(name: string) {
    this.userName = name
  }
  getName() {
    return `当前用户的名字是：${this.userName}`
  }
}

let TinaInfo = new UserInfo('张三')
TinaInfo.getName() */



// 函数的：参数类型和返回值类型
/* let num: Function = (num1: number, num2: number) => num1 + num2;

function getNum(num1: number, num2: number) {
  return num1 + num2;
}

const count = getNum(1, 2);
console.log(count); */

// 如果以后有第三个参数，这个参数是不确定有没有
// 变量名后面加问号？：表示可选参数
/* function getNum(num1: number, num2: number, num3?: number): number {
  let count: number = num1 + num2;
  if (num3) {
    count += num3;
  }
  return count;
}

const count = getNum(1, 3);
console.log('count', count);

const count1 = getNum(1, 3, 5);
console.log('count1', count1); */



// 函数的剩余参数：...nums:number[]
/* function getNum(num1: number, num2: number, ...nums: number[]): number {
  // console.log(nums); // 拿到的是个数组
  let count: number = num1 + num2;
  nums.forEach(item => count += item) 
  return count;
}

const count1 = getNum(1, 3, 5, 7, 9);
console.log('count1', count1); */



