// 泛型：在定义函数或者是接口或者是类的时候，不能预先确定要使用的数据的类型，而是在使用函数或者是几口或者是类的时候，才能确定数据的类型

// 需求：定一个一个函数传入两个参数，第一个参数是数据，第二个参数是数量，函数的作用：根据数量产生对应个数的数据，存放在一个数组中
// 定义一个函数
/* function getArr(value: number, count: number): number[] {
  // 根据数据和数量产生一个数组
  // const arr : 类型[] = []
  const arr: number[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }

  return arr;
}

const arr1 = getArr(100.123, 3);
console.log(arr1);
 */



// 定义一个函数，同上，只不过，传入的是字符串类型
/* function getArr(value: number, count: number): number[] {
  // 根据数据和数量产生一个数组
  // const arr : 类型[] = []
  const arr: number[] = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }

  return arr;
}

const arr1 = getArr(100.123, 3);
console.log(arr1);
const arr2 = getArr('abc', 3); // 报错 */



// 使用泛型来解决
function getArr<T>(value: T, count: number): T[] {
  // 根据数据和数量产生一个数组
  // const arr: T[] = []; // 这样写可以。这样也可以：const arr:Array<T>
  const arr: Array<T> = [];
  for (let i = 0; i < count; i++) {
    arr.push(value);
  }

  return arr;
}

// <number> 表示传入的参数是number类型的
const arr1 = getArr<number>(100.123, 3);
console.log(arr1);
const arr2 = getArr<string>('abc', 3); // 报错
console.log(arr2);











