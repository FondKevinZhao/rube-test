/* 
  类的访问类型：三个单词：
    - private：私有的 当成员被标记成private时，它就不能在声明它的类的外部访问。
    注意：如果想访问private修饰的属性，可以通过 set/get
    - public(默认)：允许在类的外部或者类的内部被调用
    - protected：受保护的 protected与private很相似，只能在内部使用。不同的是，protected成员在继承的时候仍然可以被访问

    请看这个博客一目了然：https://blog.csdn.net/qq_46302247/article/details/125619916
*/

// 类的内部和类的外部
// 类的内部：在大括号之内。如：Person {类的内部}
// 类的外部：在大括号之外。如：const person = new Person()
/* class Person {
  name!: string; // 这样写也可以
  // name = 'string'; // 这样写也可以
}

const person = new Person()
person.name = 'jspang';
console.log(person.name); */



// public：允许在类的外部或者类的内部被调用
// private: 只允许在类的内部使用
/* class Person {
  public name!: string; // 这样写也可以
  public sayHello() {
    console.log(this.name + ' say Hello');
  }
  private age!: number; // 变量后面加个感叹号就不会不错，不然这么声明age!: number; 会报错
}

const person = new Person()
person.name = 'jspang';
person.sayHello(); */
// console.log(person.age); // 会报错：说属性age为私有属性，只能在Person中访问



// protected：只能在类的内部使用。还可以在类的继承中使用
/* class Person {
  public name!: string; // 这样写也可以
  protected sayHello() {
    console.log(this.name + ' say Hello');
  }
}

const person = new Person()
person.name = 'jspang';
// person.sayHello(); // 这里会报错：属性sayHello受保护 */



// 做一个继承，让sayHello可以被访问
/* class Person {
  public name!: string; // 这样写也可以
  protected sayHello() {
    console.log(this);
    console.log(this.name + ' say Hello');
  }
}

class Teacher extends Person {
  public sayGood() {
    return super.sayHello()
  }
}

const person = new Person()
person.name = 'jspang';

const teacher = new Teacher()
teacher.sayGood(); */