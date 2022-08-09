// 抽象类和只读属性的使用

// 定一个普通类 - 可修改
/* class Person {
  constructor(public name: string) { }
}

const person = new Person('jspang');
console.log(person.name);
person.name = '谢广坤';
console.log(person.name); */



// 定一个普通类 - 不可修改
/* class Person {
  public readonly _name: string
  constructor(name: string) {
    this._name = name;
  }
}

const person = new Person('jspang');
console.log(person._name);
// person._name = '谢广坤'; // 报错
console.log(person._name); */



// 抽象类
abstract class Girl {
  // sbstract 一般都紧跟着一个抽象的方法
  // 这里的any仍然不能少
  abstract skill(): any; // 这只是一个抽象的方法，里面有什么内容我们不确定，所以后面没有花括号
}

// 下面的类只要是继承于Girl，都需要实现Girl类中的方法 skill()
class Waiter extends Girl {
  skill() {
    console.log('大爷儿，请喝水');
  }
}

class BaseTeacher extends Girl {
  skill() {
    console.log('大爷儿，来个泰式按摩吧');
  }
}

class seniorTeacher extends Girl {
  skill() {
    console.log('大爷儿，来个SPA全身按摩吧');
  }
}