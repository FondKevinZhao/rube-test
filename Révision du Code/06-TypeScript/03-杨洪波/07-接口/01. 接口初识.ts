// 接口：TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。
// 接口的定义：是一种类型，是一种规范，是一种规则，是一个能力，是一种约束


// 需求: 创建人的对象, 需要对人的属性进行一定的约束
/**
 * id是number类型, 必须有, 只读的
   name是string类型, 必须有
   age是number类型, 必须有
   sex是string类型, 可以没有
 */
// 定义一个接口，该接口作为person对象的类型使用，限定或者约束该对象中的属性数据，因为接口的首字母是I，所以接口名以I开头
interface IPerson {
  readonly id: number, // 加上readonly变成只读属性
  name: string,
  age: number,
  sex?: string // 加上?，表示此属性是可选的
}


// 定义一个对象，该对象的类型就是我定义的接口IPerson
const person: IPerson = {
  id: 1,
  name: '小甜甜',
  age: 18,
  // sex这个属性没有也是可以的
  sex: '女'
}
console.log(person);