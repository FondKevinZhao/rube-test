// 抽象类：包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法，而且抽象类是不能被实例化的
// 抽象类的作用：为了让子类可以实例化及实现内部的抽象方法。大白话：抽象类最终是为子类服务的 

// 定义一个抽象类
// abstract class Animal {
//   // 抽象方法 
//   // 抽象类中不能写具体的内容，会报错
//   /* abstract eat() {
//     console.log('真好吃');
//   } */
//   /* abstract eat() {

//   } */

//   // 实例方法
// }



// 定义一个抽象类
abstract class Animal {
  abstract name: string;
  // 抽象方法 
  // 抽象类中不能写具体的内容，会报错
  abstract eat(): any; // : any 不能省
  // 实例方法
  sayHi() {
    console.log('您好啊');
  }
}

// 不能实例化抽象类的对象
// const ani:Animal = new Animal(); 

// 定义一个子类(派生类)Dog
class Dog extends Animal {
  name: string = '小黄';
  // 重新的实现抽象类当中的方法，这个方法就是Dog类的实例方法了
  eat() {
    console.log('舔着吃，真好');
  }
}

// 实例化Dog对象
const dog: Dog = new Dog();
dog.eat();
// 调用的是抽象类中的实例方法
dog.sayHi();
console.log(dog.name);









