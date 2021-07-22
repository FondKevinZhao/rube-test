// 基本数据类型
// Number、String、Boolean、Null、Undefined、Symbol、BigInt
export const a: number = 1;
const b: string = 'str';
let c: boolean = true;
c = false;
const d: null = null;
const e: undefined = undefined;
const f: symbol = Symbol();
const g: bigint = BigInt(111);


console.log(a, b, c, d, e, f, g);

// 引用数据类型
// Object、Function、Array

// interface声明接口，接口可以作为对象的类型
interface Person {
  name: string,
  age: number
}
const person: Person = {
  name: 'jack',
  age: 18,
}


function add(x: number, y: number):number {
  return x + y
}

function count(x: number, y: number):void {
  console.log(x - y);
}

const arr1: number[] = [1, 2, 3]
const arr2: Array<boolean> = [true, false]
const arr3 = [2, 3, 4]