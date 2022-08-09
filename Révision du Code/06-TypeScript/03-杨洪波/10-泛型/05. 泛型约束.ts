// 泛型约束
// 如果我们直接对一个泛型参数取length属性，会报错，因为这个泛型根本不知道它有这个属性

/* function getLength<T>(x: T): number {
  return x.length; // 会报错
} */



// 定义一个接口，用来约束
interface ILength {
  // 接口中有一个属性length
  length: number
}

function getLength<T extends ILength>(x: T): number {
  return x.length;
}
console.log(getLength<string>('what are you no sha lei'));
console.log(getLength<string[]>(['a', 'b']));
// console.log(getLength<number>(123)); // 报错，因为number是没有length属性的
