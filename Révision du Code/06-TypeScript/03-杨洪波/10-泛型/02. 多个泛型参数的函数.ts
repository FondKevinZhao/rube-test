// 多个泛型参数的函数：函数中有多个泛型的参数

function getMsg<K, V>(value1: K, value2: V): [K, V] {
  return [value1, value2];
}

const arr1 = getMsg<string, number>('abc', 2);
console.log(arr1);
console.log(arr1[0].split(''), arr1[1].toFixed(2));




