// 初识接口1 Interface

/* const screenResume = (name: string, age: number, bust: number) => {
  // bust 胸围
  age < 24 && bust >= 90 && console.log(name + '进入面试');
  age > 24 && bust < 90 && console.log(name + '你被淘汰');
}

const getResume = (name: string, age: number, bust: number) => {
  console.log(name + '年龄是' + age + '胸围是' + bust);
}

screenResume('大脚', 18, 94);
getResume('大脚', 18, 94); */



// 优化上面的代码
/* interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 可选值
}
const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waistline: 21, // 可选值，可以不写
}
const screenResume = (girl: Girl) => {
  // bust 胸围
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age > 24 && girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl: Girl) => {
  console.log(girl.name + '年龄是' + girl.age + '胸围是' + girl.bust);
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
}

screenResume(girl);
getResume(girl); */