// 初识接口2 Interface：1. 可以限制对象 2. 可以限制类
// 注意：这里学习的接口只是在我们写代码的时候做一个约束，没有其他的意思


/* interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 可选值
  [propname: string]: any, // 意思是：1. 属性名是一个string类型，值不限 2. 可以定义多个属性名+属性值
  say(): string, // 必须有一个say方法，返回值必须是string类型
} */

/* // 接口限制对象
const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waistline: 21, // 可选值，可以不写
  sex: '女',
  say() {
    return '欢饮光临，红浪漫洗浴中心'
  }
}

const screenResume = (girl: Girl) => {
  // bust 胸围
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age > 24 && girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl: Girl) => {
  console.log(girl.name + '年龄是' + girl.age + '胸围是' + girl.bust);
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline);
  girl.sex && console.log(girl.name + '性别是：' + girl.sex);
}

screenResume(girl);
getResume(girl); */




// 接口限制类
// implements 使生效  意思是XiaoJieJie这个类必须受到 Girl接口的约束
/* class XiaoJieJie implements Girl {
  name = '刘英';
  age = 18;
  bust = 90;
  say() {
    return '欢饮光临，红浪漫洗浴中心';
  }
} */



// 接口间的继承
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number; // 可选值
  [propname: string]: any,
  say(): string, // 必须有一个say方法，返回值必须是string类型
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waistline: 21, // 可选值，可以不写
  sex: '女',
  say() {
    return '欢饮光临，红浪漫洗浴中心'
  },
  teach() {
    return '爱教书'
  }
}

// 首先Teacher要符合Girl的所有特性，其次可以拥有自己的属性或方法
interface Teacher extends Girl {
  teach(): string; // 一个teach方法，返回值是string类型
}

/* 
  girl: Teacher 意思是：
    - girl 这个对象的属性和方法必须按照Teacher这个接口来定义
    - Teacher 的内容约束是继承自Girl接口+自身的teach方法，这些都要在girl对象身上定义好，才不会报错
*/
const getResume = (girl: Teacher) => {
  console.log(girl.name + '年龄是' + girl.age + '胸围是' + girl.bust);
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline);
  girl.sex && console.log(girl.name + '性别是：' + girl.sex);
  girl.teach() && console.log(girl.name + '说的是：' + girl.teach());
}
getResume(girl);