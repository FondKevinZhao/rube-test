// 泛型类

// 定义一个类，类中的属性值和类型是不确定的，方法中的参数及返回值的类型也是不确定的

// 定义一个泛型类
class GenericNumber<T>{
  // 默认的属性的值的类型是泛型类型
  defaultValue?: T
  // add方法的参数和返回值类型都是不确定的
  add?: (x: T, y: T) => T
}

// 在实例化对象的时候，再确定泛型的类型
const g1: GenericNumber<number> = new GenericNumber<number>()
// 设置属性值
g1.defaultValue = 1;
// 相加的方法，鼠标放在add身上可以看到，已经有了number类型的提示了
g1.add = function (x, y) {
  return x + y;
}
console.log(g1.add(10, 20));

// 在实例化对象的时候，再确定泛型的类型
const g2: GenericNumber<string> = new GenericNumber<string>()
// 设置属性值
g2.defaultValue = 'abc';
// 相加的方法，鼠标放在add身上可以看到，已经有了string类型的提示了
g2.add = function (x, y) {
  return x + y;
}
console.log(g2.add('a', 'b'));