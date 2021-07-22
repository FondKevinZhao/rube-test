// 接口一般首字母大写
interface Person {
  readonly name: string; // 只读属性
  age: number;
  sex?: string; // ?代表可选属性
  [propName: string]: unknown // 任意属性
} 

const person:Person = {
  name: 'jack',
  age: 18,
  sex: '男',
  hobby: [],
  address: 'xxxx'
}

person.age++;
// person.name = 'bob'