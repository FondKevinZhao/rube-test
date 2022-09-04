#### 1. const 和readonly区别？

1. const用于变量，readonly用于属性
2. const在运行时检查，readonly在编译时检查
3. 使用const变量保存的数组，可以使用push，pop等方法。但是如果使用`ReadonlyArray<number>`声明的数组不能使用push，pop等方法

#### 2. 枚举和常量的区别？

1. 枚举会被编译时会编译成一个对象，可以被当作对象使用
2. `const` 枚举会在 typescript 编译期间被删除，`const` 枚举成员在使用的地方会被内联进来，避免额外的性能开销

我们先看下面代码，枚举会被编译成什么：

```tsx
// 枚举
enum Color {
  Red,
  Green,
  Blue
}
var sisterAn = Color.Red
// 会被编译成 JavaScript 中的 var sisterAn = Color.Red
// 即在运行执行时，它将会查找变量 Color 和 Color.Red
复制代码
```

我们再看下 常量枚举 会被编译成什么：

```tsx
// 常量枚举
const enum Color {
  Red,
  Green,
  Blue
}
var sisterAn = Color.Red
// 会被编译成 JavaScript 中的 var sisterAn = 0
// 在运行时已经没有 Color 变量
```

由此可见，使用 常量枚举 会有更好的性能。

#### 3. type（类别名的） 和 interface （接口）的区别？

1. 类型别名可以为任何类型引入名称。例如基本类型，联合类型等
2. 类型别名不支持继承
3. 类型别名不会创建一个真正的名字
4. 类型别名无法被实现(implements)，而接口可以被派生类实现
5. 类型别名重名时编译器会抛出错误，接口重名时会产生合并

#### 4. TypeScript中any类型的作用是什么？

1. 如果是不同变量的话，可以是任意的数据类型

2. 如果是对象的话，any不能够提示原有的属性和方法

3. 未给初始值的变量类型为any

#### 5. TypeScript中any,never,unknown和viod有什么区别？

1. unknown类型和any类型类似。与any类型不同的是unknown类型可以接受任意类型赋值，但是unknown类型赋值给其他类型前，必须被断言
2. never，never表示永远不存在的类型。比如一个函数总是抛出错误，而没有返回值。或者一个函数内部有死循环，永远不会有返回值。函数的返回值就是never类型。
3. void, 没有显示的返回值的函数返回值为void类型。如果一个变量为void类型，只能赋予undefined或者null。

#### 6.  implements 与 extends 的区别

- extends, 子类会继承父类的所有属性和方法。不可以重写属性，但可以重写方法
- implements，使用implements关键字实现一个新的类，从父类或者接口实现所有的属性和方法，同时可以重写属性和方法，包含一些新的功能

总结：

- 接口和接口之间叫继承(extends)，类和类之间也叫继承

- 类和接口之间叫实现(implements)





[博客地址](https://www.cnblogs.com/kunmomo/p/15272705.html)



#### 7. 枚举和 object 的区别

1. 枚举可以通过枚举的名称，获取枚举的值。也可以通过枚举的值获取枚举的名称。
2. object只能通过key获取value
3. 数字枚举在不指定初始值的情况下，枚举值会从0开始递增。
4. 虽然在运行时，枚举是一个真实存在的对象。但是使用keyof时的行为却和普通对象不一致。必须使用keyof typeof才可以获取枚举所有属性名。

#### 8. 什么是协变、逆变和双向协变？

- Covariant 协变，TS对象兼容性是协变，父类 <= 子类，是可以的。子类 <= 父类，错误。
- Contravariant 逆变，禁用`strictFunctionTypes`编译，函数参数类型是逆变的，父类 <= 子类，是错误。子类 <= 父类，是可以的。
- Bivariant 双向协变，函数参数的类型默认是双向协变的。父类 <= 子类，是可以的。子类 <= 父类，是可以的。

#### 9. 变量后面的感叹号的意思

- 用在变量前表示取反
- 用在赋值的内容后时，使null和undefined类型可以赋值给其他类型并通过编译，表示该变量值可空

在TypeScript中，后缀!从表达式的类型中删除null和undefined。

[ts面试题50个](https://blog.csdn.net/weixin_44727080/article/details/123108565)

[30道TypeScript 面试问题解析](https://cloud.tencent.com/developer/article/1848651)

[14个TypeScript核心基础面试题](https://baijiahao.baidu.com/s?id=1728910910735548570&wfr=spider&for=pc)

























