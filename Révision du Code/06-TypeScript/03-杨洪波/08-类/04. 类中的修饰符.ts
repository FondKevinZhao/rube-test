// 公共、私有与受保护的修饰符
// 修饰符(类中成员的修饰符)：主要是描述类中的成员(属性，构造函数，方法)的可访问性
/**
 * public: 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 public 来做修饰；例如，C# 要求必须明确地使用 public 指定成员是可见的。 在 TypeScript 里，成员都默认为 public。
 * 
 * private: 当成员被标记成 private 时，它就不能在声明它的类的外部访问。
 * 
 * protected: protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问。
 */

/* // 定义一个类
class Person {
  // 属性
  name: string;
  // 构造函数
  constructor(name: string) {
    // 更新属性
    this.name = name;
  }

  // 方法
  eat() {
    console.log('嗯，这个骨头真好吃', this.name);
  }
}

// 实例对象
const per = new Person('大蛇丸');
// 在类的外部可以方位类中的属性成员
console.log(per.name);
per.eat(); */



// 类中的成员都有自己的默认的访问修饰符 --- public(默认就是public，加了和不加结果是一样的)
/* // 定义一个类
class Person {
  // 属性
  public name: string;
  // 构造函数
  public constructor(name: string) {
    // 更新属性
    this.name = name;
  }

  // 方法
  public eat() {
    console.log('嗯，这个骨头真好吃', this.name);
  }
}

// 实例对象
const per = new Person('大蛇丸');
// 在类的外部可以方位类中的属性成员
console.log(per.name);
per.eat(); */



// 一旦类中的某个成员使用private修饰之后，类外边就不能访问了，当然子类中也是无法访问该成员数据的
// 定义一个类
/* class Person {
  // 属性
  private name: string;
  // 构造函数
  public constructor(name: string) {
    // 更新属性
    this.name = name;
  }

  // 方法
  public eat() {
    console.log('嗯，这个骨头真好吃', this.name);
  }
}

// 定义一个子类
class Student extends Person {
  // 构造函数
  constructor(name: string) {
    super(name)
  }
  play() {
    // console.log('我就喜欢玩布娃娃', this.name); // this.name 会报错
  }
}

// 实例对象
const per = new Person('大蛇丸');
// 在类的外部可以方位类中的属性成员
// console.log(per.name); // 报错
per.eat(); */



// protected修饰了属性成员，类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，子类中是可以访问该成员数据的
// 定义一个类
/* class Person {
  // 属性
  protected name: string;
  // 构造函数
  public constructor(name: string) {
    // 更新属性
    this.name = name;
  }

  // 方法
  public eat() {
    console.log('嗯，这个骨头真好吃', this.name);
  }
}

// 定义一个子类
class Student extends Person {
  // 构造函数
  constructor(name: string) {
    super(name)
  }
  play() {
    console.log('我就喜欢玩布娃娃', this.name); // 使用了protected修饰的父类成员可以在子类中访问，这个this.name 不会报错
  }
}

const stu = new Student('红豆');
stu.play(); // 在play函数的内部确实访问到了this.name
// console.log(stu.name); // 外部访问不到

// 实例对象
const per = new Person('大蛇丸');
// 在类的外部可以方位类中的属性成员
// console.log(per.name); // 报错
per.eat(); */

