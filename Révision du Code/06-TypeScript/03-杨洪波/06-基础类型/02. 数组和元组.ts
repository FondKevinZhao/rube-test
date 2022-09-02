// 数组类型
// 语法：数组定义方式1：let 变量名: 数据类型[] = [值1， 值2， 值3, ...]
/* let arr1: number[] = [10, 20, 30, 40, 50];
console.log(arr1); */

// 数组定义方式2：泛型的写法
// 语法：let 变量名: Array<数据类型> = [值1, 值2, 值3, ...]
/* let arr2: Array<number> = [100, 200, 300];
console.log(arr2); */

// 注意问题：数组定义后，里面的数据的类型必须和定义数组的时候的类型是一致的，否则有错误提示信息，也不会编译通过
// let arr3:Array<number> = [100, 200, 300, 'string']; // 会报错，这个时候可以使用元组类型来解决
// let arr3:[number, number, number, string] = [100, 200, 300, 'string']; // 会报错，这个时候可以使用元组类型来解决




// 元组类型：在定义数组的时候，类型和数组的个数一开始就已经限定了
/* let arr3: [string, number, boolean] = ['小甜甜', 100, true];
console.log(arr3); */

// 注意问题：元组类型在使用的时候，数据的类型的位置和数据的个数，应该和在定义元组的时候的数据类型及位置应该是一致的
/* let arr4: [string, number, boolean] = ['stirng', '小甜甜', 100, true];
console.log(4); // 会报错，要求类型和个数要匹配 */
