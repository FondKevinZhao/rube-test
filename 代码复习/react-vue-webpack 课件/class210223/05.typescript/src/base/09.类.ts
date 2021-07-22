/*
  public 公共的、公开的。类和实例都可以访问
  private 私有的。只有当前类才能访问，实例和子类不能访问
  protected 受保护的。只有当前类和子类可以访问，实例不能访问
*/

class Person {
  public name: string
  // private readonly age: number
  private age: number
  protected sex: string

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;

    this.setName('jack');
    this.setAge(18);
    this.setSex('男');
  }

  public setName(name: string):void {
    this.name = name;
  }
  private setAge(age: number):void {
    this.age = age;
  }
  protected setSex(sex: string):void {
    this.sex = sex;
  }
}

class Son extends Person {
  constructor(name: string, age: number, sex: string) {
    super(name, age, sex)

    super.setSex('女')
  }
}

// const p = new Person('bob', 22, '女');

// p.setName('jerry');
// // p.setAge(33); // error
// // p.setSex('男') // error
// console.log(p);

const s = new Son('bob', 22, '女')
s.setName('jerry');
// s.setAge(33); // error
// s.setSex('男') // error
console.log(s);



export default Person