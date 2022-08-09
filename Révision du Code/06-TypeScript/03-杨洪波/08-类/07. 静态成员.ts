// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的

/* class Person {
  // 静态属性
  // 类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息，我们把name改成name1就好了
  static name1: string;
  constructor(name: string) {
    // 此时this是实例对象，name1是静态属性，不能通过实例对象直接调用直接调用静态属性来使用
    // this.name1 = name; 
  }
  sayHi() {
    console.log('萨瓦迪卡')
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
// 通过实例对象调用的属性(实例属性)
console.log(person.name1);  // 会报错
// 通过实例对象调用的方法(实例方法)
person.sayHi(); */



class Person {
  // 静态属性
  // 类中默认有一个内置的name属性，所以呢，此时会出现错误的提示信息，我们把name改成name1就好了
  static name1: string = '小甜甜';
  /* 
    // 构造函数是不能通过static进行修饰的
    constructor() {} 
  */
  static sayHi() {
    console.log('萨瓦迪卡')
  }
}

// 实例化对象 --- 如果是静态的属性和方法，不能用new来实例化
// const person: Person = new Person();

// 通过类名.静态属性的方式来访问该成员数据
console.log(Person.name1);  // 会报错
// 通过类名.静态方法的方式来访问该成员数据
Person.sayHi();

// 通过类名.静态属性方式来设置该成员数据
Person.name1 = '佐助';
console.log(Person.name1);


