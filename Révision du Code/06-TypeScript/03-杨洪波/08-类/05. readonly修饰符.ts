// readonly 修饰符：你可以使用readonly关键字将属性设置为只读的，只读属性必须在声明时或构造函数里被初始化
// 首先，readonly是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员，就不能在外部被随意的修改了

/* // 定义一个类型
class Person {
  // 属性
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    console.log('靠你其哇', this.name);
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
console.log(person.name);
person.name = '大甜甜';
console.log(person.name); */



// 加上只读属性readonly
// 构造函数中，可以对只读的属性成员的数据进行修改 --- 不过没有意义
// 定义一个类型
/* class Person {
  // 属性
  readonly name: string;
  // 构造函数
  constructor(name: string) {
    this.name = name;
    this.name = '大甜甜'; // 没有意义
  }
  sayHi() {
    console.log('靠你其哇', this.name);
    // 类中的普通方法中，也是不能修改readonly修饰的成员属性值
    // this.name = '大甜甜'; // 报错
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
console.log(person.name);
// person.name = '大甜甜'; // 报错
console.log(person.name);
 */



// readonly 修饰类中的构造函数中的参数(参数属性)
/* class Person {
  // 构造函数
  // 构造函数中的name参数，一旦使用readonly进行修饰后，该name参数可以叫参数属性
  // 构造函数中的name参数，一旦使用readonly进行修饰后，那么Person中就有了一个name的属性成员
  // 构造函数中的name参数，一旦使用readonly进行修饰后，那么外部也是无法修改类中的name属性成员值的
  constructor(readonly name: string) {
    this.name = name;
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
console.log(person.name); */



// 把readonly换成public
// readonly 修饰类中的构造函数中的参数(参数属性)
/* class Person {
  // 构造函数
  // 构造函数中的name参数，一旦使用public进行修饰后，那么这个Person类中就有了一个公共的name属性成员
  constructor(public name: string) {
    this.name = name;
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
console.log(person.name); */



/* // 把readonly换成private
class Person {
  // 构造函数
  // 构造函数中的name参数，一旦使用private进行修饰后，那么这个Person类中就有了一个私有的name属性成员，外部无法访问
  constructor(private name: string) {
    this.name = name;
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
// console.log(person.name);  // 报错 */



// 把readonly换成protected
class Person {
  // 构造函数
  // 构造函数中的name参数，一旦使用protected进行修饰后，那么这个Person类中就有了一个私有的name属性成员，外部无法访问，只能在本类中和派生类中访问
  constructor(protected name: string) {
    this.name = name;
  }
}

// 实例化对象
const person: Person = new Person('小甜甜');
console.log(person);
// console.log(person.name);  // 报错

