// 类型注释(type annotation)和类型推断(type inference)

/* let count: number;
count = 123; */ // 这个时候把鼠标放到count上，就会看到：let count: number 这就是类型注释

// let countInference = 123; // 你没有写它是什么类型的，这个时候把鼠标放到countInference上，就会看到：let countInference: number 这就是类型推断



// 能够分析出类型
/* const one = 1;
const two = 2;
const three = one + two; */ // 能够推断出three是number类型


// 不能够分析出类型
function getTotal(one: number, two: number) { // 如果形参不写类型，就会显示any，我把two不写，鼠标移到two会看到显示的any，如果形参不写类型会报错的，控制台打印不出来
  return one + two;
}
const total = getTotal(1, 2);
console.log(total);



// 能够判断出对象中常量的属性：鼠标放到XiaoJieJie变量名上可以看到推断出的类型
const XiaoJieJie = {
  name: '刘英',
  age: 18
}