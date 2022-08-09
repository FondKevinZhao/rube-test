## TypeScript

TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。



全局安装TS

```JS
npm install -g typescript
```

创建tsconfig.json文件

```
tsc --init
```

打开tsconfig.json文件修改和删除相应配置（如果想快速修改配置，请复制下列配置）

```js
{
  "compilerOptions": {
   "target": "es5",
   "noImplicitAny": false,
   "module": "amd",
   "removeComments": false,
   "sourceMap": false,
   "outDir": "src/js"//你要生成js的目录
  }
}
```

编译TS文件

```
tsc xxx.ts
```

自动编译

点击菜单 任务-运行任务，点击 tsc:构建-tsconfig.json 

## 一、基础类型

#### 布尔值 ：boolean 

```js
let isShow: boolean = true
```



#### 数组：number

```js
let age: number = 18
```



#### 字符串：string

```js
let name: string = "Tina"
```



#### 数组：[]||Array

```js
let type: number[] = [1,2,3]

let type:Array<number> = [1,2,3]
```



#### 元组 Tuple

```js
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let type:[string, number];
type = ["Tina" , 18]		
```



#### 枚举

```js
//enum类型是对JavaScript标准数据类型的一个补充

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```



#### Any

```js
//any表示数据可以是任意类型
let type:any = 1;
type = '男'
type = false
```



#### Void

```js
//表示没有返回值
function pushTest(): void {
    console.log('完成操作')
}

//表示没有值
let type: void = undefined
```



#### Null、Undefined

```js
let u: undefined = undefined;
let n: null = null;
```



#### Function

```js
var fun:Function = ()=>{};
```



## 二、接口

使用接口（Interfaces）来定义对象的类型。除了可用于对类的一部分行为进行抽象以外，也常用于对**对象数据**进行描述

使用**interface** 关键字定义一个必须包含`name`属性且值是`sting`类型的接口

```js
interface IuserName {
    name:string
}

let userName: IuserName = {
    name:"张三"
}

```



#### 可选属性

接口里常规定义的属性都是必须的，可以通过**？**标记一个非必须的属性

```js
interface IuserName {
    name:string,
    age?:number
}

let userName:IuserName = {
    name:"张三",
    age:18,
}

```



#### 只读属性

**readonly**指定属性只能在定义的时候赋值，后期使用只能被读取不允许被修改

```js
interface IuserName {
    name:string,
    age?:number,
    readonly type:number
}

let userName:IuserName = {
    name:"张三",
    age:18,
    type:1
}

userName.name="张三"
userName.age=19
userName.type=1 // 报错

```



**const** 和 **readonly** 的区别：

**const** 规范的是变量 规定变更不可变更

**readonly** 规范的是属性 规定属性为只读



#### 函数类型

想要给定义一个包含函数的接口可以直接定义某个属性的值是一个**Function**类型，但是如果还需要限定函数的参数就需要使用特定的表达式。它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```JS
interface IsayHi {
    (str:string):string
}

var fun:IsayHi = (userName:string)=> `hi~~${userName}`



interface IuserInfo{
    name:string,
    sayHi():void
}

var user:IuserInfo = {
    name:"张三",
    sayHi:()=>console.log(123)
}
```



#### 额外属性

当不确定接口内部会出现什么属性的时候可以使用额外属性来定义

```js
interface IuserName {
    name:string,
    age?:number,
    readonly type:number,
    [propName:string]: any
}

let userName:IuserName = {
    name:"张三",
    age:18,
    type:1,
    sex:1,
    phone:123456
}

```



#### 继承接口

接口继承就是从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```js
interface IuserName {
    name:string,
}

interface IuserId {
    id:number,
}
    
interface IuserInfo extends IuserName, IuserId {
    type:number
}
    
var userInfo:IuserInfo = {
    name:"张三",
    id:1,
    type:1
}
```



#### 混合类型

用于规定一个函数内部的数据结构

```js
interface Icount {
    count:number,
    ():void
}
    
let getCount = (function():Icount {
    let fun =<Icount>function(){
        fun.count++
        console.log(fun);
    }
    fun.count=1
    return fun
})()
```





## 三、类

类就是基于面向对象的方式实现常规的构造函数创建对象的另一种实现

使用js是使用构造函数基于原型的继承来创建可复用的对象

```js
class UserInfo {
    userName:string;
    constructor(name:string){
        this.userName = name
    }

    getName(){
        return `当前用户的名字是：${this.userName}`
    }
}

let TinaInfo = new UserInfo("张三")
TinaInfo.getName()
```



```js
function UserInfo(name) {
    this.userName = name
    this.getUserName = ()=>{
        return `当前用户的名字是：${this.userName}`
    }
}

let Tina = new UserInfo("张三")
Tina.getUserName()
```



#### 继承

js想要一个实例对象拥有多个属性方法需要使用原型链实现，在TS里可以使用类的继承

```js
class UserInfo {
    userName:string;
    constructor(name:string){
        this.userName = name
    }

    getName(){
        return `当前用户的名字是：${this.userName}`
    }
}

class Zhaoxi extends UserInfo {
    constructor(name:string){
        super(name)
    }
    sayHi(){
        console.log("欢迎");
         console.log(this.userName);
    }
}

let TinaInfo = new Zhaoxi("张三")
TinaInfo.getName()
TinaInfo.sayHi()
```



## 四、函数

#### 函数类型

函数类型分为**参数类型**和**返回值类型**

参数类型只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确

```js
function add(x: number, y: number): number {
    return x + y;
}

let add = function(x: number, y: number): number { return x + y; };

let add: (x: number, y: number) => number = function(x: number, y: number): number { return x + y; };
```



#### 可选参数

一般情况下ts定义的函数参数都是必穿的，如果想要参数成为可选参数则需要特殊定义

可选参数必须跟在必须参数后面

```js
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

```

```js
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
```

在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型

#### 剩余参数

ts可以把未知参数收集起来统一处理

剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，名字是你在省略号（ `...`）后面给定的名字，你可以在函数体内使用这个数组

```js
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
```



## 五、泛型

有时候确定函数的参数和返回值类型一致，但是不确定参数类型，这个时候就可以使用泛型

泛型会追踪传入类型来规定参数类型和返回值类型

```JS
function getName<T>(userName:T):T {
    return userName
}

console.log(getName('tina'));
console.log(getName<string>('tina'));
```

泛型的参数类型是不确定的，所以在函数内部没办法去操作某一些类型才有的属性，否则回报错。因为函数在未被调用的时候，参数可以是任意类型，也可以理解为不确定类型



如果是需要定义数组内的数据类型，则可以把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性

```JS
 function LogList<T>(arr:T[]) :T[] {
     return arr
 }

 LogList([1,2,3,4])
//报错，定义了类型为number后不能再传string类型
 LogList<number>(['1','3','4'])
 LogList<number>([1,2,3,4])
```

### 泛型接口

```JS
 interface ConfigInt {
     <T>(userName:T):T
 }
 
const getName:ConfigInt = <T>(userName:T):T=>userName

const username:string =  getName('Tina')
```

```
 interface ConfigInt<T> {
     (userName:T):T
 }
 const getName:ConfigInt<string> =<T>(userName:T):T=>userName

const username:string =  getName("tina")
```



### 泛型类

```JS
class UserInfo<T>{
    username!: T;
    Type!: T;
    getAge!:(x: T, y: T) => T;
}

const Tina = new UserInfo<string>();
Tina.username = "Tina"
Tina.Type = "1"
Tina.getAge = (name,age)=>name+"今年"+age+"岁"
Tina.getAge(Tina.username,'18')
```



### 泛型约束

泛型约束可以要求泛型上一定得有某些属性

```JS
interface Lengthwise {
    length: number;
}

function getName<T extends Lengthwise >(arg:T):T {
    console.log(arg.length);
    return arg
}

getName('Tina')

getName([1,2,3])

getName({name:"tina",length:1})
```

## 六、枚举

使用枚举可以定义一些带名字的常量

```JS
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
```

上面定义了一个数字枚举， `Up`使用初始化为 `1`。 其余的成员会从 `1`开始自动增长。 换句话说， `Direction.Up`的值为 `1`， `Down`为 `2`， `Left`为 `3`， `Right`为 `4`。不初始化的话，`Up`的值默认为 `0`

通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型

```JS
enum Type {
    "异常" = 201,
    "错误"
}
console.log(Type[201]);
console.log(Type);
```



## 七、类型兼容

TS里变量在声明的时候如果没有定义类型，也会被JS根据值类型反向推论出类型

```JS
let a = 0
//等同于
let a:number = 0
```

### 数据类型兼容

如果想要给`a`赋予新的值那么值的类型一定得能匹配的上`a`的类型

```JS
let a = 0
//报错
a = "0"
//允许
a = 1
```

TypeScript结构化类型系统的基本规则是，如果`x`要兼容`y`，那么`y`至少具有与`x`相同的属性

`y`有个额外的属性不会引发错误。 只有目标类型（这里是`infoInt`）的成员会被一一检查是否兼容。

```JS
interface infoInt {
    name:string
}

let userInfo : infoInt

let user  = {
    name:"tina",
    age:18
}

userInfo = user
```

### 函数兼容

判断两个函数类型是否兼容就是在判断函数的参数是否兼容

```JS
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

要查看`x`是否能赋值给`y`，首先看它们的参数列表。 `x`的每个参数必须能在`y`里找到对应类型的参数。 注意的是参数的名字相同与否无所谓，只看它们的类型。 这里，`x`的每个参数在`y`中都能找到对应的参数，所以允许赋值。

第二个赋值错误，因为`y`有个必需的第二个参数，但是`x`并没有，所以不允许赋值。

### 类兼容

类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内

```js
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK
```



## 八、高级类型

### 交叉类型

交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性

```JS
interface Person {
    name: string
    age: number
}

interface Student {
    school: string
}

type StudentInfo = Person & Student

const stu: StudentInfo = {
    name: '张三',
    age: 20,
    school: '北大',
}
```



### 联合类型

联合类型表示一个值可以是几种类型之一。 我们用竖线（ `|`）分隔每个类型，所以 `number | string | boolean`表示一个值可以是 `number`， `string`，或 `boolean`。

```JS
var type: string|number;
type = 1
type = "开启"
type = true // 报错
```



### 类型断言

类型断言就是在某个范围内把数据设定为某个类型

```JS
enum Type { Strong, Weak }

class Java {
  helloJava() {
    console.log('Hello Java')
  }
}

class JavaScript {
  helloJavaScript() {
    console.log('Hello JavaScript')
  }
}

function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // Error：类型“Java | JavaScript”上不存在属性“helloJava”
  if(lang.helloJava) {
    lang.helloJava()        // Error：类型“JavaScript”上不存在属性“helloJava”
  } else {
    lang.helloJavaScript()  // Error：类型“Java”上不存在属性“helloJavaScript”
  }

  return lang;
}

//允许
function getLanguage(type: Type) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
	//在if内将lang断言为Java
  if((lang as Java).helloJava) {
    (lang as Java).helloJava()        
  } else {
    (lang as JavaScript).helloJavaScript()  
  }

  return lang;
}
```

### 可选参数可选属性

参数或者属性设定为可选以后，值会自动地加上 `| undefined`

```JS
function f(x: number, y?: number) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
```

```JS
lass C {
    a: number;
    b?: number;
}
let c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
```

## 九、Symbols

`symbol`成为了一种新的原生类型，就像`number`和`string`一样。

`symbol`类型的值是通过`Symbol`构造函数创建的。

```ts
let sym1 = Symbol();

let sym2 = Symbol("key"); // 可选的字符串key
```

Symbols是不可改变且唯一的。

```ts
let sym2 = Symbol("key");
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols是唯一的
```



## 十、迭代

`for..of`和`for..in`均可迭代一个列表；但是用于迭代的值却不同，`for..in`迭代的是对象的 *键* 的列表，而`for..of`则迭代对象的键对应的值

```JS
let list = [4, 5, 6];

for (let i in list) {
    console.log(i); // "0", "1", "2",
}

for (let i of list) {
    console.log(i); // "4", "5", "6"
}
```



## 十一、命名空间

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中

在同一个文件内，两个不同的命名空间里可以存在一样的方法

想要在命名空间外可以被访问，则需要使用`export`导出

```js
namespace userInfo {
  export class getName {}
  export class getId {}
}
namespace adminInfo{
  export class getName {}
  export class getId {}
}

//使用adminInfo.调用命名空间内的数据
adminInfo.getId
userInfo.getId
```

如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，语法格式如下：

```JS
/// <reference path = "SomeFileName.ts" />
```

user.ts

```JS
namespace user {
  export class getName {}
}
```

id.ts

```JS
namespace user {
  export class getName {}
}
```

index.ts

```JS
/// <reference path = "user.ts" />
/// <reference path = "id.ts" />
user.getId
user.getName
```



在同一个空间里，声明多个同样的命名空间或者接口会进行合并处理

合并的机制是把双方的成员放到一个同名的接口里

### 合并接口

```JS
interface info {
  username:string
}

interface info {
  id:number
}

var user:info={
  username:"tina",
  id:1
}
```

### 合并命名空间

对于命名空间的合并，模块导出的同名接口进行合并，构成单一命名空间内含合并后的接口。

对于命名空间里值的合并，如果当前已经存在给定名字的命名空间，那么后来的命名空间的导出成员会被加到已经存在的那个模块里、

## 十二、装饰器

装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上

是一种在不改变原类和使用继承的情况下，动态地扩展对象功能

由于`typescript`是一个实验性特性，若要使用，需要在`tsconfig.json`文件启动

```JS
//tsconfig.json:

{
    "compilerOptions": {
        "target": "ES5",
        "experimentalDecorators": true
    }
}
```

### 类装饰器

装饰器本质也不是什么高大上的结构，就是一个普通的函数，`@expression` 的形式其实是`Object.defineProperty`的语法糖

`expression`求值后必须也是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入

```JS
function setName(arg:any){
	console.log('装饰器')
}

@setName()
class Info {
  name:string
  constructor(name:string){
  console.log("class");
    this.name = name
  }
}

new Info() 
// 输出
// 装饰器
// class
```

装饰器的`arg`参数是`Info`类，所以我们可以给这个类做一些其他的动作

```JS
function setAge(arg:any){
	console.log('装饰器')
	arg.prototype.age = 18
}

@setAge
class Info {
  name:string
  constructor(name:string){
  console.log("class");
    this.name = name
  }
}

new Info("tina")
```

多个装饰器可以同时应用到一个声明上

```JS
function setAge(arg:any){
	console.log('装饰器1')
	arg.prototype.age = 18
}

function setSex(arg:any){
	console.log('装饰器2')
	arg.prototype.sex = '女'
}

@setAge
@setSex
class Info {
  name:string
  constructor(name:string){
  console.log("class");
    this.name = name
  }
}

new Info("tina")
//装饰器2
//装饰器1
```

装饰器执行顺序：

1. 装饰器工厂需要先求值，再装饰，求值顺序是由上到下
2. 装饰器可以直接求值，装饰顺序是由下到上

```js
function setAge(){
	console.log('装饰器1求值')
	return (target:any)=>{
	  console.log('装饰器1')
    target.prototype.age = 18
  }
}

function setSex(){
	console.log('装饰器2求值')
  return (target:any)=>{
	  console.log('装饰器2')
    target.prototype.sex = '女'
  }
}

@setAge()
@setSex()
class Info {
  name:string
  constructor(name:string){
  console.log("class");
    this.name = name
  }
}

new Info("tina")
//装饰器1求值
//装饰器2求值
//装饰器2
//装饰器1
//class
```

### 方法装饰

同样，装饰器可以用于修饰类的方法，这时候装饰器函数接收的参数变成了：

- target：对象的原型

- propertyKey：方法的名称

- descriptor：方法的属性描述符

    ​    writable: **（可写）**

     	enumerable: **（可枚举）**
     	
     	configurable: **（可配置）**

可以看到，这三个属性实际就是`Object.defineProperty`的三个参数，如果是类的属性，则没有传递第三个参数

```js
function get(params:string){
  /**
   * target:对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
   * propertyKey:成员的名字
   * descriptor:成员的属性描述
   */
    return function(target:any,propertyKey:any,descriptor:any){
        console.log('target:'+target);
        console.log('propertyKey:'+propertyKey);
        console.log('descriptor:'+descriptor);
        target.api = params;
        descriptor.value = function(){
          console.log('修改了方法');
          
        }
    }
}

class InitHttp {
    url:string = '暂无';

    @get('www.baidu.com')
    getUrl(){
      console.log(this.url);
    }
}

const $http = new InitHttp()
$http.getUrl()
```

### 属性装饰

属性装饰器表达式会在运行时当作函数被调用，传入下列两个参数：

- 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
- 成员的名字

```js
function logProperty(params:string){
   /**
   * target:对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
   * propertyKey:成员的名字
   */
    return function(target:any,propertyKey:any){
      console.log('target:'+target);
      console.log('propertyKey:'+propertyKey);
      target[propertyKey] = params;
  }
}

class InitHttp {
    @logProperty('www.baidu.com')
    url:string;

    getUrl(){
      console.log(this.url);
    }
}

const $http = new InitHttp()
$http.getUrl()
```

### 参数装饰器

*参数装饰器*声明在一个参数声明之前（紧靠着参数声明）。 参数装饰器应用于类构造函数或方法声明。

参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象，对于参数来说就是所在的函数体。
2. 成员的名字。
3. 参数在函数参数列表中的索引。

> 注意  参数装饰器只能用来监视一个方法的参数是否被传入。

```JS
function logParams(params: any) {
    /**
     * target:对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
     * propertyKey:成员的名字
     * paramsIndex:参数在函数参数列表中的索引
   */
  return function (target: any, propertyKey: any, paramsIndex: any) {
    console.log(1, target);
    console.log(2, propertyKey);
    console.log(3, paramsIndex);

    // 增加属性
    target.apiUrl = params;
  }
}

class HttpClient {
  public url: any | undefined;
 
  getData(@logParams('uuid') uuid: any) {
    console.log('我是getData里面的方法,uuid=', uuid);
  }
}

let http = new HttpClient();

http.getData(123456);

console.log('apiUrl', http.apiUrl);
```



## 十三、声明文件

TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了

声明文件以 .d.ts 为后缀，声明文件不包含实现，它只是类型声明

比如我们想要在ts里使用jQuery，如果直接引入使用则会报错，我们需要先添加声明

通常我们会把声明语句放到一个单独的文件（`index.d.ts`）中，这就是声明文件：

```JS
declare var jQuery: (selector: string) => any;
declare var $: (selector: string) => any;
```

ts会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `jQuery.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `$` 的类型定义了

假如仍然无法解析，那么可以检查下 `tsconfig.json` 中的 `files`、`include` 和 `exclude` 配置，确保其包含了 `index.d.ts` 文件。

全局变量的声明文件主要有以下几种语法：

- declare var/const/let 声明全局变量
- declare function 声明全局方法
- declare class 声明全局类
- declare enum 声明全局枚举类型
- declare namespace 声明（含有子属性的）全局对象
- interface 和 type 声明全局类型
- declare var/const/let  用来定义一个全局变量的类型;
  
     
