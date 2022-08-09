// 类类型：类也有自己的类型。类的类型可以通过接口来实现
// 与 C# 或 Java 里接口的基本作用一样，TypeScript 也能用它来明确的强制一个类去符合某种契约。
/*
  类类型: 实现接口
    1. 一个类可以实现多个接口
    2. 一个接口可以继承多个接口
*/

// 定义一个接口
/* interface IFly {
  // 该方法没有任何的实现(方法中什么都没有)
  fly():any, // 后面要加返回类型，否则直接调用回报错
}

// 定义一个类，这个类的类型就是上面定义的接口(实际上也可以理解为，IFly接口约束了当前的这个Person类)
class Person implements IFly {
  // 实现接口中的方法
  fly() {
    console.log('我会飞了，我是超人');
  }
}

const person = new Person();
person.fly(); */



// 再来一个例子：
// 定义一个接口
/* interface IFly {
  // 该方法没有任何的实现(方法中什么都没有)
  fly(): any, // 后面要加返回类型，否则直接调用回报错
}
// 再定义一个接口
interface ISwim {
  swim(): any,
}

// 定义一个类，这个类的类型就是Ifly和ISwim(当前这个类可以实现多个接口，一个类同时也可以被多个接口进行约束)
class Person2 implements IFly, ISwim {
  fly() {
    console.log('我飞了2');
  }
  swim() {
    console.log('我会游泳啦');
  }
}

// 实例化对象
const person2 = new Person2();
person2.fly();
person2.swim(); */

/**
 * 总结：
 *  - 类可以通过接口的方式，来定义当前的这个类的类型
 *  - 类可以实现一个接口，类也可以实现多个接口，要注意，接口中的内容都要真正的实现
 */



// 接口可以继承其他的多个接口
// 定义一个接口
interface IFly {
  // 该方法没有任何的实现(方法中什么都没有)
  fly(): any, // 后面要加返回类型，否则直接调用回报错
}
// 再定义一个接口
interface ISwim {
  swim(): any,
}

// 定义了一个接口，继承了其他的多个接口
interface IMyFlyAndSwim extends IFly, ISwim { }

// 定义一个类，直接实现IMyFlyAndSwim 这个接口
class Person3 implements IMyFlyAndSwim {
  fly() {
    console.log('我飞了3');
  }
  swim() {
    console.log('我会游泳啦3');
  }
}

const person3 = new Person3();
person3.fly();
person3.swim();


/**
 * 总结：
 *  - 接口和接口之间叫继承(extends)
 *  - 类和接口之间叫实现(implements)
 */