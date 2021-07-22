/*
  元组 Tuple: 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
  枚举 Enum: 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。
  任意值 Any：用来表示允许赋值为任意类型。
  空值 Void: 与 Any 相反，用来表示没有任何类型
  永不存在的值 Never：表示的是那些永不存在的值的类型
  不知道的值 Unkown: 与any类似，允许赋值为任意类型，不同的是需要进行类型断言
*/

// 数组
export const arr1: number[] = [1, 2, 3]
// 元组 Tuple
export const arr2: [number, boolean] = [1, true]
arr2.push(2)
arr2.push(false)
console.log(arr2);


// 枚举 Enum
enum Color {
  green,
  red,
  yellow
}

console.log(Color.green);
console.log(Color.red);
console.log(Color.yellow);

console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);

// 任意值 Any
let a: any;
a = 123;
a = true;
a = 'str';
a.toUpperCase()

// 不知道的值 Unkown
let b: unknown;
b = 123;
b = true;
b = 'str';
if (typeof b ==='string') {
  b.toUpperCase()
}

// 空值 Void: 与 Any 相反，用来表示没有任何类型
function add():void {}
// 永不存在的值 Never：表示的是那些永不存在的值的类型