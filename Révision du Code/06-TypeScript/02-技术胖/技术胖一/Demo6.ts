// 数组类型注解的方法
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ['a', 'b', 'c'];

// 这是一个不常见的数组类型的注解
const undefinedArr: undefined[] = [undefined, undefined];



// 数组中有数字也有字符串
const arr: (number | string)[] = [1, 'string', 2];
// 如果写法不太熟悉，就先把后面的数组写出来，然后鼠标放到arr1上，就可以看到类型推断，照着写就行
const arr1 = [1, 'string', 2];



// 数组中包含对象
const xiaojiejies: { name: string, age: number }[] = [
  { name: '刘英', age: 18 },
  { name: '谢大脚', age: 28 },
]
console.log(xiaojiejies);



// 数组中包含对象 - type alias 类型别名的写法
type Lady = {
  name: string,
  age: number
}
const xiaojiejies2: Lady[] = [
  { name: '刘英', age: 18 },
  { name: '谢大脚', age: 28 },
]
console.log(xiaojiejies2);



// 数组中包含对象 - 用类的方式 -- 打印不出来，不知道为啥,好像是不能这样写了，以前可以
/* class Madam {
  name: string;
  age: number;
}
const xiaojiejies3: Madam[] = [
  { name: '刘英', age: 18 },
  { name: '谢大脚', age: 28 },
]
console.log(xiaojiejies3); */