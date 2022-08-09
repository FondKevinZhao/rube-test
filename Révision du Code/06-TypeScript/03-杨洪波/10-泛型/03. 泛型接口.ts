// 泛型接口：在定义接口时，为接口中的属性或者方法定义泛型类型，在使用接口时，再指定具体的泛型类型

// 需求：定义一个类用来存储用户的相关信息(id，名字，年龄)，通过一个类的实例对象调用add方法可以添加多个用户信息对象，调用getUserId方法可以根据id获取某个指定的用户信息对象
// 定义一个用户信息的类
class User {
  id?: number // 用户id ?代表该属性可有可无
  name: string // 用户姓名
  age: number // 用户的年龄
}

// 定义一个泛型接口
interface IBaseCRUD<T> {
  data: Array<T>
  add: (t: T) => T
  getUserId: (id: number) => T
}

// 定义一个类，可以针对用户的信息对象进行增加及查询的操作
// CRUD: create, read, update, delete
class UserCRUD implements IBaseCRUD<User> {
  // 用来保存多个User类型的用户信息对象
  data: Array<User> = [];
  // 方法用来存储用户信息对象的
  add(user: User): User {
    // 产生id
    user.id = Date.now() + Math.random();
    // 把用户信息添加到data数组中
    this.data.push(user);
    return user
  };
  // 方法根据id查询指定的用户信息对象
  getUserId(id: number): User {
    // 这里会报错
    // return this.data.find(user => user.id === id)
  };
}










