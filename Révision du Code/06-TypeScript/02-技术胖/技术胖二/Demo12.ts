// 类的构造函数 
// 注意：下面的public可以省略，因为默认就是public
/* class Person {
  public name!: string;
  constructor(name:string) {
    this.name = name;
  }
}

const person = new Person('jspang');
console.log(person.name); */



// 上面的代码太多了，我们优化一下
// 有博客为证：https://blog.csdn.net/youhebuke225/article/details/124158876
/* class Person {
  constructor(public name: string) {
    this.name = name;
  }
}

const person = new Person('jspang222');
console.log(person.name); */



// 继承时的构造函数的写法
/* class Person {
  // 这里的public不能省略
  constructor(public name: string, public sex: string) {
    this.name = name;
    this.sex = sex;
  }
}

class Teacher extends Person {
  constructor(public age: number) {
    super('jspang333', '男'); // 因为父类中有name, 需要传递参数，不然会报错
  }
}

const teacher = new Teacher(18);
console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.sex); */



// 如果父类没有constructor，子类同样要写super
/* class Person {

}

class Teacher extends Person {
  constructor(public age: number) {
    super(); 
  }
}

const teacher = new Teacher(18);
console.log(teacher.age); */